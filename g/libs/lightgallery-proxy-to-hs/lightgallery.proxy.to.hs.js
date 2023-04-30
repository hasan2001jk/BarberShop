var loader = loader || {}
loader.import_file = (filename,filetype) => {
	let head   = document.getElementsByTagName('head')[0];
	switch (filetype) {
		case 'js':
			let script=document.createElement("script");
			script.type = "text/javascript";
			script.src = filename + '.' + filetype;
			script.async = true;
			head.appendChild(script);
			break;
		case 'css': {
			let stylesheet=document.createElement("link");
			stylesheet.rel ="stylesheet";
			stylesheet.type = "text/css";
			stylesheet.href = filename + '.' + filetype;
			head.appendChild(stylesheet);
			break;
			
		}
			
	}
};

window.addEventListener("load", (event)=> {
	if (typeof(window.lightGallery)!='undefined') {
		return false;
	} else {
		loader.import_file('g/libs/lightgallery/v1.2.0/js/lightgallery-full.min', 'js');
		loader.import_file('g/libs/lightgallery/v1.2.0/css/lightgallery.min', 'css');
	}	
    
});

if (typeof(hs)=='undefined') {
    var hs = {};
}

(function(){
    var hsMain = {
        // default variables
        align: '',
        allowHeightReduction: true,
        allowMultipleInstances: true,
        allowSimultaneousLoading: false,
        allowSizeReduction: true,
        allowWidthReduction: false,
        anchor: '',
        autoplay: null,
        blockRightClick: false,
        cacheAjax: true,
        captionEval: null,
        captionId: null,
        captionOverlay: {},
        captionText: null,
        contentId: null,
        creditsHref: '',
        creditsPosition: 'top left',
        creditsTarget: '_self',
        dimmingDuration: 50,
        dimmingGeckoFix: false,
        dimmingOpacity: 0,
        dragByHeading: true,
        dragSensitivity: 5,
        dynamicallyUpdateAnchors: true,
        easing: 'easeInQuad',
        easingClose: this.easing,
        enableKeyListener: true,
        expandCursor: 'zoomin.cur',
        expandDuration: 250,
        fadeInOut: false,
        flushImgSize: false,
        forceAjaxReload: false,
        fullExpandOpacity: 1,
        fullExpandPosition: 'bottom right',
        graphicsDir: '',
        headingEval: null,
        headingId: null,
        headingOverlay: {},
        headingText: null,
        height: undefined,
        lang: {},
        loadingOpacity: 0.75,
        maincontentEval: null,
        maincontentId: null,
        maincontentText: null,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        maxHeight: null,
        maxWidth: null,
        minHeight: 200,
        minWidth: 200,
        numberOfImagesToPreload: 5,
        numberPosition: null,
        objectHeight: null,
        objectLoadTime: '',
        objectType: null,
        objectWidth: null,
        openerTagNames: ["a"],
        outlinesDir: 'outlines/',
        outlineStartOffset: 3,
        outlineType: '',
        outlineWhileAnimating: 2,
        overrides : [
            'allowSizeReduction',
            'useBox',
            'anchor',
            'align',
            'targetX',
            'targetY',
            'outlineType',
            'outlineWhileAnimating',
            'captionId',
            'captionText',
            'captionEval',
            'captionOverlay',
            'headingId',
            'headingText',
            'headingEval',
            'headingOverlay',
            'creditsPosition',
            'dragByHeading',
            'autoplay',
            'numberPosition',
            'transitions',
            'dimmingOpacity',
            
            'width',
            'height',
            
            'contentId',
            'allowWidthReduction',
            'allowHeightReduction',
            'preserveContent',
            'maincontentId',
            'maincontentText',
            'maincontentEval',
            'objectType',	
            'cacheAjax',	
            'objectWidth',
            'objectHeight',
            'objectLoadTime',	
            'swfOptions',
            'wrapperClassName',
            'minWidth',
            'minHeight',
            'maxWidth',
            'maxHeight',
            'pageOrigin',
            'slideshowGroup',
            'easing',
            'easingClose',
            'fadeInOut',
            'src'
        ],
        padToMinWidth: false,
        pageOrigin: null,
        preserveContent: true,
        restoreCursor: 'zoomout.cur',
        restoreDuration: 250,
        showCredits: true,
        skin: {},
        slideshowGroup: null,
        src: undefined,
        swfOptions: {},
        targetX: null,
        targetY: null,
        thumbnailId: null,
        transitionDuration: 500,
        transitions: [],
        useBox: false,
        width: undefined,
        wrapperClassName: null,
        zIndexCounter: 1001,
        // /default variables
        expanders: [],
        cachedGets: {},
        close : function(el) {
            var exp = hs.getExpander(el);
            if (exp) exp.close();
            return false;
        },
        next: function(el) {
            var exp = hs.getExpander(el);
            if (exp) window.lgData[exp.lgUid].goToNextSlide();
            return false;
        },
        previous: function(el) {
            var exp = hs.getExpander(el);
            if (exp) window.lgData[exp.lgUid].goToPrevSlide();
            return false;
        },
        getExpander : function (el, expOnly) {
            if (typeof el == 'number') return hs.expanders[el] || null;
            return hs.expanders[hs.focusKey] || null;
        },        
        registerOverlay: function(obj) {
            if (typeof obj === 'object') {
                hs.fakeOverlay = obj;
            };
        },        
        addSlideshow: function(obj) {
            if (typeof obj === 'object') {
                hs.fakeSlideshow = obj;
            };
        },
        lgImageSelector: 'a.highslide:not([onclick*=htmlExpand])',
        expand: function(el, params, custom, type) {
            if (type == 'html' && !el.hasAttribute('lg-uid')) {
                params = this.overrideParams(params);
                var preInitRes = this.lgHtmlPreInit(el, params, custom);
                if (preInitRes != undefined) return preInitRes;
                this.lgHtmlInit(el, params, custom);
                this.addLgEventListeners(el, params, custom, type);
                el.click();
            } else {
                var galleryContainer = this.getGalleryContainer(el);
            
                if (galleryContainer && !galleryContainer.hasAttribute('lg-uid')) {
                    params = this.overrideParams(params);
                    params.galleryContainer = galleryContainer;
                    this.lgGalleryPreInit(el, params, custom);
                    this.lgGalleryInit(el, params, custom);
                    this.addLgEventListeners(el, params, custom, type);
                    el.click();
                } else if (!galleryContainer && !el.hasAttribute('lg-uid')) {
                    params = this.overrideParams(params);
                    this.lgImagePreInit(el, params, custom);
                    this.lgImageInit(el, params, custom);
                    this.addLgEventListeners(el, params, custom, type);
                    el.click();
                };
            };
            return false;
        },
        htmlExpand: function(el, params, custom) {
            return hs.expand(el, params, custom, 'html');
        },
        fireEvent : function (obj, evt, args) {
            var exp = hs.getExpander();
            return exp && exp[evt] ? (exp[evt](exp, args) !== false) : true;
        },
        overrideParams: function(params) {
            params = params || {};
            
            for (var i = 0; i < hs.overrides.length; i++) {
                var name = hs.overrides[i];
                if (typeof params[name] == 'undefined') params[name] = hs[name];
            };
            
            return params;
        },
        getGalleryContainer: function(el) {
            if (el.matches(this.lgImageSelector) && ( (hs.fakeOverlay.thumbnailId === null) || Object.keys(hs.fakeSlideshow).length )) {
                var links = document.querySelectorAll(this.lgImageSelector);
                
                if (links.length > 1) {
                    for (var elem1 = links[0].parentElement; elem1 != null; elem1 = elem1.parentElement) {
                        for (var elem2 = links[links.length-1].parentElement; elem2 != null; elem2 = elem2.parentElement) {
                            if (elem1 == elem2) {
                                return elem1;
                            };
                        };
                    };
                };
            };
            return null;
        },
        lgGalleryPreInit: function(el, params, custom) {
            var galleryContainer = params.galleryContainer;
            
            for (var link of galleryContainer.querySelectorAll(this.lgImageSelector)) {
                this.lgSetCaption(link);
            };
        },
        lgGetOptions: function(el, params, custom, optionType) {
            var lgOptions = {};

            optionType = optionType || 'image';

            if (optionType == 'image') {
                lgOptions = {
                    selector: 'this',
                    hash: false,
                    share: false,
                    getCaptionFromTitleOrAlt: false
                };
            } else if (optionType == 'gallery') {
                lgOptions = {
                    thumbnail: true,
                    selector: this.lgImageSelector,
                    hash: false,
                    share: false,
                    pause: this.fakeSlideshow.interval ? this.fakeSlideshow.interval : 5000,
                    autoplayControls: this.fakeSlideshow.useControls ? this.fakeSlideshow.useControls : false,
                    autoplay: this.autoplay ? this.autoplay : false,
                    getCaptionFromTitleOrAlt: false
                };
            } else if (optionType == 'html') {
                lgOptions = {
                    selector: 'this',
                    hash: false,
                    share: false,
                    width: params.width ? (params.width + 'px') : '420px',
                    height: params.height ? (params.height + 'px') : 'auto',
                    mode: 'lg-fade',
                    addClass: (params.objectType == 'iframe' && (!params.height || params.height == 'auto')) ? 'lg-iframe-auto' : 
                        params.objectType == 'iframe' ? 'lg-iframe' : 'lg-html',
                    counter: false,
                    download: false,
                    zoom: false,
                    fullScreen: false,
                    startClass: '',
                    enableSwipe: false,
                    enableDrag: false,
                    speed: 500
                };
            };

            if (custom && custom.lgOptions) {
                lgOptions = Object.assign(lgOptions, custom.lgOptions);
            };

            return lgOptions;
        },
        lgGalleryInit: function(el, params, custom) {
            var galleryContainer = params.galleryContainer,
                lgOptions = this.lgGetOptions(el, params, custom, 'gallery');
            
            lightGallery(galleryContainer, lgOptions);
        },
        lgImagePreInit: function(el, params, custom) {
            this.lgSetCaption(el);
        },
        lgSetCaption: function(el) {
            if (el.dataset.captionDisable !== 'true') {
                if ( el.nextElementSibling && el.nextElementSibling.matches('.highslide-caption') ) {
                    el.dataset.subHtml = el.nextElementSibling.innerHTML;
                } else if (el.querySelector('img')) {
                    var img = el.querySelector('img');

                    el.dataset.subHtml = img.getAttribute('longdesc') || el.getAttribute('data-caption') || img.getAttribute('data-caption') || el.getAttribute('title') || img.getAttribute('title') || img.getAttribute('alt');
                };
            };
        },
        lgImageInit: function(el, params, custom) {
            var lgOptions = this.lgGetOptions(el, params, custom);

            lightGallery(el, lgOptions);
        },
        lgHtmlPreInit: function(el, params, custom) {
            if (params && params.objectType == 'ajax') {
                var ajax = new hs.Ajax(el);
                ajax.src = el.href || params.src;
                ajax.onLoad = function () {
                    hs.lgHtmlInit(el, params, custom);
                    hs.addLgEventListeners(el, params, custom, 'html');
                    el.click();
                };
                ajax.onError = function () { location.href = el.href; };
                ajax.run();
                return false;
            } else if (params && params.objectType == 'iframe') {
                el.dataset.iframe = true;
                el.dataset.src = el.href || params.src;
            } else if (params && params.contentId && document.getElementById(params.contentId)) {
                el.dataset.subHtml = '#' + params.contentId;
            } else if ( el.nextElementSibling && el.nextElementSibling.matches('.highslide-maincontent') ) {
                el.dataset.subHtml = el.nextElementSibling.innerHTML;
             } else {
                return true;
            };
        },
        lgHtmlInit: function(el, params, custom) {
            var lgOptions = this.lgGetOptions(el, params, custom, 'html');

            lightGallery(el, lgOptions);
        },
        addLgEventListeners: function(el, params, custom, type) {
            var lgElem = params.galleryContainer || el;
            lgElem.addEventListener('onBeforeOpen', function(e) {
                new hs.Expander(el, params, custom, type);
            });
            lgElem.addEventListener('onAferAppendSlide', function(e) {
                hs.fireEvent(null, 'onBeforeGetCaption');
                hs.fireEvent(null, 'onBeforeGetContent');
            });
            lgElem.addEventListener('onAfterAppendSubHtml', function(e) {
                hs.fireEvent(null, 'onAfterGetCaption');
                hs.fireEvent(null, 'onAfterGetContent');
            });
            lgElem.addEventListener('onBeforeSlide', function(e) {
                hs.fireEvent(null, 'onBeforeExpand');
            });
            lgElem.addEventListener('onAfterSlide', function(e) {
                hs.fireEvent(null, 'onAfterExpand');
            });
            lgElem.addEventListener('onBeforeClose', function(e) {
                hs.fireEvent(null, 'onBeforeClose');
            });
            lgElem.addEventListener('onCloseAfter', function(e) {
                hs.fireEvent(null, 'onAfterClose');
                hs.expanders[hs.focusKey] = null;
            });
        },
        
        isUnobtrusiveAnchor: function(el) {
            return;
        },
        stripItemFormatter: function(el) {
            return;
        },
        updateAnchors: function(el) {
            return;
        }
    };

    var hsMainKeys = Object.keys(hsMain);

    for (var i = 0; i < hsMainKeys.length; i++) {
        var hsMainKey = hsMainKeys[i];
        hs[hsMainKey] = hsMain[hsMainKey];
    }
})();

