import{r as A,c as E,o as F,a as O,b,d as f,u as v,F as D,e as H}from"./vendor.91cf5b4d.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}};N();var S=(i,r)=>{const a=i.__vccOpts||i;for(const[s,e]of r)a[s]=e;return a};const T=["width","height"],C={setup(i){const r=A(null),a=E(()=>r.value.getContext("2d")),s=window.innerHeight,e=window.innerWidth;let n=0,c=0;w();const y=5,M=c===0?Math.PI/2:c===s?-Math.PI/2:n==0?0:-Math.PI,h=5,g=1e3,m=.5,P={x:n,y:c};function w(){n=Math.random()<.5?Math.random()<.5?0:e:e*Math.random(),c=n===0||n===e?s*Math.random():Math.random()<.5?0:s,console.log(n,c)}function L(){u({startPoint:P,length:y,angle:M})}const l=[];function x(){const t=[...l];l.length=0,t.forEach(o=>{o()})}let p=0;function _(){requestAnimationFrame(()=>{p+=1,p%2===0&&x(),_()})}_();function u(t,o=0){k(t),(o<h||Math.random()<m&&o<g)&&l.push(()=>u({startPoint:d(t),length:t.length,angle:t.angle+.25*Math.random()},o+1)),(o<h||Math.random()<m&&o<g)&&l.push(()=>u({startPoint:d(t),length:t.length+.1*t.length*(1-Math.random()*2),angle:t.angle-.25*Math.random()},o+1))}function k(t){B(t.startPoint,d(t))}function B(t,o){a.value.beginPath(),a.value.moveTo(t.x,t.y),a.value.lineTo(o.x,o.y),a.value.strokeStyle="rgba(0,0,0,0.1)",a.value.stroke()}function d(t){return{x:t.startPoint.x+t.length*Math.cos(t.angle),y:t.startPoint.y+t.length*Math.sin(t.angle)}}F(()=>{L()});function I(){const t=document.createElement("a");t.href=r.value.toDataURL("image/png"),t.download=new Date().toLocaleString()+".png",t.click()}return(t,o)=>(O(),b(D,null,[f("canvas",{ref_key:"el",ref:r,width:v(e),height:v(s),class:"canvas"},null,8,T),f("div",{class:"header"},[f("button",{onClick:I},"Download")])],64))}};var q=S(C,[["__scopeId","data-v-7cb95eaa"]]);H(q).mount("#app");
