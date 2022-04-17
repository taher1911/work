export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",
    components: true,

    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "flex",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/@ajusa/lit@1.0.0/dist/lit.css",
            },
            {
                rel: "stylesheet",
                id: "theme-link",
                href: "/css/dark.css",
            },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "primevue/resources/primevue.min.css",
        "primeicons/primeicons.css",
        "primeflex/primeflex.css",
        "aos/dist/aos.css",
        // "@/assets/variables.css",
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: ["@nuxtjs/fontawesome", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            Roboto: [300, 400, 500, 700, 900],
        },
    },
    fontawesome: {
        icons: {
            solid: true,
            brands: true,
        },
    },
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ["@nuxt/content"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        followSymlinks: true,
        vendor: ["aos"],
    },
    plugins: [{ src: "~/plugins/aos", ssr: false }],
    configureWebpack: {
        devtool: "source-map",
    },
    // Prism theme: here https://github.com/PrismJS/prism-themes#available-themes
    content: {
        markdown: {
            prism: {
                theme: "prism-themes/themes/prism-dracula.css",
            },
        },
    },
};
