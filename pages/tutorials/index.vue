<template>
    <div>
        <div
            class="grid grid-nogutter surface-section text-800 lg:pl-8 sm:pl-1"
        >
            <div
                class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
            >
                <Sidebar :sideLinks="links" />
            </div>
            <div class="col-12 md:col-6 overflow-hidden hidden md:inline-flex">
                <img
                    src="@/assets/images/image4.jpg"
                    alt="Image"
                    class="md:ml-auto block md:h-full"
                    style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
                />
            </div>
        </div>
    </div>
</template>

<script>
// TODO: store
// - move to store module and crate global state for links
// https://content.nuxtjs.org/
let link = [];
const path = "tutorials";

export default {
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
