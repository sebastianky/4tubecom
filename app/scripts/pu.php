function sppc_pu(vars){
   this.JSONSPPC||(this.JSONSPPC={});
   (function(){function k(b){return 10>b?"0"+b:b}function o(b){p.lastIndex=0;return p.test(b)?'"'+b.replace(p,function(b){var c=r[b];return"string"===typeof c?c:"\\u"+("0000"+b.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+b+'"'}function m(b,i){var c,d,h,n,g=e,f,a=i[b];a&&"object"===typeof a&&"function"===typeof a.toJSON&&(a=a.toJSON(b));"function"===typeof j&&(a=j.call(i,b,a));switch(typeof a){case "string":return o(a);case "number":return isFinite(a)?""+a:"null";case "boolean":case "null":return""+
   a;case "object":if(!a)return"null";e+=l;f=[];if("[object Array]"===Object.prototype.toString.apply(a)){n=a.length;for(c=0;c<n;c+=1)f[c]=m(c,a)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(j&&"object"===typeof j){n=j.length;for(c=0;c<n;c+=1)d=j[c],"string"===typeof d&&(h=m(d,a))&&f.push(o(d)+(e?": ":":")+h)}else for(d in a)Object.hasOwnProperty.call(a,d)&&(h=m(d,a))&&f.push(o(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+
   g+"}":"{"+f.join(",")+"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
   p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,l,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;"function"!==typeof JSONSPPC.stringify&&(JSONSPPC.stringify=function(b,i,c){var d;l=e="";if("number"===typeof c)for(d=0;d<c;d+=1)l+=" ";else"string"===typeof c&&(l=c);if((j=i)&&"function"!==typeof i&&("object"!==typeof i||"number"!==typeof i.length))throw Error("JSONSPPC.stringify");
   return m("",{"":b})});"function"!==typeof JSONSPPC.parse&&(JSONSPPC.parse=function(b,e){function c(b,d){var g,f,a=b[d];if(a&&"object"===typeof a)for(g in a)Object.hasOwnProperty.call(a,g)&&(f=c(a,g),void 0!==f?a[g]=f:delete a[g]);return e.call(b,d,a)}var d;q.lastIndex=0;q.test(b)&&(b=b.replace(q,function(b){return"\\u"+("0000"+b.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
   "]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+b+")"),"function"===typeof e?c({"":d},""):d;throw new SyntaxError("JSONSPPC.parse");})})();

    var alreadyClicked = 0;
	var getCookie = function (name) {
		var val = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
		return val? unescape(val[2]) : null;
	}
	var setCookie = function (name, value, exdays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + "; path=/" + ((exdays == null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=name + "=" + c_value;
	}
	var pu = function(e) {
      if (typeof(vars.cookie) == 'undefined') {
         vars.cookie = Math.round(Math.random() * 1000);
      }
		if (typeof(vars.use_flash) == 'undefined') {
   		vars.use_flash = 0;
   		if (navigator.plugins && navigator.plugins.length) {
      		if (navigator.plugins['Shockwave Flash'] || navigator.plugins['Shockwave Flash 2.0']) {
         		vars.use_flash = 1;
      		}
   		} else if (navigator.mimeTypes && navigator.mimeTypes.length) {
      		x = navigator.mimeTypes['application/x-shockwave-flash'];
      		if (x && x.enabledPlugin) {
         		vars.use_flash = 1;
      		}
   		} else if (navigator.userAgent && navigator.userAgent.indexOf('MSIE') >= 0 && (navigator.appVersion.indexOf('Win') != -1)) {
      		// MSIE
      		var flash_latest_version = 12;
      		try {
         		for (i = 3; i <= flash_latest_version; i++) {
            		if (eval('new ActiveXObject("ShockwaveFlash.ShockwaveFlash.'+i+'")')) {
               		vars.use_flash = 1;
               		break;
            		}
         		}
      		} catch(e) {}
   		} else {
      		// Unknown
      		vars.use_flash = -1;
   		}
		}

	   pop_width = 1100;
	   pop_height = 800;
	   pop_frequency = 0;
	   if(typeof(vars.misc1)=='undefined'){vars.misc1 = '';}
	   if(typeof(vars.misc2)=='undefined'){vars.misc2 = '';}
	   if(typeof(vars.misc3)=='undefined'){vars.misc3 = '';}
	   if(typeof(vars.vars)=='undefined'){vars.vars = '{}';}
      if(typeof(vars.vars.site_id)=='undefined'){vars.vars.site_id = vars.site;}
      if(typeof(vars.vars.channel_id)=='undefined'){vars.vars.channel_id = vars.channel;}
	   pop_url = 'http://delivery.trafficforce.com/show_std.php?id_site='+vars.site+'&id_channel='+vars.channel+'&id_user='+vars.user+'&ident='+Math.round(Math.random() * 10000)+'&ref='+escape(document.URL)+'&sr='+escape(document.referrer)+'&m1='+escape(vars.misc1)+'&m2='+escape(vars.misc2)+'&m3='+escape(vars.misc3)+'&vars=';
	   if (!this.JSON) {
	    pop_url += escape(JSONSPPC.stringify(vars.vars))
	   } else {
	    pop_url += escape(JSON.stringify(vars.vars))
	   }
		var ok = true;
		//var elem = e.target;
		if (pop_url == undefined || alreadyClicked > 0) {
			return;
		}

		var count = parseInt(getCookie("pu_count"));
		count = count? (count + 1) : 1;
		setCookie("pu_count", count);
		if ((pop_frequency == 0 && count > 1) || (pop_frequency > 0 && count % pop_frequency != 0)) {
			return;
		}
		alreadyClicked = 1;
		var screenTop = (window.screenTop != undefined) ? window.screenTop : window.screenY;
		var screenLeft = (window.screenLeft != undefined) ? window.screenLeft : window.screenX;
		var screenW = 0;
		var screenH = 0;
		if (typeof window.innerWidth == "number") {
			screenW = window.innerWidth;
			screenH = window.innerHeight;
		} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			screenW = document.documentElement.clientWidth;
			screenH = document.documentElement.clientHeight;
		} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
			screenW = document.body.clientWidth;
			screenH = document.body.clientHeight;
		}
		var pxLeft = (screenLeft + (screenW / 2) - (pop_width / 2));
		var pxTop = (screenTop + (screenH / 2) - (pop_height / 2));
		var win = window.open(pop_url, "pornpop", "width=" + pop_width + ", height=" + pop_height + ", scrollbars=yes,resizable=yes,toolbar=no, menubar=no,status=no,location=no,left=" + pxLeft + ",top=" + pxTop);
		win.blur();
		window.focus();

		if (typeof win.window.mozPaintCount != "undefined") {
			win.window.open("about:blank").close();
			window.focus();
		}
	}
	var waiting = function () {
		if (document.body == null) {
			setTimeout(waiting, 50);
		} else if (window.chrome) {
			document.addEventListener("mousedown", pu);
			document.addEventListener("click", function (e) {
				if (alreadyClicked == 1) {
					alreadyClicked = 2;
					window.open("about:blank").close();
				}
			});
		} else {
			document.addEventListener("click", pu);
		}
	}
	waiting();
}