import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { transformSync } from '../node_modules/esbuild/lib/main.js';
const source = fs.readFileSync('src/views/app.ts', 'utf8');
const body = source.slice(source.indexOf('function initPhotoGallery()'), source.indexOf('function initProjectLightbox()'));
const tick = async () => { for (let i=0; i<12; i++) await Promise.resolve(); };
function setup(failFirst = false) {
  const images = [], jobs = [], windowEvents = new Map(), documentEvents = new Map(), controls = new Map();
  const classes = values => { const set = new Set(values); return { add: value => set.add(value), remove: value => set.delete(value), contains: value => set.has(value), values: () => [...set] }; };
  const displayed = {};
  function image(slot, initial = []) {
    const item = { slot, src:'a', complete:false, naturalWidth:0, style:{}, classList:classes(initial), removeAttribute(){}, cloneNode(){ return image(slot, this.classList.values()); }, replaceWith(next){ displayed[slot] = next; }, decode(){ return new Promise((resolve,reject) => jobs.push({ item, resolve, reject })); } };
    images.push(item); return item;
  }
  const main = image('main'), full = image('full'); displayed.main=main; displayed.full=full;
  const attributes = new Map();
  const control = selector => { if (!controls.has(selector)) controls.set(selector, { addEventListener:(event, fn)=>controls.get(selector)[event]=fn }); return controls.get(selector); };
  const gallery = { setAttribute:(key,value)=>attributes.set(key,value), removeAttribute:key=>attributes.delete(key), querySelector:control };
  const modal = { classList:classes(['opacity-0','pointer-events-none']), setAttribute(){}, removeAttribute(){}, querySelector:control };
  const counter = { textContent:'' };
  const nodes = { '.profile-gallery':gallery, '#photo-modal':modal, '[data-main-photo]':main, '#photo-modal-img':full, '#photo-counter':counter };
  const context = vm.createContext({ profilePhotos:[{src:'a'},{src:'b'},{src:'c'}], window:{ addEventListener:(name,fn)=>windowEvents.set(name,fn) }, document:{ hidden:false, body:{style:{overflow:''}}, querySelector:selector=>nodes[selector], addEventListener:(name,fn)=>documentEvents.set(name,fn) } });
  vm.runInContext(transformSync(body,{loader:'ts'}).code+';initPhotoGallery()',context);
  let failed = false;
  const load = async () => {
    for (const job of jobs.splice(0)) {
      job.item.complete=true; job.item.naturalWidth=850;
      if (failFirst && !failed && job.item.src==='a') { failed=true; job.reject(new Error('temporary decode failure')); }
      else job.resolve();
    }
    await tick();
  };
  return { displayed, attributes, controls, windowEvents, documentEvents, counter, load };
}
const cold = setup(); await cold.load();
assert.ok(cold.displayed.main.classList.contains('is-image-ready'), 'cold-loaded main photo must be visible under bundled-image CSS');
assert.ok(cold.displayed.full.classList.contains('is-image-ready'), 'modal photo must be visible too');
assert.equal(cold.counter.textContent, '1 / 3');
// Recover visibility when returning to a cached page.
cold.displayed.main.classList.remove('is-image-ready'); cold.displayed.main.style.visibility='hidden';
cold.windowEvents.get('pageshow')(); await tick();
assert.ok(cold.displayed.main.classList.contains('is-image-ready')); assert.equal(cold.displayed.main.style.visibility,'');
const rapid = setup(); rapid.controls.get('[data-photo-inline-next]').click(); rapid.controls.get('[data-photo-inline-next]').click(); await rapid.load();
assert.equal(rapid.displayed.main.src,'c'); assert.equal(rapid.counter.textContent,'3 / 3');
const recovery = setup(true); await recovery.load(); recovery.windowEvents.get('online')(); await recovery.load();
assert.ok(recovery.displayed.main.classList.contains('is-image-ready')); assert.equal(recovery.attributes.has('aria-busy'),false);
console.log('PASS: cold-load visibility, cached-page restore, latest photo wins, transient decode recovery');
