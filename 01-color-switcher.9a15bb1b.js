!function(){var t,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}d.setAttribute("disabled","disabled"),e.addEventListener("click",(function(){t||(t=setInterval(a,1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled"))})),d.addEventListener("click",(function(){clearInterval(t),t=null,e.removeAttribute("disabled"),d.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.9a15bb1b.js.map