import{E as u}from"./kaplay-DBPwJhjK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function f(e){const o=e.add([e.pos(120,80),e.sprite("bean"),e.area(),e.body(),"player",{speed:7e3,dir:e.vec2(0,0)}]);return e.onButtonDown("up",()=>{o.move(0,-o.speed*e.dt())}),e.onButtonDown("down",()=>{o.move(0,o.speed*e.dt())}),e.onButtonDown("left",()=>{o.move(-o.speed*e.dt(),0)}),e.onButtonDown("right",()=>{o.move(o.speed*e.dt(),0)}),o}const n=u({width:1280,height:1024,buttons:{next:{keyboard:"space",mouse:"left"},up:{keyboard:["w","up"],gamepad:["dpad-up"]},down:{keyboard:["s","down"],gamepad:["dpad-down"]},left:{keyboard:["a","left"],gamepad:["dpad-left"]},right:{keyboard:["d","right"],gamepad:["dpad-right"]},aButton:{keyboard:["space"],gamepad:["south","ltrigger","rtrigger"]}}});n.loadRoot("./");var p=nipplejs.create({zone:document.getElementById("joystick"),mode:"static",position:{left:"20%",top:"50%"},color:"green",size:150});n.loadSprite("map","maps/map.png");n.loadSprite("bean","sprites/bean.png");n.scene("gameloop",()=>{n.add([n.sprite("map"),n.pos()]);let e=f(n),o={x:0,y:0},s=0,d=!1,t=200;p.on("start",(r,a)=>{d=!0}),p.on("move",(r,a)=>{let i=a.force;const l=1;i>l&&(i=l),s=i;const c=a.angle.radian;o={x:Math.cos(c)*s*t,y:-Math.sin(c)*s*t}}),p.on("end",(r,a)=>{d=!1,s=0,e.move(0,0)}),n.onUpdate(()=>{d&&s>0&&e.move(o.x,o.y)})});n.go("gameloop");
//# sourceMappingURL=index-CM6NlJyr.js.map
