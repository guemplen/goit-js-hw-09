const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.setAttribute("disabled","disabled"),t.addEventListener("click",(()=>{d||(d=setInterval(a,1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"))})),e.addEventListener("click",(()=>{clearInterval(d),d=null,t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.15c8a89a.js.map