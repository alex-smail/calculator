(()=>{var e={54:()=>{var e,t,a,n,c=document.querySelector(".calculator"),o=!1,r=0,l=0;c.addEventListener("mousedown",(function(e){a=e.clientX-r,n=e.clientY-l,e.target===c&&(o=!0)})),c.addEventListener("mouseup",(function(){a=e,n=t,o=!1,localStorage.setItem("position",JSON.stringify({x:r,y:l}))})),c.addEventListener("mousemove",(function(i){var s,d;o&&(i.preventDefault(),e=i.clientX-a,t=i.clientY-n,r=e,l=t,s=e,d=t,c.style.transform="translate(".concat(s,"px, ").concat(d,"px)"))})),window.onload=function(){var e=JSON.parse(localStorage.getItem("position"));e&&(c.style.transform="translate(".concat(e.x,"px, ").concat(e.y,"px)"),r=e.x,l=e.y)}},79:()=>{for(var e=document.querySelector("#board"),t=["yellow","darkblue","purple","lime","white","gray","gold","pink","Salmon","DeepSkyBlue","Teal"],a=0;a<3886;a++){var n=document.createElement("div");n.classList.add("square"),n.addEventListener("mouseover",c),n.addEventListener("mouseleave",o),e.append(n)}function c(e){var t=e.target;t.style.backgroundColor=r(),t.style.boxShadow="0 0 2px ".concat(r(),", 0 0 10px ").concat(r())}function o(e){var t=e.target;t.style.backgroundColor="#1d1d1d1d",t.style.boxShadow="0 0 2px #000"}var r=function(){return t[Math.floor(Math.random()*t.length)]}}},t={};function a(n){var c=t[n];if(void 0!==c)return c.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}(()=>{"use strict";var e=document.querySelector("section"),t=document.createElement("div");t.classList.add("calculator"),t.setAttribute("tabindex","0"),e.append(t);var n=document.createElement("div");function c(e,a){var n=document.createElement("div");n.classList.add("calculator__element"),n.id=e,n.textContent=a,t.append(n)}n.classList.add("calculator__info"),n.textContent=0,t.append(n),c("clean","AC"),c("last-symbol","CE"),c("percent","%"),c("division","/"),c("seven","7"),c("eight","8"),c("nine","9"),c("multiply","x"),c("four","4"),c("five","5"),c("six","6"),c("minus","-"),c("one","1"),c("two","2"),c("three","3"),c("plus","+"),c("null","0"),c("comma",","),c("evenly","=");var o="0",r=null,l=null,i=!1;function s(e){n.textContent=e}function d(){r=null,l=null,s(o="0")}function u(){s(o=o.length>1?o.slice(0,-1):"0")}function p(e){"0"===o?o=e:o+=e,s(o)}function m(e){null===l?l=o:r&&(l=String(v(Number(l),Number(o),r))),o="0",r=e,s(l)}function v(e,t,a){switch(a){case"+":return e+t;case"-":return e-t;case"x":return e*t;case"/":return e/t;case"%":return e%t;default:return t}}function f(){r&&null!==l&&(o=String(v(Number(l),Number(o),r)),r=null,l=null,s(o))}function b(e){e.classList.add("active"),setTimeout((function(){e.classList.remove("active")}),500)}document.addEventListener("click",(function(e){var t=e.target,a=t.textContent;if(t.classList.contains("calculator__element"))switch(b(t),a){case"AC":d();break;case"CE":u();break;case"+":case"-":case"x":case"/":case"%":m(a);break;case"=":f();break;case",":p(".");break;default:isNaN(a)||p(a)}})),t.addEventListener("focus",(function(){i=!0})),t.addEventListener("blur",(function(){i=!1})),document.addEventListener("keydown",(function(e){if(i){var t=e.key,a=null;switch(t){case"Backspace":u(),a=document.getElementById("last-symbol");break;case"Escape":d(),a=document.getElementById("clean");break;case"+":case"-":case"*":case"/":case"%":var n=t;"*"===t&&(n="x"),m(n),a=Array.from(document.querySelectorAll(".calculator__element")).find((function(e){return e.textContent===n}));break;case"Enter":case"=":f(),a=document.getElementById("evenly");break;case".":p("."),a=document.getElementById("comma");break;default:isNaN(t)||(p(t),a=Array.from(document.querySelectorAll(".calculator__element")).find((function(e){return e.textContent===t})))}a&&b(a)}})),t.classList.add("hidden");var k=document.querySelector(".section"),_=document.createElement("div");_.classList="block block-info hidden",k.append(_);var g=document.createElement("h2");g.classList="block-info__title",g.textContent="Диапозон продажной цены";var h=document.createElement("p");h.classList="block-info__dsc";var E=document.createElement("input");E.type="radio",E.name="format",E.id="shirt";var L=document.createElement("label");L.setAttribute("for","shirt"),L.textContent="Майка";var x=document.createElement("input");x.type="radio",x.name="format",x.id="tapeInput";var y=document.createElement("label");y.setAttribute("for","tapeInput"),y.textContent="Пленка",h.append(E,L,x,y);var S=document.createElement("div");S.classList="block-info__input";var C=document.createElement("input");C.classList="block-info__input_num",C.type="number",C.id="rangeValue",C.min="0",C.max="100000",C.step="5000",C.value="0";var w=document.createElement("input");w.type="range",w.id="rangeInput",w.min="0",w.max="100000",w.step="5000",S.append(C,w);var T=document.createElement("div");T.classList="block-info__traffic-price";var q=document.createElement("div");q.classList="block-info__traffic-price_green",T.append(q),_.append(g,h,S,T);function N(e,t,a){w.min=e,w.max=t,w.step=a,w.value=e,C.min=e,C.max=t,C.step=a,C.value=e}function A(){var e=document.querySelector('input[name="format"]:checked');if(e){var t=e.id;if("shirt"===t)switch(Number(C.value)){case 5e3:I(300);break;case 1e4:I(290);break;case 15e3:I(280);break;case 2e4:I(275);break;case 25e3:I(270);break;case 3e4:I(267);break;case 35e3:I(264);break;case 4e4:I(262);break;case 5e4:I(260)}else if("tapeInput"===t)switch(Number(C.value)){case 100:I(230);break;case 300:I(195);break;case 500:I(190);break;case 1e3:I(185);break;case 1500:I(183);break;case 2e3:I(182);break;case 3e3:I(180)}}}function I(e){q.textContent=e}function D(e){var t=e.target.id;"shirt"===t?N(0,1e5,5e3):"tapeInput"===t&&N(0,5e3,100)}w.addEventListener("input",(function(){C.value=w.value,A()})),C.addEventListener("input",(function(){var e=Number(C.min),t=Number(C.max);C.value<e&&(C.value=e),C.value>t&&(C.value=t),w.value=C.value,A()})),E.addEventListener("change",D),x.addEventListener("change",D),document.addEventListener("DOMContentLoaded",(function(){A()}));var B=document.createElement("div");B.classList="block block__PVD hidden";var O=document.createElement("h2");O.classList="block__PVD_dsc",O.textContent="Фасовка";var M=document.createElement("p");M.classList="block__PVD_dsc_footer",M.innerHTML="На пакеты от 400 мм \n<br>\n<br> ПНД от 20 мкм \n<br> ПВД от 50 мкм\n<hr>\nПНД \n <br/>150кг - ".concat(260," \n <br/>300кг - ").concat(250," \n <br/>500кг - ").concat(240,"\n<hr>\nПВД\n<br/>150кг - ").concat(250,"  \n<br/>300кг - ").concat(245,"  \n<br/>500кг - ").concat(235," "),B.append(O,M);var P=document.createElement("div");P.classList="block block__PND hidden";var V=document.createElement("h2");V.classList="block__PND_dsc",V.textContent="Майка";var Y=document.createElement("p");Y.classList="block__PND_dsc_footer",Y.innerHTML="\n24х40\n<br> - мин партия 20тыс\n<hr>\n28х50\n<br> - мин партия 15тыс\n<hr>\n40х60 и 40х70\n<br> - мин партия 5тыс\n<hr>\n<br>\nначальная ценна по таблице от 10тыс!\n<br>\n<br>\n<br>\n<br>",P.append(V,Y),k.append(B,P);var H=.92;document.getElementById("toggle-checkbox").addEventListener("change",(function(){H=this.checked?.95:.92}));var J=2,X=document.querySelector(".checkbox-block__calc"),F=document.querySelector(".checkbox-block__info");function j(e,t,a,n){var c=document.createElement("ul");c.classList.add("block__item");var o=document.createElement("li");o.classList.add("block__container");var r=document.createElement("li");r.classList.add("block__name"),r.textContent=e;var l=document.createElement("li");l.classList.add("block__dsc"),l.textContent=t,o.append(r,l);var i=document.createElement("li"),s=document.createElement("input");s.type="number",s.min=1,s.id=a,s.required=!0,s.classList.add("block__input"),i.append(s),c.append(o,i),document.querySelector("#".concat(n)).append(c)}function z(e,t,a,n){var c=document.createElement("input");c.type="number",c.min=1,c.id=t,c.required=!0,c.classList.add("block__".concat(e)),c.placeholder=a,document.querySelector("#".concat(n)).append(c)}function G(e,t,a,n,c){var o=document.createElement("ul");o.classList.add("block__item","block__item-footer","hidden"),o.id=n;var r=document.createElement("li");r.classList.add("block__container");var l=document.createElement("li");l.classList.add("block__name"),l.textContent=e;var i=document.createElement("li");i.classList.add("block__dsc"),i.textContent=t,r.append(l,i);var s=document.createElement("p");s.classList.add("block__info"),s.id=a,o.append(r,s),document.querySelector("#".concat(c)).append(o)}function K(e,t){var a=document.createElement("div");a.classList.add("block__footer");var n=document.createElement("p");n.classList.add("block__footer_cost","hidden"),n.id="footer-cost-".concat(t);var c=document.createElement("p");c.classList.add("block__footer_selling","hidden"),c.id="footer-selling-".concat(t),a.append(n,c);var o=document.createElement("p");o.classList.add("block__footer_profit","hidden"),o.id="footer-profit-".concat(t,"-m");var r=document.createElement("p");r.classList.add("block__footer_profit","hidden"),r.id="footer-profit-".concat(t),"package"===e?document.querySelector("#".concat(e)).append(a,r):document.querySelector("#".concat(e)).append(a,o,r)}function Q(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,o=document.querySelector(t),r=document.querySelector(a);e>0?(o.textContent=(e*n).toFixed(c),r.classList.remove("hidden")):r.classList.add("hidden")}function R(){var e=W.width*H*2*W.height*(W.thickness/1e4)/1e3,t=e*W.circulation,a=W.weight/e,n=W.cost*e,c=W.sell*e,o=(c-n)*W.circulation;Q(e,"#one","#ulOne",1e3),Q(t,"#all","#ulAll"),Q(a,"#total","#ulTotal",1,0),Q(n,"#footer-cost-package","#footer-cost-package"),Q(c,"#footer-selling-package","#footer-selling-package"),Q(o,"#footer-profit-package","#footer-profit-package")}function U(){var e=W.widthTape*H*J*100*(W.thicknessTape/1e4)/1e3,t=e*W.circulationTape,a=W.weightTape/e,n=W.costTape*e,c=W.sellTape*e,o=(c-n)*W.circulationTape,r=(W.sellTape-W.costTape)*W.weightTape;Q(e,"#one-tape","#ulOne-tape",1e3),Q(t,"#all-tape","#ulAll-tape"),Q(a,"#total-tape","#ulTotal-tape",1,0),Q(n,"#footer-cost-tape","#footer-cost-tape"),Q(c,"#footer-selling-tape","#footer-selling-tape"),Q(o,"#footer-profit-tape-m","#footer-profit-tape-m"),Q(r,"#footer-profit-tape","#footer-profit-tape")}X.addEventListener("click",(function(){t.classList.toggle("visible"),t.classList.toggle("hidden")})),F.addEventListener("click",(function(){_.classList.toggle("visible"),_.classList.toggle("hidden"),P.classList.toggle("visible"),P.classList.toggle("hidden"),B.classList.toggle("visible"),B.classList.toggle("hidden")}));var W={};function Z(){document.querySelectorAll("input").forEach((function(e){e.addEventListener("change",(function(){W[e.id]=Number(e.value)||0,R(),U()})),e.addEventListener("focus",(function(){this.select()}))}))}function $(){document.querySelectorAll("input").forEach((function(e){e.addEventListener("wheel",(function(t){if(this===document.activeElement){t.preventDefault();var a=Number(this.getAttribute("step"))||1,n=Number(this.getAttribute("min"))||0;t.deltaY<0?this.value=Number(this.value)+a:this.value=Math.max(n,Number(this.value)-a),W[e.id]=Number(e.value)||0,R(),U()}}))}))}console.log(W);var ee=document.querySelector("section"),te=document.createElement("div");te.classList.add("block","package"),te.id="package",ee.prepend(te);var ae=document.createElement("h2");ae.classList.add("block__title"),ae.textContent="Фасовка",te.append(ae),j("Ширина","см.","width","package"),j("Высота","см.","height","package"),j("Толщина","мкм.","thickness","package"),j("Количество","шт.","circulation","package"),j("Вес","кг.","weight","package");var ne=document.createElement("div");ne.classList.add("block__price-materials"),ne.id="package-price",te.append(ne),z("cost-materials","cost","Себест...","package-price"),z("selling-price","sell","Продажа","package-price"),G("Вес пакета","г.","one","ulOne","package"),G("Вес партии","кг.","all","ulAll","package"),G("Кол-во пакетов","шт.","total","ulTotal","package"),K("package","package"),$(),Z(),a(79);var ce=document.querySelector("section"),oe=document.createElement("div");oe.classList.add("block","tape"),oe.id="tape",ce.append(oe);var re=document.createElement("h2");re.classList.add("block__title"),re.textContent="Пленка",oe.append(re,function(){var e=document.createElement("div");e.classList.add("block__tape");var t=document.createElement("p");t.classList.add("block__name","block__name-format"),t.textContent="Рукав";var a=document.createElement("div");a.classList.add("block__input");var n=document.createElement("label");n.classList.add("switch");var c=document.createElement("input");c.id="format-checkbox",c.type="checkbox";var o=document.createElement("span");return o.classList.add("slider"),n.append(c,o),a.append(n),e.append(t,a),c.addEventListener("change",(function(){this.checked?(t.textContent="Полотно",J=1):(t.textContent="Рукав",J=2)})),e}()),j("Ширина","см.","widthTape","tape"),j("Толщина","мкм.","thicknessTape","tape"),j("Количество","м.","circulationTape","tape"),j("Вес","кг.","weightTape","tape");var le=document.createElement("div");le.classList.add("block__price-materials"),le.id="tape-price",oe.append(le),z("cost-materials","costTape","Себест...","tape-price"),z("selling-price","sellTape","Продажа","tape-price"),G("Вес метра","г.","one-tape","ulOne-tape","tape"),G("Вес партии","кг.","all-tape","ulAll-tape","tape"),G("Кол-во метров","м.","total-tape","ulTotal-tape","tape"),K("tape","tape"),$(),Z(),a(54)})()})();
//# sourceMappingURL=index.2c3b661c5933ada1686b.js.map