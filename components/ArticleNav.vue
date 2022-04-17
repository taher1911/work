<template>
    <div>
        <div class="flex justify-content-between py-2">
            <NuxtLink
                v-if="previous != 'false'"
                :to="previous"
                class="text-3xl lg:text-4xl text-primary font-bold lg:px-6 px-2 no-underline"
                >Previous</NuxtLink
            >
            <div v-if="previous == 'false'"></div>
            <NuxtLink
                v-if="next != 'false'"
                :to="next"
                class="text-3xl lg:text-4xl text-primary font-bold lg:px-6 px-2 no-underline"
                >Next</NuxtLink
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        next: {
            type: String,
            required: false,
        },
        previous: {
            type: String,
            required: false,
        },
    },
};
</script>
