!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.__s3_require__basestyle;window.__s3_require__basestyle=function(r,i){for(var a,u,c=0,s=[];c<r.length;c++)u=r[c],o[u]&&s.push.apply(s,o[u]),o[u]=0;for(a in i)e[a]=i[a];for(n&&n(r,i);s.length;)s.shift().call(null,t)};var r={},o={17:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+"./__modules/"+e+"-"+({}[e]||e)+".js",r.appendChild(i)}},t.m=e,t.c=r,t.p="g/basestyle/1.0.1/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(82),i=r(o),a=n(83),u=r(a),c=n(1),s=r(c),l=n(84),f=r(l);(0,u.default)(),(0,i.default)(),(0,s.default)(function(e,t){t.init({anketa_id:"g-anketa",form_selector:"#form_g-anketa",row_box_selector:".g-form-row-wrap",row_selector:".g-form-row",field_selector:".g-form-field-wrap",groups:[],"calendarСrutch":!0})}),(0,f.default)(function(e,t,n){var r={queue:{},init:function(t){e.extend(this,t),e(function(){var t=r.queue;e.each(t,function(n){var r=t[n];e.isFunction(r)&&r()})})}};r.queue={calendar:function(){if(r.enable_calendar){var t=function(e,t){if(t)i[t]="0";else for(var n in e)i[e[n].date]||(i[e[n].date]=e[n].cnt)},n=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth();n+=1;var i=n+1,a=t+"-"+n+"-01",u=t+"-"+i+"-01",c="/my/s3/xapi/public/?method=article2/getCountPostsByCalendar&param[lenta_id]="+r.lenta_id+"&param[date_from]="+a+"&param[date_to]="+u;o(c,t,n)},o=function(n,r,o){e.ajax({url:n,async:!1,success:function(n){var i=n.result;if(e.isEmptyObject(i)){var a=r+"-"+o;a=e.datepicker.formatDate("yy-mm",new Date(a)),a+="-00",t(i,a)}else t(i)}})},i={};n(),e(r.calendar_selector).hide(),e(r.calendar_selector).datepicker({changeMonth:!0,changeYear:!0,dateFormat:"yy-mm-dd",maxDate:"+m",onChangeMonthYear:function(t,n){var a=n+1,u=t+"-"+n,c=t+"-"+a,s=new Date(u),l=!1;for(var f in i){var d=f.split("-"),h=d[0]+"-"+d[1],m=e.datepicker.formatDate("yy-mm",s);if(m==h){l=!0;break}}if(!l){var p="/my/s3/xapi/public/?method=article2/getCountPostsByCalendar&param[lenta_id]="+r.lenta_id+"&param[date_from]="+u+"-01&param[date_to]="+c+"-01";o(p,t,n)}},beforeShowDay:function(t){var n=e.datepicker.formatDate("yy-mm-dd",t),r=i[n];return r?[!0,"g-article-calendar-highlight",r]:[!0,"ui-datepicker-unselectable",""]},onSelect:function(e){var t="";t=1==r.seo?"/date?date="+e:"?mode=date&date="+e,t=r.page_url+t,document.location.href=t}}),e(r.calendar_button).click(function(){e(r.calendar_selector).datepicker("show")})}},lazyLoad:function(){if(e("div").is(".g-pagination")){var t=function(e,t,n){return e+(~e.indexOf("?")?"&":"?")+t+"="+n},n=e(document),o=e(window),i=!1,a=e(".g-article-list");if("buttonload"==r.pagination_type&&a.get(0)){var u=e(".g-pagination:last").find(".g-pagination__item--active").next();0==u.length&&e(r.pagination_button_load).hide(),e(r.pagination_button_load).on("click",function(){var r=e(this),a=e(".g-pagination"),u=a.find(".g-pagination__item--active").next();a.addClass("show");var c=a.offset().top;a.removeClass("show"),n.scrollTop()+o.height()>=c&&!i&&u.get(0)&&(i=!0,e.get(t(u.attr("href"),"articles_only",1),function(t){e(".g-article-list:last").after(t),a=e(".g-pagination"),e(".g-pagination:last").remove(),e(".g-pagination").before(r),a.find("a").each(function(){var t=e(this),n=t.attr("href");t.attr("href",n.replace(/[&|\?]*articles_only=[^&]/,""))}),i=!1;var n=e(".g-pagination:last").find(".g-pagination__item--active").next();0==n.length&&r.hide()}))})}else"lazyload"==r.pagination_type&&a.get(0)&&n.on("mousewheel scroll",function(){var r=e(".g-pagination:last"),a=r.find(".g-pagination__item--active").next();r.addClass("show");var u=r.offset().top;r.removeClass("show"),n.scrollTop()+o.height()>=u&&!i&&a.get(0)&&(i=!0,e.get(t(a.attr("href"),"articles_only",1),function(t){r.after("<hr />"+t),r=e(".g-pagination:last"),r.find("a").each(function(){var t=e(this),n=t.attr("href");t.attr("href",n.replace(/[&|\?]*articles_only=[^&]/,""))}),i=!1}))})}},multiselect:function(){e(r.multiselect_tags).select2({tags:!0})}};var o=e(".g-page-article--main").data();r.init({lenta_id:o.lenta_id,enable_calendar:o.enable_calendar,calendar_button:o.calendar_button,calendar_selector:o.calendar_selector,pagination_type:o.pagination_type,pagination_button_load:o.pagination_button_load,page_url:o.page_url,seo:o.seo,multiselect_tags:o.multiselect_tags})})},1:function(e,t,n){"use strict";function r(e,t){var n=e(".g-anketa-wrapper");if(n.length){var r=n.data();r.id&&r.groups&&t.init({anketa_id:r.id,form_selector:"#form_"+r.id,row_box_selector:".g-form-row-wrap",row_selector:".g-form-row",field_selector:".g-form-field-wrap",groups:r.groups})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return(0,o.formPromisePack)().then(function(t){var n=t[0],r=t[1];n(function(){return e(n,r)})})};var o=n(2)},2:function(e,t,n){"use strict";function r(e){return parseInt(e.split(".").map(function(e){return o("0",5-e.length)+e}).join(""))}function o(e,t){for(var n="",r=0;r<t;r++)n+=e;return n}Object.defineProperty(t,"__esModule",{value:!0}),n(3);var i=window.s3_require={};t.default=i;var a={},u={};i.modules=a;var c=t.jQueryPromise=function(){var e="jQuery",t=void 0;if(u[e])return u[e];var o=window.jQuery;return o&&r(o.fn.jquery)>=r("1.7.0")?(t=Promise.resolve(o),a[e]=o):t=n(7)().then(function(t){return a[e]=t,t}),u[e]=t,t},s=t.jQueryUIDatepickerPromise=function(){var e="jQueryUIDatepicker";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(t){t.ui&&t.ui.version&&t.datepicker?e():n(9)().then(e)})});return u[e]=t,t},l=t.jQueryTooltipsterPromise=function(){var e="jQueryTooltipster";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(t){t.fn.tooltipster?e():n(31)().then(e)})});return u[e]=t,t},f=t.jQueryChosenPromise=function(){var e="jQueryChosen";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(t){t.fn.chosen?e():n(36)().then(e)})});return u[e]=t,t},d=t.jQueryMaskedInputPromise=function(){var e="jQueryMaskedInput";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(t){t.fn.caret&&t.fn.mask&&t.fn.unmask?e():n(43)().then(e)})});return u[e]=t,t},h=t.anketaControllerPromise=function(){var e="anketaController";if(u[e])return u[e];var t=new Promise(function(e){window.anketaController?e(window.anketaController):c().then(function(t){n(45)().then(e)})});return u[e]=t,t},m=t.initPhotoSwipeFromDOMPromise=function(){return new Promise(function(e){var t="initPhotoSwipeFromDOM";if(u[t])return u[t];var r=void 0;return r=window.initPhotoSwipeFromDOM?Promise.resolve():n(47)().then(e),u[t]=r,r})},p=t.s3FormPromise=function(){var e="s3Form";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(){n(58)().then(e)})});return u[e]=t,t},v=t.s3IncludeFormStepsPromise=function(){var e="s3IncludeFormSteps";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(){n(60)().then(e)})});return u[e]=t,t},g=t.flipClockPromise=function(){var e="flipclock";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(){n(62)().then(e)})});return u[e]=t,t},w=t.owlCarouselPromise=function(){var e="owlcarousel";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(){n(64)().then(e)})});return u[e]=t,t},y=t.jQuerySelect2Promise=function(){var e="select2";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(){n(66)().then(e)})});return u[e]=t,t},_=t.alignElementsPromise=function(){var e="alignElements";if(u[e])return u[e];var t=new Promise(function(e){c().then(function(){n(68)().then(e)})});return u[e]=t,t};t.tooltipPromisePack=function(){return Promise.all([c(),l()])},t.formPromisePack=function(){return Promise.all([c(),h(),s(),f(),d()])},t.userPromisePack=function(){return Promise.all([c(),h(),p(),s(),f(),d()])},t.galleryPromisePack=function(){return Promise.all([c(),m()])},t.fastSalePromisePack=function(){return Promise.all([c(),p(),g()])},t.fastSale2PromisePack=function(){return Promise.all([c(),p(),g(),w(),_(),d(),v()])},t.fastSaleInitLPPromisePack=function(){return Promise.all([c(),p(),g(),w(),_(),d(),v()])},t.fastPayPromisePack=function(){return Promise.all([c()])},t.additionalPagesPromisePack=function(){return Promise.all([c(),w(),g(),p(),d()])},t.articles2PromisePack=function(){return Promise.all([c(),y(),s()])}},3:function(e,t,n){(function(e){"use strict";"function"!=typeof e.Promise&&(e.Promise=n(4))}).call(t,function(){return this}())},4:function(e,t,n){(function(r){"use strict";function o(){}function i(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=y,this.queue=[],this.outcome=void 0,r.browser||(this.handled=_),e!==o&&s(this,e)}function a(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function u(e,t,n){p(function(){var r;try{r=t(n)}catch(t){return v.reject(e,t)}r===e?v.reject(e,new TypeError("Cannot resolve promise with itself")):v.resolve(e,r)})}function c(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function s(e,t){function n(t){i||(i=!0,v.reject(e,t))}function r(t){i||(i=!0,v.resolve(e,t))}function o(){t(r,n)}var i=!1,a=l(o);"error"===a.status&&n(a.value)}function l(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function f(e){return e instanceof this?e:v.resolve(new this(o),e)}function d(e){var t=new this(o);return v.reject(t,e)}function h(e){function t(e,t){function o(e){a[t]=e,++u!==r||i||(i=!0,v.resolve(s,a))}n.resolve(e).then(o,function(e){i||(i=!0,v.reject(s,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,i=!1;if(!r)return this.resolve([]);for(var a=new Array(r),u=0,c=-1,s=new this(o);++c<r;)t(e[c],c);return s}function m(e){function t(e){n.resolve(e).then(function(e){i||(i=!0,v.resolve(u,e))},function(e){i||(i=!0,v.reject(u,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,i=!1;if(!r)return this.resolve([]);for(var a=-1,u=new this(o);++a<r;)t(e[a]);return u}var p=n(6),v={},g=["REJECTED"],w=["FULFILLED"],y=["PENDING"];if(!r.browser)var _=["UNHANDLED"];e.exports=t=i,i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){if("function"!=typeof e&&this.state===w||"function"!=typeof t&&this.state===g)return this;var n=new this.constructor(o);if(r.browser||this.handled===_&&(this.handled=null),this.state!==y){var i=this.state===w?e:t;u(n,i,this.outcome)}else this.queue.push(new a(n,e,t));return n},a.prototype.callFulfilled=function(e){v.resolve(this.promise,e)},a.prototype.otherCallFulfilled=function(e){u(this.promise,this.onFulfilled,e)},a.prototype.callRejected=function(e){v.reject(this.promise,e)},a.prototype.otherCallRejected=function(e){u(this.promise,this.onRejected,e)},v.resolve=function(e,t){var n=l(c,t);if("error"===n.status)return v.reject(e,n.value);var r=n.value;if(r)s(e,r);else{e.state=w,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},v.reject=function(e,t){e.state=g,e.outcome=t,r.browser||e.handled===_&&p(function(){e.handled===_&&r.emit("unhandledRejection",t,e)});for(var n=-1,o=e.queue.length;++n<o;)e.queue[n].callRejected(t);return e},t.resolve=f,t.reject=d,t.all=h,t.race=m}).call(t,n(5))},5:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){p&&h&&(p=!1,h.length?m=h.concat(m):v=-1,m.length&&u())}function u(){if(!p){var e=o(a);p=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,p=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,m=[],p=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||p||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},6:function(e,t){(function(t){"use strict";function n(){l=!0;for(var e,t,n=f.length;n;){for(t=f,f=[],e=-1;++e<n;)t[e]();n=f.length}l=!1}function r(e){1!==f.push(e)||l||o()}var o,i=t.MutationObserver||t.WebKitMutationObserver;if(i){var a=0,u=new i(n),c=t.document.createTextNode("");u.observe(c,{characterData:!0}),o=function(){c.data=a=++a%2}}else if(t.setImmediate||"undefined"==typeof t.MessageChannel)o="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){n(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(n,0)};else{var s=new t.MessageChannel;s.port1.onmessage=n,o=function(){s.port2.postMessage(0)}}var l,f=[];e.exports=r}).call(t,function(){return this}())},7:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(1,function(t){e(n(8))})})}},9:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(2,function(t){e(n(10))})})}},31:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(3,function(t){e(n(32))})})}},36:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(4,function(t){e(n(37))})})}},43:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(5,function(t){e(n(44))})})}},45:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(6,function(t){e(n(46))})})}},47:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(7,function(t){e(n(48))})})}},58:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(8,function(t){e(n(59))})})}},60:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(9,function(t){e(n(61))})})}},62:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(10,function(t){e(n(63))})})}},64:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(11,function(t){e(n(65))})})}},66:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(12,function(t){e(n(67))})})}},68:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(13,function(t){e(n(69))})})}},82:function(e,t,n){"use strict";function r(e){var t="g-rating-edit__item--active";e("form .g-rating-edit").each(function(){function n(n){n=e(n),i.removeClass(t),n.addClass(t).prevAll().addClass(t)}var r=this,o=e(this),i=o.children("span"),a=o.children("input"),u=+a.val();if(this.selected=null,u){for(var c=0;c<u;c++)e(i.get(c)).addClass(t);this.selected=i.get(u-1)}o.on({click:function(t){r.selected=t.target,a.val(e(r.selected).index()+1)},mousemove:function(e){n(e.target)},mouseleave:function(){n(r.selected)}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return(0,o.jQueryPromise)().then(function(t){t(function(){return e(t)})})};var o=n(2)},83:function(e,t,n){"use strict";function r(e){e(document).on("click",".g-categories__button",function(t){t.preventDefault(),t.stopPropagation();var n=e(this);n.parent().toggleClass("g-categories--opened")}),e(document).on("click",function(t){e(t.target).closest(".g-categories").length||e(".g-categories").removeClass("g-categories--opened")})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return(0,o.jQueryPromise)().then(function(t){t(function(){return e(t)})})},t.defaultInit=r;var o=n(2)},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,r.articles2PromisePack)().then(function(t){var n=t[0];n(function(){return e.apply(null,t)})})};var r=n(2)}});