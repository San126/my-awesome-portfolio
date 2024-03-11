

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.FM2TiJqe.js","_app/immutable/chunks/scheduler.COG8yuid.js","_app/immutable/chunks/index.CCnSiE17.js","_app/immutable/chunks/app.DY9nnwlW.js"];
export const stylesheets = ["_app/immutable/assets/app.Cmc0jISo.css"];
export const fonts = [];
