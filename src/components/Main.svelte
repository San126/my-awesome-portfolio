<script>
    import Step from "./Step.svelte";
    import "../../src/app.css";

    let steps = [
        {
            name: "Survey Form",
            icon: "fa-solid fa-users",
            href: "https://spontaneous-bienenstitch-4e2994.netlify.app",
        },
        {
            name: "Documetation Site",
            icon: "fa-solid fa-file-text",
            href: "https://earnest-quokka-e9fb04.netlify.app/",
        },
        {
            name: "Product Launch",
            icon: "fa-solid fa-cart-shopping",
            href: "https://peppy-vacherin-a5f968.netlify.app/",
        },
        {
            name: "Typography",
            icon: "fa-solid fa-sort-alpha-asc",
            href: "https://effortless-marigold-62c86d.netlify.app/",
        },
        {
            name: "Palindrome Check",
            icon: "fa-solid fa-check",
            href: "https://bejewelled-crepe-a269cf.netlify.app/",
        },
    ];

    let benefits = [
        {
            name: "Self motivated",
            description:
                "I'm the kind of person who doesn't need a push – I'm self-motivated and always eager to tackle challenges head-on.",
        },
        {
            name: "Enjoy being a leader",
            description:
                "When it comes to leadership, I like to lead by example and bring out the best in my team. I've got a knack for rallying everyone towards success.",
        },
        {
            name: "Smart worker too",
            description:
                "I'm not just a hard worker; I'm a smart worker too. I believe in working efficiently and making every effort count.",
        },
        {
            name: "A dreamer",
            description:
                "I'm not afraid to dream big. Being a dreamer keeps me motivated and sparks my creativity in finding unique solutions to problems.",
        },
        {
            name: "Positivity is my secret weapon",
            description:
                "Positivity is my secret weapon. I approach challenges with an optimistic mindset, knowing that a positive outlook can turn any situation around.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm white-space-:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2
                class="font-semibold text-4xl sm white-space-:text-5xl md:text-6xl"
            >
                Hi! I'm <span
                    class="poppins bg-transparent text-teal-300 [text-shadow:-6px_7px_8px_teal] shadow-teal-400"
                    >Sandra</span
                >
                R Nair<br />
                Full Stack
                <span
                    class="poppins text-teal-300 [text-shadow:-6px_5px_8px_teal] shadow-teal-200"
                    >Developer</span
                >
            </h2>
            <p class="text-base sm white-space-:text-lg md:text-xl">
                My <span
                    class="bg-transparent text-teal-300 [text-shadow:-6px_7px_2px_teal] shadow-teal-400"
                    >favorite tech</span
                > includes JavaScript (React.js, or SvelteKit), TailwindCSS, Node.js
                + Express.js & PostgreSQL or MongoDB
            </p>
            <a
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm white-space-:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-ful bg-white text-slate-950 cursor-pointer"
                href="#connect"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-yellow-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                ></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/profile.png"}
                alt="Profile image"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 classs="text-lg sm white-space-:text-xl md:text-2xl">
                a few of my tech endeavors
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span
                    class="poppins text-teal-300 [text-shadow:-6px_6px_2px_teal] shadow-teal-400"
                    >see</span
                > my work?
            </h3>
        </div>
        <!-- <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-sky-700 duration-200"
        >
            <i class="fa-regular fa-circle-play"></i>
            <p>Watch the video</p>
        </a> -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <img
                    class="project-image object-fill h-48 w-96 m-auto"
                    src={"images/survey.png"}
                    alt="project"
                />
                <p>
                    Survey Form Design- developed with <strong
                        class="text-teal-300">HTML and CSS!</strong
                    >
                </p>
            </Step>
            <Step step={steps[1]}>
                <img
                    class="project-image object-fill h-48 w-96 m-auto"
                    src={"images/cssdoc.png"}
                    alt="project"
                />
                <p>
                    CSS Selectors - documetation site developed with <strong
                        class="text-teal-300">HTML and CSS!</strong
                    > with fixed nav.
                </p>
            </Step>
            <Step step={steps[2]}>
                <img
                    class="project-image object-fill h-48 w-96 m-auto"
                    src={"images/productlaunch.png"}
                    alt="project"
                />
                <p>
                    Product Launch Responsive Web Page (Front-End) is front page
                    design for an online shopping website developed with the
                    help of <strong class="text-teal-300"
                        >JavaScript, HTML and CSS!</strong
                    >
                </p>
            </Step>
            <Step step={steps[3]}>
                <img
                    class="project-image object-fill h-48 w-96 m-auto"
                    src={"images/typography.png"}
                    alt="project"
                />
                <p>
                    To test my typography skills- developed with <strong class="text-teal-300"
                        >JavaScript, HTML and CSS!</strong
                    >
                </p>
            </Step>
            <Step step={steps[4]}>
                <img
                    class="project-image object-fill h-48 w-96 m-auto"
                    src={"images/palindromecheck.png"}
                    alt="project"
                />
                <p>
                    Palindrome Check app has developed with the help of <strong
                        class="text-teal-300"
                        >HTML and @media CSS at-rule</strong
                    >
                </p>
            </Step>
        </div>
        <h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl m-auto">
            ...in progress
        </h2>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-yellow-400 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-yellow-400 py-4"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span
                    class="poppins text-teal-300 [text-shadow:-6px_6px_3px_teal] shadow-teal-400"
                    >about</span
                > me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am ...
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto mx-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
            The <span
                class="text-teal-300 [text-shadow:-6px_6px_2px_teal] shadow-teal-400 poppins"
                >Complete</span
            > Package
        </h5>
        <div
            class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
        >
            <table class="bg-white text-slate-700 rounded text-center">
                <thead class="corder-b border-solid border-slate-200">
                    <tr class="">
                        <th />
                        <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                        <th
                            class="whitespace-nowrap bg-yellow-400 text-white p-4 px-8"
                            >Me</th
                        >
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Dedication
                        </td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Critical Thinking
                        </td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Versatile Developer
                        </td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Programming Ability
                        </td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Tenacious
                        </td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td
                        >
                        <td><i class="fa-solid fa-check text-slate-500"></i></td
                        >
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>
        <!-- <p class="mx-auto">So why not invest?</p> -->
    </section>
</main>
