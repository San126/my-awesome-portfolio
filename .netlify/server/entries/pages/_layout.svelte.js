import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
/* empty css               */
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [{ name: "Projects", link: "#projects" }, { name: "About me", link: "#about" }];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid" + (y > 0 ? "py-4 bg-sky-950 border-sky-950" : "py-6 bg-sky border-transparent"),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-j1jq59"><b class="font-bold poppins">Sandra</b> R Nair</h1> <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-sky-400/20"><p>${escape(tab.name)}</p> </a>`;
  })}</div> <a href="#connect" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-37nbpe"><div class="absolute top-0 right-full w-full h-full bg-yellow-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch</h4></a></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="connect" class="py-20 sm:py-32 bg-black border-t border-solid border-cyan-950 flex flex-col gap-4 sm:gap-8 justify-center items-center items-center" data-svelte-h="svelte-1x2q5g9"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b><span class="text-teal-300"><a class="text-teal-300" target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGxSHdSNzvLwnRgcPPjsrXFDFTm?compose=CllgCJvpbZKZVZvBBRXlTVmrhKfBRSgknsrkZZdrdKHgffxTfhqkXcJnPpbTwRQLCgwrxqhkRhg">sandrarnair@gmail.com</a></span></p> <p><b class="pr-2">GitHub</b> <a class="text-teal-300" target="_blank" href="https://github.com/San126">San126<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a class="text-teal-300" target="_blank" href="https://www.linkedin.com/in/sandra-nair">sandra-nair<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2"><i class="fa-solid fa-phone"></i></b> <span class="text-teal-300 pr-2">9605866769</span></p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full aspect-square bg-sky-900 text-sky-400/20 px-5 sm:px-4 hover:bg-sky-950 cursor-pointer" data-svelte-h="svelte-1c002fw"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
