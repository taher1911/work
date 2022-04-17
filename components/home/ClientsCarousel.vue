<template>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div
                v-for="client in clients"
                :key="client.id"
                class="swiper-slide"
                :class="`slide--${i}`"
            >
                <div class="slider-content">
                    <div
                        class="client__info px-5"
                        v-bind:class="{ dark: dark, light: !dark }"
                    >
                        <div class="flex align-items-center">
                            <div class="img mr-2 mb-1">
                                <img
                                    :src="client.img"
                                    :alt="client.name"
                                    class="image"
                                />
                            </div>
                            <div class="name">
                                <h4
                                    class="text-700 xl:text-xl text-base mb-1 font-medium"
                                >
                                    {{ client.name }}
                                </h4>
                                <p class="text-700 card-p">
                                    {{ client.job }}
                                </p>
                            </div>
                        </div>
                        <p class="text-500 card-p">{{ client.comment }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- If pagination is needed -->
        <div class="swiper-pagination"></div>

        <!-- If navigation buttons are needed -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import { mapState } from "vuex";
import "swiper/swiper-bundle.min.css";
export default {
    props: ["clients"],
    computed: {
        ...mapState(["dark"]),
    },
    mounted() {
        // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
        // previously it was before export default. Moved here for performance issues. Move back in case of problems.
        // add or remove unused modules
        Swiper.use([Navigation, Pagination, Autoplay]);

        // init Swiper:
        /* eslint-disable no-unused-vars */
        const swiper = new Swiper(".swiper", {
            // Optional parameters
            // @see https://swiperjs.com/swiper-api#parameters
            direction: "horizontal",
            loop: true,
            slidesPerView: 1,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
            },
            spaceBetween: 22,
            // remove unused modules if needed
            modules: [Navigation, Pagination, Autoplay],
            // Pagination if needed
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
            // Autoplay if needed
            autoplay: {
                delay: 5000,
            },
            // Navigation arrows if needed
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // Configure other options. Not tested
        });
    },
};
</script>

<style lang="scss" scoped>
.swiper {
    height: 300px;
    overflow: hidden;
    position: relative;
    width: 90%;
    padding: 0 13px;
    margin-top: -25px;
    @media screen and(max-width:450px) {
        width: 100%;
    }
}
.swiper-slide {
    align-items: center;
    display: flex;
    justify-content: center;
}
.img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    @media screen and(max-width:500px) {
        width: 60px;
        height: 60px;
    }
}
.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.client__info {
    padding: 20px 12px;
    border-radius: 10px;
    transition: all 0.3s;
    h3 {
        @media screen and(max-width:450px) {
            font-size: 0.9rem;
        }
    }
}
.swiper-pagination {
    bottom: 0 !important;
}
</style>
