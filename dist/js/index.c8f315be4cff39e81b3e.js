(()=>{"use strict";var e=.92;document.getElementById("toggle-checkbox").addEventListener("change",(function(){e=this.checked?.95:.92}));var t=2;function a(e,t,a,c){var n=document.createElement("ul");n.classList.add("block__item");var o=document.createElement("li");o.classList.add("block__container");var l=document.createElement("li");l.classList.add("block__name"),l.textContent=e;var i=document.createElement("li");i.classList.add("block__dsc"),i.textContent=t,o.append(l,i);var d=document.createElement("li"),r=document.createElement("input");r.type="number",r.min=1,r.id=a,r.required=!0,r.classList.add("block__input"),d.append(r),n.append(o,d),document.querySelector("#".concat(c)).append(n)}function c(e,t,a,c){var n=document.createElement("input");n.type="number",n.min=1,n.id=t,n.required=!0,n.classList.add("block__".concat(e)),n.placeholder=a,document.querySelector("#".concat(c)).append(n)}function n(e,t,a,c,n){var o=document.createElement("ul");o.classList.add("block__item","block__item-footer","hidden"),o.id=c;var l=document.createElement("li");l.classList.add("block__container");var i=document.createElement("li");i.classList.add("block__name"),i.textContent=e;var d=document.createElement("li");d.classList.add("block__dsc"),d.textContent=t,l.append(i,d);var r=document.createElement("p");r.classList.add("block__info"),r.id=a,o.append(l,r),document.querySelector("#".concat(n)).append(o)}function o(e,t){var a=document.createElement("div");a.classList.add("block__footer");var c=document.createElement("p");c.classList.add("block__footer_cost","hidden"),c.id="footer-cost-".concat(t);var n=document.createElement("p");n.classList.add("block__footer_selling","hidden"),n.id="footer-selling-".concat(t),a.append(c,n);var o=document.createElement("p");o.classList.add("block__footer_profit","hidden"),o.id="footer-profit-".concat(t,"-m");var l=document.createElement("p");l.classList.add("block__footer_profit","hidden"),l.id="footer-profit-".concat(t),"package"===e?document.querySelector("#".concat(e)).append(a,l):document.querySelector("#".concat(e)).append(a,o,l)}function l(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,o=document.querySelector(t),l=document.querySelector(a);e>0?(o.textContent=(e*c).toFixed(n),l.classList.remove("hidden")):l.classList.add("hidden")}function i(){var t=r.width*e*2*r.height*(r.thickness/1e4)/1e3,a=t*r.circulation,c=r.weight/t,n=r.cost*t,o=r.sell*t,i=(o-n)*r.circulation||Number(document.querySelector("#total").textContent);l(t,"#one","#ulOne",1e3),l(a,"#all","#ulAll"),l(c,"#total","#ulTotal",1,0),l(n,"#footer-cost-package","#footer-cost-package"),l(o,"#footer-selling-package","#footer-selling-package"),l(i,"#footer-profit-package","#footer-profit-package")}function d(){var a=r.widthTape*e*t*100*(r.thicknessTape/1e4)/1e3,c=a*r.circulationTape,n=r.weightTape/a,o=r.costTape*a,i=r.sellTape*a,d=(i-o)*r.circulationTape||Number(document.querySelector("#total-tape").textContent),p=(r.sellTape-r.costTape)*r.weightTape;l(a,"#one-tape","#ulOne-tape",1e3),l(c,"#all-tape","#ulAll-tape"),l(n,"#total-tape","#ulTotal-tape",1,0),l(o,"#footer-cost-tape","#footer-cost-tape"),l(i,"#footer-selling-tape","#footer-selling-tape"),l(d,"#footer-profit-tape-m","#footer-profit-tape-m"),l(p,"#footer-profit-tape","#footer-profit-tape")}var r={};function p(){document.querySelectorAll("input").forEach((function(e){e.addEventListener("change",(function(){r[e.id]=Number(e.value)||0,i(),d()})),e.addEventListener("focus",(function(){this.select()}))}))}function s(){document.querySelectorAll("input").forEach((function(e){e.addEventListener("wheel",(function(t){if(this===document.activeElement){t.preventDefault();var a=Number(this.getAttribute("step"))||1,c=Number(this.getAttribute("min"))||0;t.deltaY<0?this.value=Number(this.value)+a:this.value=Math.max(c,Number(this.value)-a),r[e.id]=Number(e.value)||0,i(),d()}}))}))}console.log(r);var u=document.querySelector("section"),m=document.createElement("div");m.classList.add("block","package"),m.id="package",u.prepend(m);var f=document.createElement("h2");f.classList.add("block__title"),f.textContent="Фасовка",m.append(f),a("Ширина","см.","width","package"),a("Высота","см.","height","package"),a("Толщина","мкм.","thickness","package"),a("Количество","шт.","circulation","package"),a("Вес","кг.","weight","package");var k=document.createElement("div");k.classList.add("block__price-materials"),k.id="package-price",m.append(k),c("cost-materials","cost","Себест...","package-price"),c("selling-price","sell","Продажа","package-price"),n("Вес пакета","г.","one","ulOne","package"),n("Вес партии","кг.","all","ulAll","package"),n("Кол-во пакетов","шт.","total","ulTotal","package"),o("package","package"),s(),p();var v=document.querySelector("section"),_=document.createElement("div");_.classList.add("block"),_.id="tape",v.append(_);var h=document.createElement("h2");h.classList.add("block__title"),h.textContent="Пленка",_.append(h,function(){var e=document.createElement("div");e.classList.add("block__tape");var a=document.createElement("p");a.classList.add("block__name","block__name-format"),a.textContent="Рукав";var c=document.createElement("div");c.classList.add("block__input");var n=document.createElement("label");n.classList.add("switch");var o=document.createElement("input");o.id="format-checkbox",o.type="checkbox";var l=document.createElement("span");return l.classList.add("slider"),n.append(o,l),c.append(n),e.append(a,c),o.addEventListener("change",(function(){this.checked?(a.textContent="Полотно",t=1):(a.textContent="Рукав",t=2)})),e}()),a("Ширина","см.","widthTape","tape"),a("Толщина","мкм.","thicknessTape","tape"),a("Количество","м.","circulationTape","tape"),a("Вес","кг.","weightTape","tape");var g=document.createElement("div");g.classList.add("block__price-materials"),g.id="tape-price",_.append(g),c("cost-materials","costTape","Себест...","tape-price"),c("selling-price","sellTape","Продажа","tape-price"),n("Вес метра","г.","one-tape","ulOne-tape","tape"),n("Вес партии","кг.","all-tape","ulAll-tape","tape"),n("Кол-во метров","м.","total-tape","ulTotal-tape","tape"),o("tape","tape"),s(),p()})();
//# sourceMappingURL=index.c8f315be4cff39e81b3e.js.map