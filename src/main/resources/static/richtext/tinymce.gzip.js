! function () {
	function n(n, e) {
		function t() {
			o.parentNode.removeChild(o), o && (o.onreadystatechange = o.onload = o = null), e()
		}

		function i() {
			"undefined" != typeof console && console.log && console.log("Failed to load: " + n)
		}
		var o, a = document.getElementsByTagName("head")[0] || document.body;
		o = document.createElement("script"), o.type = "text/javascript", "onload" in o ? (o.onload = t, a.appendChild(o), o.src = n) : (o.onreadystatechange = function () {
			o.src && /loaded|complete/.test(o.readyState) && t()
		}, o.src = n, a.appendChild(o)), o.onerror = i
	}

	function e(n, e, t) {
		function i(n, e) {
			if (e) {
				for (var t = e.length - 1; t >= 0; t--) u[n + "_" + e[t]] ? e.splice(t, 1) : u[n + "_" + e[t]] = !0;
				if (e.length) return "&" + n + "s=" + e.join(",")
			}
			return ""
		}
		var o = "";
		//return o += i("plugin", e), o += i("theme", n), o += i("language", t), o && (u.core ? o += "&core=false" : u.core = !0, o = "https://html5-editor.net/tinymce/tinymce.gzip.php?js=true" + o), o
		return "http://localhost:8080/richtext";
	}

	function t(n) {
		if ("string" == typeof n) return n.split(/[, ]/);
		var e = [];
		if (n)
			for (var i = 0; i < n.length; i++) e = e.concat(t(n[i]));
		return e
	}

	function i() {
		var e = s.shift();
		if (e) n(e, i);
		else {
			for (var t = 0; t < l.length; t++) l[t]();
			l = [], c = !1
		}
	}

	function o(n) {
		var a = [],
			r = [],
			u = [];
		a.push(n.theme || "modern");
		for (var f = t(n.plugins), m = 0; m < f.length; m++) r.push(f[m]);
		n.language && u.push(n.language), s.push(e(a, r, u)), l.push(function () {
			/complete|interactive/.test(document.readyState) && (window.tinymce.dom.Event.domLoaded = !0), window.tinymce.init != o && (d = window.tinymce.init, window.tinymce.init = o), d.call(window.tinymce, n)
		}), c || (c = !0, i())
	}

	function a() {
		for (var n = document.getElementsByTagName("script"), e = 0; e < n.length; e++) {
			var t = n[e].src;
			if (-1 != t.indexOf("tinymce.gzip.js")) return t.substring(0, t.lastIndexOf("/"))
		}
	}
	var r, c, d, u = {},
		s = [],
		l = [];
	r = {
		init: o,
		baseURL: a(),
		suffix: ".min"
	}, window.tinyMCE_GZ = {
		init: function (n, o) {
			s.push(e(t(n.themes), t(n.plugins), t(n.languages))), l.push(function () {
				window.tinymce.dom.Event.domLoaded = 1, o()
			}), c || (c = !0, i())
		}
	}, window.tinymce = window.tinyMCE = r
}();