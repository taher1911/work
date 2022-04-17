<template>
    <div>
        <div class="grid grid-nogutter surface-section text-800 pt-4">
            <div
                class="flex justify-content-center flex-wrap card-container col-12 p-2 md:p-6 text-center md:text-left align-items-center"
            >
                <IndexCards :links="links" />
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "primevue/menu";

// TODO: store
// - move to store module and crate global state for links
// https://content.nuxtjs.org/
let link = [];
const path = "topic";

export default {
    components: {
        Menu,
    },
    // Page status: publish, future, draft, pending, private, trash
    async asyncData({ $content, params }) {
        const articles = await $content(path, params.id)
            .where({ status: { $in: ["publish", "draft"] } })
            .fetch();
        articles.forEach((e) =>
            link.push({
                label: e.title,
                url: `/${path}/${e.slug}`,
                index: link.length,
            })
        );
    },
    data: () => ({
        links: link,
    }),
};
</script>
