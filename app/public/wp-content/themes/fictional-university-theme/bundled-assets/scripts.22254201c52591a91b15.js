!function(e){function s(s){for(var n,i,l=s[0],o=s[1],c=s[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(h&&h(s);d.length;)d.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,s=0;s<a.length;s++){for(var t=a[s],n=!0,l=1;l<t.length;l++){var o=t[l];0!==r[o]&&(n=!1)}n&&(a.splice(s--,1),e=i(i.s=t[0]))}return e}var n={},r={0:0},a=[];function i(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)i.d(t,n,function(s){return e[s]}.bind(null,n));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=s,l=l.slice();for(var c=0;c<l.length;c++)s(l[c]);var h=o;a.push([30,1]),t()}({11:function(e,s,t){},30:function(e,s,t){"use strict";t.r(s);t(11);var n=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},r=t(9);var a=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let s="";for(let t=0;t<e;t++)s+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${t}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",s),new r.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}},i=t(10),l=t.n(i);var o=class{constructor(){this.addSearchHTML(),this.resultsDiv=document.querySelector("#search-overlay__results"),this.openButton=document.querySelectorAll(".js-search-trigger"),this.closeButton=document.querySelector(".search-overlay__close"),this.searchOverlay=document.querySelector(".search-overlay"),this.searchField=document.querySelector("#search-term"),this.isOverlayOpen=!1,this.isSpinnerVisible=!1,this.previousValue,this.typingTimer,this.events()}events(){this.openButton.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),this.openOverlay()})}),this.closeButton.addEventListener("click",()=>this.closeOverlay()),document.addEventListener("keydown",e=>this.keyPressDispatcher(e)),this.searchField.addEventListener("keyup",()=>this.typingLogic())}typingLogic(){this.searchField.value!=this.previousValue&&(clearTimeout(this.typingTimer),this.searchField.value?(this.isSpinnerVisible||(this.resultsDiv.innerHTML='<div class="spinner-loader"></div>',this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.getResults.bind(this),750)):(this.resultsDiv.innerHTML="",this.isSpinnerVisible=!1)),this.previousValue=this.searchField.value}async getResults(){try{const e=(await l.a.get(universityData.root_url+"/wp-json/university/v1/search?term="+this.searchField.value)).data;this.resultsDiv.innerHTML=`\n        <div class="row">\n          <div class="one-third">\n            <h2 class="search-overlay__section-title">General Information</h2>\n            ${e.generalInfo.length?'<ul class="link-list min-list">':"<p>No general information matches that search.</p>"}\n              ${e.generalInfo.map(e=>`<li><a href="${e.permalink}">${e.title}</a> ${"post"==e.postType?"by "+e.authorName:""}</li>`).join("")}\n            ${e.generalInfo.length?"</ul>":""}\n          </div>\n          <div class="one-third">\n            <h2 class="search-overlay__section-title">Programs</h2>\n            ${e.programs.length?'<ul class="link-list min-list">':`<p>No programs match that search. <a href="${universityData.root_url}/programs">View all programs</a></p>`}\n              ${e.programs.map(e=>`<li><a href="${e.permalink}">${e.title}</a></li>`).join("")}\n            ${e.programs.length?"</ul>":""}\n\n            <h2 class="search-overlay__section-title">Professors</h2>\n            ${e.professors.length?'<ul class="professor-cards">':"<p>No professors match that search.</p>"}\n              ${e.professors.map(e=>`\n                <li class="professor-card__list-item">\n                  <a class="professor-card" href="${e.permalink}">\n                    <img class="professor-card__image" src="${e.image}">\n                    <span class="professor-card__name">${e.title}</span>\n                  </a>\n                </li>\n              `).join("")}\n            ${e.professors.length?"</ul>":""}\n\n          </div>\n          <div class="one-third">\n            <h2 class="search-overlay__section-title">Campuses</h2>\n            ${e.campuses.length?'<ul class="link-list min-list">':`<p>No campuses match that search. <a href="${universityData.root_url}/campuses">View all campuses</a></p>`}\n              ${e.campuses.map(e=>`<li><a href="${e.permalink}">${e.title}</a></li>`).join("")}\n            ${e.campuses.length?"</ul>":""}\n\n            <h2 class="search-overlay__section-title">Events</h2>\n            ${e.events.length?"":`<p>No events match that search. <a href="${universityData.root_url}/events">View all events</a></p>`}\n              ${e.events.map(e=>`\n                <div class="event-summary">\n                  <a class="event-summary__date t-center" href="${e.permalink}">\n                    <span class="event-summary__month">${e.month}</span>\n                    <span class="event-summary__day">${e.day}</span>  \n                  </a>\n                  <div class="event-summary__content">\n                    <h5 class="event-summary__title headline headline--tiny"><a href="${e.permalink}">${e.title}</a></h5>\n                    <p>${e.description} <a href="${e.permalink}" class="nu gray">Learn more</a></p>\n                  </div>\n                </div>\n              `).join("")}\n\n          </div>\n        </div>\n      `,this.isSpinnerVisible=!1}catch(e){console.log(e)}}keyPressDispatcher(e){83!=e.keyCode||this.isOverlayOpen||"INPUT"==document.activeElement.tagName||"TEXTAREA"==document.activeElement.tagName||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){return this.searchOverlay.classList.add("search-overlay--active"),document.body.classList.add("body-no-scroll"),this.searchField.value="",setTimeout(()=>this.searchField.focus(),301),console.log("our open method just ran!"),this.isOverlayOpen=!0,!1}closeOverlay(){this.searchOverlay.classList.remove("search-overlay--active"),document.body.classList.remove("body-no-scroll"),console.log("our close method just ran!"),this.isOverlayOpen=!1}addSearchHTML(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="search-overlay">\n        <div class="search-overlay__top">\n          <div class="container">\n            <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>\n            <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">\n            <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>\n          </div>\n        </div>\n        \n        <div class="container">\n          <div id="search-overlay__results"></div>\n        </div>\n\n      </div>\n    ')}};new n,new a;new o}});