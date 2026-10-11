import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { transformSync } from '../node_modules/esbuild/lib/main.js';
const source = fs.readFileSync('src/views/app.ts', 'utf8');
const part = source.slice(source.indexOf('function initPageIcons()'), source.indexOf('async function initCat()'));
const events = new Map(), queue = new Map(); let time = 0, id = 0;
const icon = { dataset: { pageIcon: 'v2' }, style: {}, addEventListener: (name, fn) => events.set(name, fn) };
const context = vm.createContext({ window: { requestAnimationFrame: fn => (queue.set(++id, fn), id), cancelAnimationFrame: key => queue.delete(key) }, document: { hidden: false, querySelectorAll: () => [icon], addEventListener: () => {} }, performance: { now: () => time }, getAnimationFrames: () => ['a', 'b', 'c'], preloadFrames: () => Promise.resolve() });
vm.runInContext(transformSync(part, { loader: 'ts' }).code + ';initPageIcons()', context);
await Promise.resolve(); await Promise.resolve();
assert.equal(queue.size, 0, 'monster must be static at rest');
assert.equal(icon.style.backgroundImage, 'url("a")');
events.get('pointerenter')(); assert.equal(queue.size, 1);
time = 90; const [key, frame] = queue.entries().next().value; queue.delete(key); frame(time);
assert.equal(icon.style.backgroundImage, 'url("b")', 'hover must animate at 90 ms');
events.get('pointerleave')(); assert.equal(queue.size, 0); assert.equal(icon.style.backgroundImage, 'url("a")');
events.get('focus')(); assert.equal(queue.size, 1); events.get('blur')(); assert.equal(queue.size, 0);
console.log('PASS: static monster, hover/focus animation, 90 ms, stops on leave');

let seed=1; const math=Object.create(Math); math.random=()=>((seed=seed*16807%2147483647)/2147483647);
const listeners=new Map(); let snapshot;
const canvas={style:{},setAttribute(){},remove(){},getContext:()=>({setTransform(){},clearRect(){},fillText(){}})};
const matrixScope=vm.createContext({Math:math,Event,performance:{now:()=>time},module:{exports:{}},exports:{},
window:{localStorage:{getItem:()=> '1',setItem(){}},sessionStorage:{getItem:()=>null,setItem:(_key,value)=>{snapshot=JSON.parse(value)}},innerWidth:320,innerHeight:600,devicePixelRatio:1,matchMedia:()=>({matches:true}),addEventListener:(name,fn)=>listeners.set(name,fn),removeEventListener(){},dispatchEvent(){},requestAnimationFrame:fn=>(queue.set(++id,fn),id),cancelAnimationFrame:key=>queue.delete(key)},
document:{hidden:false,querySelector:()=>({prepend(){}}),createElement:()=>canvas,addEventListener(){},removeEventListener(){}}});
vm.runInContext(transformSync(fs.readFileSync('src/effects/matrix-background.ts','utf8'),{loader:'ts',format:'cjs'}).code,matrixScope);
const controller=matrixScope.module.exports.initMatrixBackground();
assert.equal(queue.size,1,'explicit saved preference must override reduced motion');
listeners.get('pagehide')();const before=snapshot;listeners.get('pageshow')();
for(let i=0;i<100;i++){time+=16;const [key,frame]=queue.entries().next().value;queue.delete(key);frame(time)}
listeners.get('pagehide')();const after=snapshot;
assert.ok(after.streams.some((stream,index)=>stream.glyphs!==before.streams[index].glyphs),'digits and letters must change');
assert.ok(after.streams.every((stream,index)=>stream.y<before.streams[index].y),'columns must move upward');
controller.setMotionEnabled(false);assert.equal(queue.size,0);
controller.destroy();console.log('PASS: moving upward, changing glyphs, saved override, pause');
