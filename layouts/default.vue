<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    async asyncData({ params, $content, error }) {
        try {
            const post = await $content("blog", params.slug).fetch();
            return { post };
        } catch (e) {
            error({ statusCode: 404, message: "Post not found" });
        }
    },
};
</script>
