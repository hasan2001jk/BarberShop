if(!window["mgCaptcha"]) {
	var mgCaptcha = window.mgCaptcha = {
		"stack": {},
		"static_url": "//captcha.megagroup.ru/static",
		"script": null,
		"block": null,
		"img": null,
		"sid": null,

		"_getUrl": function (key) {
			var url = mgCaptcha.stack[ key ]["url"];
			url += (url.indexOf("?") == -1) ? "?" : "&";
			var sid = (mgCaptcha.stack[ key ].sid) ? mgCaptcha.stack[ key ].sid.value : "";
			url += "callback=mgCaptcha.stack."+key+".up&current_sid="+sid+"&key=" + key + "&rnd="+Math.random();
			return url
		},

		"draw": function (url, containerId, params, nodraw) {
			var key = "mcp"+Math.round(Math.random()*10000);
			if(!params) params = {"inputSession": "mgcaptcha-sid"};
			else {
				if(!params["inputSession"]) params["inputSession"] = "mgcaptcha-sid";
			}
			mgCaptcha.stack[ key ] = {};
			mgCaptcha.stack[ key ]["url"] = url;
			mgCaptcha.stack[ key ]["params"] = params;
			mgCaptcha.stack[ key ]["up"] = mgCaptcha.update(key);
			if(containerId) {
				if(containerId.nodeType != undefined && containerId.nodeType == 1) {
					var d = containerId;
					d.innerHTML = mgCaptcha.getHtml(key, params);
				} else {
					var d = document.getElementById(containerId);
					if(d) {
						d.innerHTML = mgCaptcha.getHtml(key, params);
					} else {
						throw "Conatiner "+containerId+" not found.";
					}
				}
			} else {
				document.write(mgCaptcha.getHtml(key, params));
			}
			mgCaptcha.fetch(key, false, nodraw);
			return key;
		},

		"replace": function (imgObj, sessObj, url, params, onfinish) {
			if(!imgObj) return;
			var div = document.createElement("div");
			var id = div.id = "mgCaptcha-replace" + Math.round(Math.random()*10000);
			var p = imgObj.parentNode;
			p.insertBefore(div, imgObj);
			if(!!sessObj) {
				var key = mgCaptcha.draw(url, id, params, true);
				mgCaptcha.stack[ key ]["img"].src = imgObj.src;
				mgCaptcha.stack[ key ]["sid"].value = sessObj.value;
			} else {
				var key = mgCaptcha.draw(url, id, params);
			}
			p.removeChild(imgObj);
			if(!!sessObj)
				p.removeChild(sessObj);
			if(onfinish && typeof onfinish == "function")
				onfinish.call(this, id, key, params);
		},

		"getHtml": function(key, params) {
			return '<div class="mgCaptcha-block" id="' + key + '-block">'+
			'<a href="javascript: void(0);" onclick="mgCaptcha.refresh(\'' + key + '\');">'+
				'<img id="' + key + '-img" border="0" src="" />'+
				'<img border=0 src="'+mgCaptcha.static_url+'/reload.gif" />'+
			'</a>'+
			'<input id="' + key + '-sid" type="hidden" name="' + params["inputSession"] + '" value="" />'+
			'</div>';
		},

		"fetch": function(key, url, nodraw) {
			if(!!url) mgCaptcha.stack[ key ] = url;
			mgCaptcha.stack[ key ]["script"] = document.getElementById(key+"-script");
			mgCaptcha.stack[ key ]["block"] =  document.getElementById(key+"-block");
			mgCaptcha.stack[ key ]["img"] =  document.getElementById(key+"-img");
			mgCaptcha.stack[ key ]["sid"] =  document.getElementById(key+"-sid");
			if(!nodraw)
				mgCaptcha.refresh(key);
		},

		"refresh": function (key) {
			if(mgCaptcha.stack[ key ].script) {
				mgCaptcha.stack[ key ].script.parentNode.removeChild(mgCaptcha.stack[ key ].script);
				mgCaptcha.stack[ key ].script = null;
			}
			var script = document.createElement("SCRIPT");
			document.body.appendChild(script);
			script.id = key+"-script";
			mgCaptcha.stack[ key ].script = script;
			mgCaptcha.stack[ key ].script.src = mgCaptcha._getUrl(key);
		},

		"update": function(key) {
			return function (data) {
				if(!data)
					throw "mgCaptcha: empty data recived";
				if(!data["sid"])
					throw "mgCaptcha: not sid in data";
				if(!data["url"])
					throw "mgCaptcha: not url in data";
				if(!mgCaptcha.stack[ key ])
					throw "mgCaptcha: captcha not declared";
				if(!mgCaptcha.stack[ key ].img)
					throw "mgCaptcha: image not found";
				if(!mgCaptcha.stack[ key ].sid)
					throw "mgCaptcha: input-sid not found";

				mgCaptcha.stack[ key ].img.src = data["url"]+"&inline=1";//&v="+data["v"]+"&skey="+data["skey"];
				mgCaptcha.stack[ key ].sid.value = data["sid"];
			}
		}
	}
}
