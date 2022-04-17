<template>
    <div class="surface-card">
        <PageHeading :heading="heading" />
        <div class="surface-card lg:px-8 sm:px-1">
            <Card>
                <template #header>
                    <img
                        :src="require(`@/assets/images/${article.img}`)"
                        :alt="article.alt"
                        class="text-xs"
                    />
                </template>
                <template #title>
                    <h1 class="text-3xl md:text-4xl lg:text-6xl">
                        {{ article.title }}
                    </h1>
                </template>

                <template #subtitle class="text-xs">
                    <Avatar
                        shape="circle"
                        :image="
                            require(`@/assets/images/${
                                article.author.image || 'default.png'
                            }`)
                        "
                    />
                    <span
                        class="lg:text-subtitle-2 text-sm md:text-sm lg:text-lg px-2"
                        >{{ article.author.name }}</span
                    >
                    <span
                        class="lg:text-subtitle-2 text-sm md:text-sm lg:text-lg"
                        >·</span
                    >
                    <span
                        class="lg:text-subtitle-2 text-sm md:text-sm lg:text-lg px-2"
                        >{{ formatDate(article.updatedAt) }}</span
                    ><span
                        class="lg:text-subtitle-2 text-sm md:text-sm lg:text-lg"
                        >·</span
                    >
                    <span
                        class="lg:text-subtitle-2 text-sm md:text-sm lg:text-lg pl-1"
                        >{{ readingTime(article) }} min read</span
                    >
                </template>
                <template #content>
                    <nuxt-content
                        class="text-sm md:text-sm lg:text-lg"
                        :document="article"
                    />
                </template>
            </Card>
            <ArticleNav :next="next" :previous="previous" />
        </div>
    </div>
</template>

<script>
import Avatar from "primevue/avatar";
import Card from "primevue/card";

const path = "tutorials";

export default {
    components: {
        Avatar,
        Card,
    },
    data: () => ({
        heading: {
            title:
                $nuxt.$route.params.id.charAt(0).toUpperCase() +
                $nuxt.$route.params.id.slice(1).replace("-", " "),
            section: "Tutorials",
            sectionUrl: "/" + path,
            subSection:
                $nuxt.$route.params.id.charAt(0).toUpperCase() +
                $nuxt.$route.params.id.slice(1).replace("-", " "),
            status: [],
        },
    }),
    // Page status: publish, future, draft, pending, private, trash
    async asyncData({ $content, params }) {
        var link = [];
        var next = "false";
        var previous = "false";
        const article = await $content("tutorials", params.id)
            .where({ status: { $in: ["publish", "draft"] } })
            .fetch();
        const articles = await $content("tutorials")
            .where({ status: { $in: ["publish", "draft"] } })
            .fetch();
        articles.forEach((e) =>
            link.push({
                label: e.slug.replace("-", " "),
                url: `/${path}/${e.slug}`,
                index: link.length,
            })
        );
        link.forEach((item) => {
            if (
                item.label.toLowerCase() ===
                article.slug.toLowerCase().replace("-", " ")
            ) {
                next =
                    item.index < articles.length - 1
                        ? articles[item.index + 1].slug
                        : "false";
                previous =
                    item.index > 0 ? articles[item.index - 1].slug : "false";
            }
        });
        return { article, articles, next, previous };
    },
    async created() {
        this.$nextTick(function () {
            let status = [
                {
                    icon: "pi-user",
                    text: this.article.author.name,
                },
                {
                    icon: "pi-calendar",
                    text: this.formatDate(this.article.updatedAt),
                },
                {
                    icon: "pi-clock",
                    text: this.readingTime(this.article) + " min read",
                },
            ];
            this.heading.status = status;
        });
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
        readingTime(content) {
            let minutes = 0;
            const contentString = JSON.stringify(content);
            const words = contentString.split(" ").length;
            const wordsPerMinute = 200;
            minutes = Math.ceil(words / wordsPerMinute);
            return minutes;
        },
    },
};
</script>
<style>
h2 {
    margin-top: 1.2rem;
    margin-bottom: 0.6rem;
}
p {
    line-height: 1.4rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
}
img {
    width: 100%;
    border-radius: 10px;
}

.line-numbers {
    border-radius: 10px;
}
a:-webkit-any-link {
    color: #64B5F6;
    cursor: pointer;
    text-decoration: underline;
}
</style>
