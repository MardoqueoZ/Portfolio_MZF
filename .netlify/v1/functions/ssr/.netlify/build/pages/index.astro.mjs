/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as createAstro, d as renderComponent, a as addAttribute, e as renderHead } from '../chunks/astro/server_DlDp4hkC.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$CV = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CV;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M12 17v-6"></path><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path></svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/CV.astro", void 0);

const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#fff"></path></svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/LinkedIn.astro", void 0);

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 250" width="50" height="50" fill="#fff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/GitHub.astro", void 0);

const $$Gmail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" width="50" height="50"> <g fill="none" fill-rule="evenodd"> <g fill-rule="nonzero"> <path fill="#fff" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path> <path fill="#fff" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path> <path fill="#fff" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path> </g> <path fill="#fff" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path> <path fill="#fff" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path> </g> </svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/Gmail.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-6 "> <ul class=" flex flex-row gap-12 justify-center"> <li class="transform transition-transform duration-300 hover:scale-105" id="contact"> <a href="https://www.linkedin.com/in/mardoqueo-florent%C3%ADn-5926191a7/" class=""> ${renderComponent($$result, "LinkedInIcon", $$LinkedIn, { "class": "w-11" })} <p class="mt-2">LinkedIn</p> </a> </li> <li class="transform transition-transform duration-300 hover:scale-105"> <a href="https://github.com/MardoqueoZ"> ${renderComponent($$result, "GitHubIcon", $$GitHub, { "class": "w-11" })} <p class="mt-2 text-center">GitHub</p> </a> </li> <li class="transform transition-transform duration-300 hover:scale-105"> <a href="mailto:mardoqueo.zotelo@gmail.com" class=""> ${renderComponent($$result, "GmailIcon", $$Gmail, { "class": "w-11" })} <p class="mt-2">Gmail</p> </a> </li> </ul> </div>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/Contact.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="m-5"> <h1 class="text-4xl md:text-7xl font-bold text-red-600 py-7">Hola, soy Mardoqueo Zotelo Florentín</h1> <h2 class="text-3xl md:text-6xl font-serif py-1 md:py-6">Licenciado en Análisis de Sistemas Informáticos</h2> <div class="flex space-x-4 items-center"> <span class="bg-green-100 text-green-500 font-medium me-2 px-2.5 py-0.5 rounded-2xl dark:bg-green-900 dark:text-green-300 text-2xl p-8 animate-pulse">Disponible para Trabajar</span> <a href="href=" MardoqueoZOtelo_CV.pdf" download="MardoqueoZotelo_CV.pdf" " class="text-white text-center animate-pulse hover:animate-none hover:transform transition-transform duration-300 hover:scale-105"> ${renderComponent($$result, "CvIcon", $$CV, { "class": "w-20 h-20" })} <p class="font-semibold">CV</p> <span class="sr-only"></span> </a> </div> <div class="block md:hidden"> ${renderComponent($$result, "Contact", $$Contact, {})} </div> </div> <div class="hidden md:block mt-5 w-[10em] md:w-[25em]"> <img id="avatar" src="/avatar.svg" alt="avatar"> <div class="text-center items-center"> ${renderComponent($$result, "Contact", $$Contact, {})} </div> </div>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/Hero.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed bg-black top-0 z-10 flex items-center center md:right-12 rounded-2xl mx-2  md:mx-4 px-4 mt-1 md:text-2xl" id="header"> <nav class="flex flex-row gap-5 h-12 p-2" id="menu"> <a href="/#inicio">Inicio</a> <a href="/#proyectos">Proyectos</a> <a href="/#tecnologias">Tecnologías</a> <a href="#">Sobre mí</a> </nav> </header>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/Header.astro", void 0);

const $$WebSite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/WebSite.astro", void 0);

const $$Astro$2 = createAstro();
const $$Js = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Js;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052"> <path fill="transparent" d="M0 0h1052v1052H0z"></path> <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/tech/js.astro", void 0);

const $$Astro$1 = createAstro();
const $$Css = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/tech/css.astro", void 0);