hs.fakeOverlay = hs.fakeOverlay ? hs.fakeOverlay : {};
hs.fakeSlideshow = hs.fakeSlideshow ? hs.fakeSlideshow : {};

// hs.Ajax object prototype
hs.Ajax = function (a, content, pre) {
	this.a = a;
	this.content = content;
	this.pre = pre;
};

hs.Ajax.prototype = {
run : function () {
	var xhr;
	if (!this.src) this.src = hs.getSrc(this.a);
	if (this.src.match('#')) {
		var arr = this.src.split('#');
		this.src = arr[0];
		this.id = arr[1];
	}
	if (hs.cachedGets[this.src]) {
		this.cachedGet = hs.cachedGets[this.src];
		if (this.id) this.getElementContent();
		else this.loadHTML();
		return;
	}
	try { xhr = new XMLHttpRequest(); }
	catch (e) {
		try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); }
		catch (e) {
			try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
			catch (e) { this.onError(); }
		}
	}
	var pThis = this; 
	xhr.onreadystatechange = function() {
		if(pThis.xhr.readyState == 4) {
			if (pThis.id) pThis.getElementContent();
			else pThis.loadHTML();
		}
	};
	var src = this.src;
	this.xhr = xhr;
	if (hs.forceAjaxReload) 
		src = src.replace(/$/, (/\?/.test(src) ? '&' : '?') +'dummy='+ (new Date()).getTime());
	xhr.open('GET', src, true);
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(null);
},

