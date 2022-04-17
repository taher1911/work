<template>
    <div class="surface-card px-4 py-4 md:px-6 lg:px-8">
        <div class="card">
            <div class="card-container purple-container overflow-hidden">
                <div class="flex">
                    <div
                        class="flex-1 flex align-items-center justify-content-center bg-gray-800 font-bold text-white m-2 px-5 py-3 border-round"
                    >
                        <ul class="list-none">
                            <li
                                v-for="link in links"
                                :key="link.text"
                                class="text-primary mr-6 mb-2"
                                target="_blank"
                            >
                                <a :href="link.url" class="no-underline">
                                    {{ link.text }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="flex-1 flex align-items-center justify-content-center bg-gray-800 font-bold text-white m-2 px-5 py-3 border-round"
                    >
                        <ul class="list-none">
                            <li
                                v-for="link in links"
                                :key="link.text"
                                class="text-primary mr-6 mb-2"
                                target="_blank"
                            >
                                <a :href="link.url" class="no-underline">

                                    {{ link.text }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="flex-1 flex align-items-center justify-content-center bg-gray-800 font-bold text-white m-2 px-5 py-3 border-round"
                    >
                        <ul class="list-none">
                            <li
                                v-for="link in links"
                                :key="link.text"
                                class="text-primary mr-6 mb-2"
                                target="_blank"
                            >
                                <a :href="link.url" class="no-underline">
                                    <i
                                        class="pi lg:text-2xl sm:text-2xl mr-2"
                                        :class="link.icon"
                                    ></i>
                                    {{ link.text }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
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
