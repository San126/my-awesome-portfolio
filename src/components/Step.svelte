<script>
  export let step;
</script>

<a
  id="stepElement"
  href={step.href}
  target="_blank"
  class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-amber-400 text-center group cursor-pointer hover:border-solid-amber-400/20 hover:shadow-amber-400 shadow-xl duration-500"
>
  <div
    class="bg-sky-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
  >
    <i class={step.icon} />
  </div>
  <h3 class="font-medium text-xl sm:text-2xl md:text-3xl ">{step.name}</h3>
  <slot />
  <div class="flex-1 flex justiify-between gap-4 items-center">
    <div
      class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full hover:border rounded-lg p-1 border-solid border-yellow-400 hover:text-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
    >
      <p class="relative z-4">Go to &rarr;</p>
    </div>
  </div>
</a>
