const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cg6uDSB-.js","app":"_app/immutable/entry/app.x3eE4r1u.js","imports":["_app/immutable/entry/start.Cg6uDSB-.js","_app/immutable/chunks/entry.BXpd0qG0.js","_app/immutable/chunks/runtime.Dn8xTbO9.js","_app/immutable/chunks/index.COlryZgH.js","_app/immutable/entry/app.x3eE4r1u.js","_app/immutable/chunks/proxy.pQZbg0-7.js","_app/immutable/chunks/runtime.Dn8xTbO9.js","_app/immutable/chunks/disclose-version.Ci-9qIsi.js","_app/immutable/chunks/index-client.BEFRGo_h.js","_app/immutable/chunks/this.Dc4XhWTl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CP12kKHN.js')),
			__memo(() => import('./chunks/1-AKHQqxvC.js')),
			__memo(() => import('./chunks/2-6jzWKvI3.js')),
			__memo(() => import('./chunks/3-DeVBo9Qg.js')),
			__memo(() => import('./chunks/4-D28hY5q_.js')),
			__memo(() => import('./chunks/5-Xjix3Z9a.js')),
			__memo(() => import('./chunks/6-BavoGKOT.js')),
			__memo(() => import('./chunks/7-LP6ZAWf0.js')),
			__memo(() => import('./chunks/8-CKzYZpx-.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/orders",
				pattern: /^\/admin\/orders\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/products/edit",
				pattern: /^\/admin\/products\/edit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/settings",
				pattern: /^\/admin\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
