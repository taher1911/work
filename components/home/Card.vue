<template>
    <div
        class="card"
        data-aos="fade-up"
        data-aos-duration="1200"
        v-bind:class="{ dark: dark, light: !dark }"
    >
        <span class="block text-center text-5xl text-primary md:my-3">
            <i
                class="pi lg:text-7xl md:text-5xl text-4xl icon"
                :class="cardData.icon"
            ></i>
        </span>
        <h3
            class="text-700 xl:text-xl md:text-sm sm:text-sm my-2 card-title font-bold"
        >
            {{ cardData.title }}
        </h3>
        <p class="text-600 card-description">
            {{ cardData.description }}
        </p>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props: ["cardData"],
    computed: {
        ...mapState(["dark"]),
    },
};
</script>
<style lang="scss" scoped>
.card {
    &:hover {
        .block {
            transition: all 0.3s ease-in-out;
            text-shadow: 1px 1px 5px;
        }
    }
}
</style>
