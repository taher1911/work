<template>
    <span>{{ readingTime }} min read</span>
</template>

<script>
export default {
    // TODO: move to global state, only read file content once
    // utilise https://content.nuxtjs.org/advanced/#contentfilebeforeinsert
    name: "readingTime",
    props: ["content"],
    computed: {
        readingTime() {
            let minutes = 0;
            const contentString = JSON.stringify(this.content);
            const words = contentString.split(" ").length;
            const wordsPerMinute = 200;
            minutes = Math.ceil(words / wordsPerMinute);
            return minutes;
        },
    },
};
</script>