getElementContent : function() {
	var el = document.createElement('iframe');
	
	if (window.opera || hs.ie6SSL) el.src = 'about:blank';
	el.style.position = 'absolute';
	el.style.top = '-9999px';
	document.body.appendChild(el);
	
	this.iframe = el;
		
	this.loadHTML();
},

loadHTML : function() {
	var s = this.cachedGet || this.xhr.responseText,
		regBody;
	if (this.pre) hs.cachedGets[this.src] = s;
	if (!hs.ie || hs.uaVersion >= 5.5) {
		s = s.replace(new RegExp('<link[^>]*>', 'gi'), '')
			.replace(new RegExp('<script[^>]*>.*?</script>', 'gi'), '');
		if (this.iframe) {
			var doc = this.iframe.contentDocument;
			if (!doc && this.iframe.contentWindow) doc = this.iframe.contentWindow.document;
			if (!doc) { // Opera
				var pThis = this;
				setTimeout(function() {	pThis.loadHTML(); }, 25);
				return;
			}
			doc.open();
			doc.write(s);
			doc.close();
			try { s = doc.getElementById(this.id).innerHTML; } catch (e) {
				try { s = this.iframe.document.getElementById(this.id).innerHTML; } catch (e) {} // opera
			}
			document.body.removeChild(this.iframe);
		} else {
			regBody = /(<body[^>]*>|<\/body>)/ig;
			if (regBody.test(s)) s = s.split(regBody)[hs.ieLt9 ? 1 : 2];
			
		}
	}
	this.a.dataset.subHtml = s;
	this.onLoad();
	for (var x in this) this[x] = null;
}
};

hs.Expander = function(a, params, custom, contentType) {
	this.a = a;
	this.custom = custom;
	this.contentType = contentType || 'image';
	this.isHtml = (contentType == 'html');
	this.isImage = !this.isHtml;
	
	hs.continuePreloading = false;
	this.overlays = [];
	this.last = hs.last;
	hs.last = null;
	var key = this.key = hs.expanders.length;
	
	for (var name in params) {
		this[name] = params[name];
	};
	
	this.lgUid = a.getAttribute('lg-uid') || this.galleryContainer.getAttribute('lg-uid');

	if (!this.src) this.src = a.href;
	

	// check if already open
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].a == a 
			&& !(this.last && this.transitions[1] == 'crossfade')) {
			return false;
		}
	}
	
	hs.expanders[key] = this;
	hs.focusKey = key;
	
	return true;
};

hs.Expander.prototype = {
	close: function() {
		window.lgData[this.lgUid].destroy();
	},
	createOverlay: function(el) {
		return;
	},
	focus: function() {
		return;
	},
	moveTo: function(x, y) {
		return;
	},
	reflow: function() {
		return;
	},
	resizeTo: function(w, h) {
		return;
	}
};