const $$Astro = createAstro();
const $$Html = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/icons/tech/html.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    HTML: {
      name: "HTML",
      class: "bg-red-300 text-center text-white text-sm md:text-xl  font-medium me-2 px-2.5 py-0.5 rounded-2xl dark:bg-red-400 dark:text-white",
      icon: $$Html
    },
    CSS: {
      name: "CSS",
      "class": "bg-blue-300 text-center text-white text-xl font-medium me-2 px-2.5 py-0.5 rounded-2xl dark:bg-blue-500 dark:text-white",
      icon: $$Css
    },
    JS: {
      name: "JavaScript",
      class: "bg-yellow-300 text-center text-white text-xl font-medium me-2 px-2.5 py-0.5 rounded-2xl dark:bg-yellow-500 dark:text-white",
      icon: $$Js
    }
  };
  let projects = [
    {
      title: "CALCULADORA BASAL",
      description: "Peque\xF1a interfaz que permite el c\xE1lculo de la Tasa metab\xF3lica Basal. Que es la cantidad m\xEDnima de energ\xEDa que necesita tu cuerpo para sobrevivir realizando las funciones b\xE1sicas, tales como respirar, parpadear, filtrar la sangre, regular la temperatura del cuerpo o sintetizar hormonas.",
      image: "/CalculadoraBasal.jpg",
      link1: "https://github.com/MardoqueoZ/Calculadora-Basal",
      link2: "https://mardoqueoz.github.io/Calculadora-Basal/",
      tags: [TAGS.JS, TAGS.CSS, TAGS.HTML]
    },
    {
      title: "WORDLE - CON API",
      description: "Wordle es un juego de adivinar palabras, que tiene un formato de crucigrama y con similitudes con otros juegos como el Mastermind. En \xE9l, tienes que adivinar una palabra en seis intentos, en los que no se te dan m\xE1s pistas que decirte qu\xE9 letras de las que has puesto est\xE1n dentro de la palabra.",
      image: "/wordle.jpg",
      link1: "https://github.com/MardoqueoZ/wordle_ppy",
      link2: "https://mardoqueoz.github.io/wordle_ppy/",
      tags: [TAGS.JS, TAGS.CSS, TAGS.HTML]
    }
  ];
  return renderTemplate`${projects.map((project) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row items-start bg-gray-900 p-6 rounded-2xl shadow-lg mb-3"><div class="max-w-sm rounded-2xl overflow-hidden"><img class="w-full hover:transform transition-transform duration-300 hover:scale-105"${addAttribute(project.image, "src")} alt="{project.title}"><div class="px-6 py-4 mx-5"><div class="flex justify-center space-x-4 gap-x-10"><div class="hover:transform transition-transform duration-300 hover:scale-105"><a${addAttribute(project.link1, "href")} title="GitHub" class="text-white">${renderComponent($$result, "GitHubIcon", $$GitHub, {})}</a><p class="text-gray-400 mt-1">GitHub</p></div><div class="hover:transform transition-transform duration-300 hover:scale-105"><a${addAttribute(project.link2, "href")} title="Web" class="text-white">${renderComponent($$result, "WebSiteIcon", $$WebSite, {})}</a><p class="text-gray-400 mt-1">Web</p></div></div></div></div><div class="md:ml-6 mt-4 md:mt-0 flex-1"><h2 class="text-2xl md:text-4xl py-4 text-white">${project.title}</h2><p class="text-xl text-gray-300 line-clamp-2 md:line-clamp-3 hover:line-clamp-none" id="desc">${project.description}</p><div class="mt-4"><ul class="flex flex-col md:flex-row gap-2 justify-start">${project.tags.map((tag) => renderTemplate`<li${addAttribute(tag.class, "class")}><i class="flex items-center justify-center space-x-2">${renderComponent($$result, "tag.icon", tag.icon, { "class": "w-5 h-5 md:w-6 md:h-6" })}<span class="ml-2">${tag.name}</span></i></li>`)}</ul></div></div></div>`)}`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/Card.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col px-2 text-center md:text-left mt-6 md:mt-15 m-5 gap-y-6"> <h1 class="text-4xl md:text-7xl font-bold text-red-600 py-7">Proyectos</h1> <div> ${renderComponent($$result, "Card", $$Card, {})} </div> </div>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/Projects.astro", void 0);

const $$Tech = createComponent(($$result, $$props, $$slots) => {
  let TECHS = [
    {
      title: "HTML5",
      src: "/tech/html5.svg",
      class: "max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 p-4 text-center transform transition-transform duration-300 hover:scale-105"
    },
    {
      title: "CSS",
      src: "/tech/css.svg",
      class: "max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 p-4 text-center transform transition-transform duration-300 hover:scale-105"
    },
    {
      title: "JavaScript",
      src: "/tech/javascript.svg",
      class: "max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 p-4 text-center transform transition-transform duration-300 hover:scale-105"
    },
    {
      title: "Tailwind CSS",
      src: "/tech/tailwindcss.svg",
      class: "max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 p-4 text-center transform transition-transform duration-300 hover:scale-105"
    },
    {
      title: "Python",
      src: "/tech/python.svg",
      class: "max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 p-4 text-center transform transition-transform duration-300 hover:scale-105"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col px-2 text-center md:text-left mt-6 md:mt-15 m-5 gap-y-6"> <h1 class="text-4xl md:text-7xl font-bold text-red-600 py-7">Tecnologías</h1> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> ${TECHS.map((tech) => renderTemplate`<div${addAttribute(tech.class, "class")}> <img${addAttribute(tech.src, "src")} alt="HTML5" class="w-16 h-16 mx-auto"> <div class="mt-4 text-white">${tech.title}</div> </div>`)} </div> </div>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/components/Tech.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Portafolios</title>${renderHead()}</head> <body> <div class="fixed top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} <div class="pl-4 pr-4 md:pl-24 md:pr-24" id="inicio"> <main> <section class="flex flex-col md:flex-row px-2 text-center md:text-left mt-8 md:mt-20"> ${renderComponent($$result, "Hero", $$Hero, {})} </section> <section id="proyectos"> ${renderComponent($$result, "Project", $$Projects, {})} </section> <section id="tecnologias"> ${renderComponent($$result, "Tech", $$Tech, {})} </section> </main> </div> </body></html>`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/pages/index.astro", void 0);

const $$file = "C:/Users/WINDOWS/Desktop/Portfolio_MZF/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
