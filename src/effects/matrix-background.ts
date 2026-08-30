/**
 * MATRIX BACKGROUND EFFECT
 * ------------------------
 * Owns only the canvas animation. Header controls are bound from app.ts,
 * which keeps the switch independent from canvas/HMR lifecycle.
 */

const MATRIX_CANVAS_CLASS = "matrix-background";
const MATRIX_STORAGE_KEY = "deazi-matrix-motion-enabled";
const MATRIX_GLYPHS =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ";

type MatrixStream = {
  x: number;
  y: number;
  speed: number;
  length: number;
  phase: number;
};

export type MatrixController = {
  isMotionEnabled: () => boolean;
  setMotionEnabled: (enabled: boolean) => void;
  toggleMotion: () => boolean;
  destroy: () => void;
};

type MatrixWindow = Window & {
  __deaziMatrixController?: MatrixController;
};

function readMotionPreference() {
  try {
    return window.localStorage.getItem(MATRIX_STORAGE_KEY) !== "0";
  } catch {
    return true;
  }
}

function storeMotionPreference(enabled: boolean) {
  try {
    window.localStorage.setItem(MATRIX_STORAGE_KEY, enabled ? "1" : "0");
  } catch {
    // localStorage can be unavailable in restricted browser contexts.
  }
}

export function initMatrixBackground(): MatrixController | null {
  const matrixWindow = window as MatrixWindow;
  matrixWindow.__deaziMatrixController?.destroy();

  const host = document.querySelector<HTMLElement>(".bg") ?? document.body;
  const canvas = document.createElement("canvas");
  canvas.className = MATRIX_CANVAS_CLASS;
  canvas.setAttribute("aria-hidden", "true");
  host.prepend(canvas);

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) {
    canvas.remove();
    return null;
  }

  const fontSize = 17;
  const columnGap = 24;

  let width = 0;
  let height = 0;
  let streams: MatrixStream[] = [];
  let animationFrame = 0;
  let previousTime = performance.now();
  let motionEnabled = readMotionPreference();
  let pageVisible = !document.hidden;
  let isDestroyed = false;

  const randomGlyph = () =>
    MATRIX_GLYPHS[Math.floor(Math.random() * MATRIX_GLYPHS.length)] ?? "0";

  const createStreams = () => {
    const columns = Math.ceil(width / columnGap);
    streams = Array.from({ length: columns }, (_, column) => ({
      x: column * columnGap + Math.random() * 4,
      y: Math.random() * (height + 260),
      speed: 24 + Math.random() * 34,
      length: 9 + Math.floor(Math.random() * 18),
      phase: Math.random() * Math.PI * 2,
    }));
  };

  const configureCanvas = (preservePositions = false) => {
    const oldWidth = width;
    const oldHeight = height;
    const oldStreams = streams;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.textBaseline = "top";
    context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;

    if (!preservePositions || !oldStreams.length || !oldWidth || !oldHeight) {
      createStreams();
      return;
    }

    const columns = Math.ceil(width / columnGap);
    const yScale = height / oldHeight;
    streams = Array.from({ length: columns }, (_, column) => {
      const previous = oldStreams[Math.min(column, oldStreams.length - 1)];
      if (!previous) {
        return {
          x: column * columnGap + Math.random() * 4,
          y: Math.random() * (height + 260),
          speed: 24 + Math.random() * 34,
          length: 9 + Math.floor(Math.random() * 18),
          phase: Math.random() * Math.PI * 2,
        };
      }

      return {
        ...previous,
        x: column * columnGap + (previous.x % columnGap),
        y: previous.y * yScale,
      };
    });
  };

  const renderFrame = (time: number, advance: boolean) => {
    const delta = advance ? Math.min((time - previousTime) / 1000, 0.05) : 0;
    previousTime = time;
    context.clearRect(0, 0, width, height);

    for (const stream of streams) {
      const sway = Math.sin(time * 0.00035 + stream.phase) * 1.4;

      for (let index = 0; index < stream.length; index += 1) {
        const y = stream.y + index * fontSize;
        if (y < -fontSize || y > height + fontSize) continue;

        const alpha = index === 0 ? 0.9 : Math.max(0.06, 0.45 - index * 0.026);
        context.fillStyle =
          index === 0
            ? "rgba(180, 255, 195, 0.90)"
            : `rgba(38, 176, 72, ${alpha})`;
        context.fillText(randomGlyph(), stream.x + sway, y);
      }

      if (!advance) continue;

      stream.y -= stream.speed * delta;
      if (stream.y + stream.length * fontSize < -24) {
        stream.y = height + 40 + Math.random() * 220;
        stream.speed = 24 + Math.random() * 34;
        stream.length = 9 + Math.floor(Math.random() * 18);
      }
    }
  };

  const stopAnimation = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
  };

  const draw = (time: number) => {
    // The callback that owned this id is running now, so clear it before
    // possibly scheduling the next frame. This prevents duplicate RAF loops.
    animationFrame = 0;

    if (isDestroyed || !motionEnabled || !pageVisible) return;

    // Browsers heavily throttle background tabs. If a visibility event is
    // delayed or missed, never use the accumulated gap to advance streams.
    // The first frame after a long pause is rendered in-place; motion resumes
    // from the following frame with a fresh clock.
    if (time - previousTime > 250) {
      previousTime = time;
      renderFrame(time, false);
    } else {
      renderFrame(time, true);
    }

    if (!isDestroyed && motionEnabled && pageVisible) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const startAnimation = () => {
    if (isDestroyed || !motionEnabled || !pageVisible || animationFrame) return;
    previousTime = performance.now();
    animationFrame = window.requestAnimationFrame(draw);
  };

  const setMotionEnabled = (enabled: boolean) => {
    if (isDestroyed || motionEnabled === enabled) return;

    motionEnabled = enabled;
    storeMotionPreference(enabled);
    stopAnimation();

    if (motionEnabled) {
      // Reset only timing, not stream coordinates. The next frame continues
      // from exactly where the paused frame was left.
      startAnimation();
    }
  };

  const handleVisibilityChange = () => {
    pageVisible = !document.hidden;
    stopAnimation();
    previousTime = performance.now();

    if (!pageVisible) return;

    // Paint the preserved state once without advancing it. This avoids a
    // crowded/catch-up frame when returning to a tab after a long absence.
    renderFrame(previousTime, false);
    startAnimation();
  };

  const handlePageHide = () => {
    pageVisible = false;
    stopAnimation();
    previousTime = performance.now();
  };

  const handlePageShow = () => {
    pageVisible = !document.hidden;
    stopAnimation();
    previousTime = performance.now();
    renderFrame(previousTime, false);
    startAnimation();
  };

  const handleResize = () => {
    stopAnimation();
    configureCanvas(true);
    previousTime = performance.now();
    renderFrame(previousTime, false);
    startAnimation();
  };

  const controller: MatrixController = {
    isMotionEnabled: () => motionEnabled,
    setMotionEnabled,
    toggleMotion: () => {
      setMotionEnabled(!motionEnabled);
      return motionEnabled;
    },
    destroy: () => {
      if (isDestroyed) return;
      isDestroyed = true;
      stopAnimation();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("pageshow", handlePageShow);
      canvas.remove();
      if (matrixWindow.__deaziMatrixController === controller) {
        delete matrixWindow.__deaziMatrixController;
      }
    },
  };

  configureCanvas(false);
  renderFrame(previousTime, false);
  startAnimation();
  window.addEventListener("resize", handleResize, { passive: true });
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handlePageHide);
  window.addEventListener("pageshow", handlePageShow);
  matrixWindow.__deaziMatrixController = controller;

  return controller;
}
