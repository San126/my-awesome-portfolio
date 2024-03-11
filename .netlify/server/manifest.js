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
		client: {"start":"_app/immutable/entry/start.NUmcdOXa.js","app":"_app/immutable/entry/app.BBiJulo5.js","imports":["_app/immutable/entry/start.NUmcdOXa.js","_app/immutable/chunks/entry.1TRxUfuM.js","_app/immutable/chunks/scheduler.COG8yuid.js","_app/immutable/entry/app.BBiJulo5.js","_app/immutable/chunks/scheduler.COG8yuid.js","_app/immutable/chunks/index.CCnSiE17.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
