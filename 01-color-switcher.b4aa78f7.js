const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.start.addEventListener("click",(()=>{t.start.disabled=!0,t.stop.disabled=!1,e=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=e}),1e3)})),t.stop.addEventListener("click",(()=>{clearInterval(e),t.body.style.backgroundColor="#fff",t.start.disabled=!1,t.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b4aa78f7.js.map
