(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const c=document.querySelector(".mobile-open-btn"),s=document.querySelector(".mobile-menu"),i=document.querySelector(".button-close"),u=()=>s.classList.toggle("is-open"),d=()=>s.classList.toggle("is-open");c.addEventListener("click",u);i.addEventListener("click",d);
//# sourceMappingURL=commonHelpers.js.map