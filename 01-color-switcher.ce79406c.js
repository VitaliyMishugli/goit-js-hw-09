!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},o=null;t.start.addEventListener("click",(function(){t.start.disabled=!0,t.stop.disabled=!1,o=setInterval((function(){var o="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.backgroundColor=o}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(o),t.body.style.backgroundColor="#fff",t.start.disabled=!1,t.stop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.ce79406c.js.map
