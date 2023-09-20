(()=>{"use strict";var n,e,t,o,i,r,a,s,l,f,d,p,c,m,h={705:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var f=0;f<n.length;f++){var d=[].concat(n[f]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},742:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},738:n=>{n.exports=function(n){return n[1]}},983:(n,e,t)=>{t.d(e,{Z:()=>h});var o=t(738),i=t.n(o),r=t(705),a=t.n(r),s=t(373),l=t(33),f=t(742),d=t.n(f),p=new URL(t(436),t.b),c=a()(i());c.i(s.Z),c.i(l.Z);var m=d()(p);c.push([n.id,`.root {\n  max-width: 1920px;\n  margin: 0 auto;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: normal;\n  color: white;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  text-rendering: optimizeLegibility;\n}\n::-webkit-scrollbar {\n  width: 7.5px;\n  height: 5px;\n}\n::-webkit-scrollbar-track {\n  background-color: #192024;\n}\n::-webkit-scrollbar-thumb {\n  -webkit-border-radius: 20px;\n  border-radius: 3px;\n  background: linear-gradient(#fff, #0074B5, #54a700);\n}\n.mission__border {\n  animation: rotate 60s infinite linear;\n  width: 100%;\n  max-width: 278px;\n  max-height: 284px;\n  height: 100%;\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.header {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n  padding: 25px 0 0 0;\n  flex-wrap: wrap;\n  row-gap: 30px;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  max-width: 1920px;\n}\n@media screen and (min-width: 120px) and (max-width: 767px) {\n  .header {\n    padding: 0;\n  }\n}\n.header__logos {\n  display: inline-flex;\n  align-items: center;\n  gap: 27px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.header__links {\n  display: flex;\n  align-items: center;\n  gap: 34px;\n  flex-shrink: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.header__link:hover {\n  font-weight: 700;\n}\n.header__link {\n  display: inline-block;\n  color: #0E212F;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 25.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  max-width: 141px;\n  transition: transform 0.3s ease-in;\n}\n.ham {\n  display: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: transform 400ms;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n@media screen and (max-width: 768px) {\n  .ham {\n    display: block;\n    max-width: 60px;\n  }\n  .hamburger {\n    display: flex;\n    visibility: hidden;\n    position: absolute;\n    right: 0;\n    opacity: 0;\n    align-items: center;\n    justify-content: center;\n    transition: opacity 0.5s ease-in;\n  }\n  .hamburger_active {\n    display: flex;\n    width: 100%;\n    height: 100vh;\n    flex-direction: column;\n    position: absolute;\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    background-color: #0e212f11;\n    right: 0;\n    top: 60px;\n    left: 0px;\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.5s ease-out;\n  }\n  .header__link {\n    font-size: 26px;\n    color: #FFF;\n    max-width: 100%;\n  }\n}\n.hamRotate.active {\n  transform: rotate(45deg);\n}\n.hamRotate180.active {\n  transform: rotate(180deg);\n}\n.line {\n  fill: none;\n  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;\n  stroke: #fff;\n  stroke-width: 5.5;\n  stroke-linecap: round;\n}\n.ham1 .top {\n  stroke-dasharray: 40 139;\n}\n.ham1 .bottom {\n  stroke-dasharray: 40 180;\n}\n.ham1.active .top {\n  stroke-dashoffset: -98px;\n}\n.ham1.active .bottom {\n  stroke-dashoffset: -138px;\n}\n.logo {\n  max-width: 191px;\n  max-height: 48px;\n  object-fit: contain;\n  width: 100%;\n}\n@media screen and (min-width: 120px) and (max-width: 767px) {\n  .logo {\n    max-width: 20vw;\n  }\n}\n.hero {\n  height: 100dvh;\n  display: flex;\n  justify-content: center;\n  background-image: url(${m});\n  background-size: cover;\n  background-position: center;\n}\n.hero__container {\n  display: flex;\n  flex-direction: column;\n  gap: 55px;\n  padding: 225px 0 140px;\n  justify-content: center;\n}\n@media screen and (min-width: 120px) and (max-width: 767px) {\n  .hero__container {\n    padding: 35px;\n    gap: 25px;\n  }\n}\n.hero__title {\n  color: #FFF;\n  text-align: center;\n  text-shadow: 0px 4px 16px #001321;\n  font-family: Montserrat;\n  font-size: 71px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n  margin: 0;\n}\n@media screen and (max-width: 1024px) {\n  .hero__title {\n    font-size: 60px;\n  }\n}\n@media screen and (min-width: 120px) and (max-width: 767px) {\n  .hero__title {\n    font-size: 34px;\n  }\n}\n.department__container {\n  max-width: 1380px;\n  margin: 119px auto;\n  background-color: #F4F4F4;\n  padding: 95px 97px;\n  display: flex;\n  flex-direction: column;\n  gap: 42px;\n}\n.department__title {\n  padding: 0;\n  margin: 0;\n  color: #191919;\n  font-family: Montserrat;\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 42px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.department__descr {\n  padding: 0;\n  margin: 0;\n  font-family: Inter;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 25px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #191919;\n}\n.department__button {\n  font-family: Montserrat;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 34px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #FFFFFF;\n  text-decoration: none;\n  background-color: #54A700;\n  padding: 17px;\n  text-align: left;\n  max-width: max-content;\n  transition: box-shadow 0.3s ease-in;\n  box-sizing: border-box;\n}\n.department__button:hover {\n  box-shadow: 0 0 5px #54a700, 0 0 7px #0074B5;\n}\n.department__image {\n  max-width: 1913px;\n  object-fit: none;\n  width: 100%;\n}\n.reu__container {\n  max-width: 1380px;\n  margin: 0 auto;\n  padding: 95px 97px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.reu__title {\n  font-family: Montserrat;\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 37px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #0E212F;\n  padding: 0;\n  margin: 0;\n}\n.span-accent {\n  font-family: Inter;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 31px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 0;\n  margin: 0;\n  color: #191919;\n}\n.reu__descr {\n  font-family: Inter;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 31px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 0;\n  margin: 0;\n  color: #191919;\n}\n.reu__button {\n  font-family: Montserrat;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 34px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #FFFFFF;\n  text-decoration: none;\n  background-color: #54A700;\n  padding: 15px;\n  text-align: left;\n  max-width: max-content;\n  transition: box-shadow 0.3s ease-in;\n  box-sizing: border-box;\n}\n.reu__button:hover {\n  box-shadow: 0 0 5px #54a700, 0 0 7px #0074B5;\n}\n.team__avatar {\n  object-fit: contain;\n  width: 85%;\n  border-radius: 50%;\n  max-width: 278px;\n  max-height: 284px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  animation: none;\n  transform: translate(-8%, 7%);\n}\n.team__avatar-container {\n  max-width: 278px;\n  max-height: 284px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.team__container {\n  max-width: 1380px;\n  margin: 0 auto;\n}\n.team__wrapper {\n  display: flex;\n  max-width: 1067px;\n  column-gap: 137px;\n  margin-bottom: 73px;\n}\n.team__title {\n  color: #0E212F;\n  font-family: Montserrat;\n  font-size: 60px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n  padding: 0;\n  margin: 0 0 97px;\n}\n.team__name {\n  color: #0E212F;\n  font-family: Montserrat;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  padding: 0;\n  margin: 0 0 23px;\n}\n.team__duty {\n  color: #191919;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  padding: 0;\n  margin: 0;\n  max-width: 603px;\n}\n.team__span-accent {\n  color: #191919;\n  font-family: Inter;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 25px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 0;\n  margin: 0;\n}\n.team__text-container {\n  display: flex;\n  flex-direction: column;\n}\n.team__button {\n  font-family: Montserrat;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 34px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #FFFFFF;\n  text-decoration: none;\n  background-color: #54A700;\n  padding: 17px;\n  text-align: left;\n  max-width: max-content;\n  transition: box-shadow 0.3s ease-in;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n.team__button:hover {\n  box-shadow: 0 0 5px #54a700, 0 0 7px #0074B5;\n}\n@media screen and (min-width: 150px) and (max-width: 1440px) {\n  .team__container {\n    padding: 0 5vw;\n  }\n  .mission__border {\n    animation: rotate 60s infinite linear;\n    width: 85%;\n    max-width: 278px;\n    max-height: 284px;\n    height: 100%;\n  }\n  .team__avatar {\n    object-fit: contain;\n    width: 75%;\n    border-radius: 50%;\n    max-width: 278px;\n    max-height: 284px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    animation: none;\n    transform: translate(-36px, 10px);\n    padding: 0;\n  }\n  .department__container {\n    padding: 4vh 5vw;\n  }\n  .reu__container {\n    padding: 4vh 5vw;\n  }\n  .team__title,\n  .reu__title,\n  .department__title {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 920px) {\n  .team__wrapper {\n    column-gap: 60px;\n  }\n}\n@media screen and (min-width: 150px) and (max-width: 768px) {\n  .team__wrapper {\n    flex-direction: column;\n    align-items: center;\n    row-gap: 50px;\n  }\n  .department__image {\n    height: 320px;\n    object-fit: cover;\n  }\n  .department__container {\n    margin: 0 auto;\n  }\n  .department__button,\n  .reu__button {\n    line-height: 20px;\n    font-size: 16px;\n  }\n  .team__name {\n    font-size: 24px;\n  }\n}\n`,""]);const h=c},33:(n,e,t)=>{t.d(e,{Z:()=>N});var o=t(738),i=t.n(o),r=t(705),a=t.n(r),s=t(742),l=t.n(s),f=new URL(t(433),t.b),d=new URL(t(165),t.b),p=new URL(t(137),t.b),c=new URL(t(393),t.b),m=new URL(t(517),t.b),h=new URL(t(972),t.b),x=new URL(t(554),t.b),u=new URL(t(80),t.b),g=new URL(t(23),t.b),b=new URL(t(166),t.b),w=new URL(t(87),t.b),y=new URL(t(310),t.b),v=new URL(t(244),t.b),_=new URL(t(444),t.b),k=new URL(t(196),t.b),z=new URL(t(180),t.b),F=a()(i()),I=l()(f),R=l()(d),M=l()(p),E=l()(c),C=l()(m),S=l()(h),L=l()(x),U=l()(u),j=l()(g),A=l()(b),$=l()(w),B=l()(y),T=l()(v),O=l()(_),Z=l()(k),P=l()(z);F.push([n.id,`@font-face {\n    font-family: "Inter";\n    font-weight: 400;\n    src: url(${I}) format('woff'),\n        url(${R}) format('woff2');\n}\n\n\n@font-face {\n    font-family: "Inter";\n    font-weight: 500;\n    src: url(${M}) format('woff'),\n        url(${E}) format('woff2');\n}\n\n@font-face {\n    font-family: "Inter";\n    font-weight: 600;\n    src: url(${C}) format('woff'),\n        url(${S}) format('woff2');\n}\n\n\n\n@font-face {\n    font-family: "Inter";\n    font-weight: 900;\n    src: url(${L}) format('woff'),\n        url(${U}) format('woff2');\n}\n\n@font-face {\n    font-family: "Montserrat";\n    font-weight: 800;\n    src: url(${j}) format('woff'),\n        url(${A}) format('woff2');\n}\n\n@font-face {\n    font-family: "Montserrat";\n    font-weight: 700;\n    src: url(${$}) format('woff'),\n        url(${B}) format('woff2');\n}\n\n@font-face {\n    font-family: "Montserrat";\n    font-weight: 500;\n    src: url(${T}) format('woff'),\n        url(${O}) format('woff2');\n}\n\n@font-face {\n    font-family: "Montserrat";\n    font-weight: 400;\n    src: url(${Z}) format('woff'),\n        url(${P}) format('woff2');\n}`,""]);const N=F},373:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(738),i=t.n(o),r=t(705),a=t.n(r)()(i());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}',""]);const s=a},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var l=n[s],f=o.base?l[0]+o.base:l[0],d=r[f]||0,p="".concat(f," ").concat(d);r[f]=d+1;var c=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==c)e[c].references++,e[c].updater(m);else{var h=i(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var l=o(n,i),f=0;f<r.length;f++){var d=t(r[f]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},436:(n,e,t)=>{n.exports=t.p+"assets/images/main-background.webp"},554:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-Black.woff"},80:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-Black.woff2"},137:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-Medium.woff"},393:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-Medium.woff2"},433:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-Regular.woff"},165:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-Regular.woff2"},517:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-SemiBold.woff"},972:(n,e,t)=>{n.exports=t.p+"assets/fonts/Inter-SemiBold.woff2"},87:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-Bold.woff"},310:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-Bold.woff2"},23:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-ExtraBold.woff"},166:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-ExtraBold.woff2"},244:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-Medium.woff"},444:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-Medium.woff2"},196:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-Regular.woff"},180:(n,e,t)=>{n.exports=t.p+"assets/fonts/Montserrat-Regular.woff2"}},x={};function u(n){var e=x[n];if(void 0!==e)return e.exports;var t=x[n]={id:n,exports:{}};return h[n](t,t.exports,u),t.exports}u.m=h,u.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return u.d(e,{a:e}),e},u.d=(n,e)=>{for(var t in e)u.o(e,t)&&!u.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},u.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),u.p="",u.b=document.baseURI||self.location.href,u.nc=void 0,n=u(379),e=u.n(n),t=u(795),o=u.n(t),i=u(569),r=u.n(i),a=u(565),s=u.n(a),l=u(216),f=u.n(l),d=u(589),p=u.n(d),c=u(983),(m={}).styleTagTransform=p(),m.setAttributes=s(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=f(),e()(c.Z,m),c.Z&&c.Z.locals&&c.Z.locals})();