export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","favicon.png","images/cssdoc.png","images/palindromecheck.png","images/productlaunch.png","images/profile.png","images/survey.png","images/typography.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.FbZe1Aa4.js","app":"_app/immutable/entry/app.Dq6uc0rR.js","imports":["_app/immutable/entry/start.FbZe1Aa4.js","_app/immutable/chunks/entry.B1kWl_9_.js","_app/immutable/chunks/scheduler.COG8yuid.js","_app/immutable/entry/app.Dq6uc0rR.js","_app/immutable/chunks/scheduler.COG8yuid.js","_app/immutable/chunks/index.CCnSiE17.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
