<template>
    <div class="footer px-4 py-4 lg:px-8">
        <div class="container grid">
            <div class="social">
                <div class="text-center">
                    <div class="mb-3 d-flex">
                        <a
                            v-for="link in links"
                            :key="link.text"
                            :href="link.url"
                            class="text-primary mx-3"
                            target="_blank"
                        >
                            <i class="pi lg:text-3xl" :class="link.icon"></i>
                        </a>
                    </div>

                    <div class="text-700 text-1xl">
                        {{ new Date().getFullYear() }} —
                        <strong>
                            <nuxt-link to="/" class="text-primary">
                                topics
                            </nuxt-link>
                        </strong>
                    </div>
                </div>
            </div>
            <div
                class="links flex justify-content-center flex-column md:flex-row"
            >
                <ul>
                    <li>
                        <NuxtLink
                            to="/"
                            class="text-700 xl:text-xl md:text-medium hover:text-primary transition"
                            >Home</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/topic"
                            class="text-700 xl:text-xl md:text-medium hover:text-primary transition"
                            >Topic</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/db"
                            class="text-700 xl:text-xl md:text-medium hover:text-primary transition"
                            >Database</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/glossary"
                            class="text-700 xl:text-xl md:text-medium hover:text-primary transition"
                            >Glossary</NuxtLink
                        >
                    </li>
                </ul>
                <ul>
                    <li>
                        <NuxtLink
                            to="/tutorials"
                            class="text-700 xl:text-xl md:text-medium hover:text-primary transition"
                            >Tutorials</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/csv"
                            class="text-700 xl:text-xl md:text-medium hover:text-primary transition"
                            >Csv</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/filter"
                            class="text-700 xl:text-xl md:text-medium hover:text-primary transition"
                            >Filter</NuxtLink
                        >
                    </li>
                </ul>
            </div>
            <div class="contact text-center">
                <NuxtLink
                    to="/"
                    class="font-normal inline-block no-underline xl:text-2xl md:text-1xl border-3 border-solid border-primary text-primary px-4 py-2 hover:text-800 hover:bg-primary transition-all transition-duration-300 getStarted"
                    >GET STARTED</NuxtLink
                >
                <p class="text-700">&copy;Logo, All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                text: "Github",
                url: "https://github.com/",
                icon: "pi-github",
            },
            {
                text: "Twitter",
                url: "https://twitter.com/",
                icon: "pi-twitter",
            },
            {
                text: "Linkedin",
                url: "https://linkedin.com",
                icon: "pi-linkedin",
            },
            {
                text: "Instagram",
                url: "https://instagram.com/",
                icon: "pi-instagram",
            },
        ],
    }),
};
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    padding: 30px 0;
    margin-top: 30px;
    border-top: 1px solid #2b2b2b;

    .container {
        width: 95%;
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: 1.5fr 2fr 1.5fr;
        align-items: center;
        @media screen and(max-width:750px) {
            grid-template-columns: 1.5fr;
            gap: 2em;
        }
    }
    .getStarted {
        border-radius: 10px;
        line-height: 1.3;
    }
    ul {
        li {
            margin-bottom: 5px;
        }
        @media screen and(max-width:740px) {
            text-align: center;
            padding: 0;
        }
    }
}
</style>
