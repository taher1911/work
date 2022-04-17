<template>
    <div class="container mx-auto mt-7">
        <div class="section1 grid mb-8 align-items-center">
            <div
                class="m-img col lg:mr-4"
                data-aos="zoom-in"
                data-aos-duration="1200"
            >
                <img
                    src="@/assets/images/image2.jpg"
                    alt="image"
                    class="w-full h-full m-img"
                />
            </div>
            <div class="text col" data-aos="fade-up" data-aos-duration="1200">
                <span class="text-700 xl:text-2xl md:text-xl sm:text-sm mb-5"
                    >Creative Solutions</span
                >
                <span class="m-line block bg-primary mt-2 mb-4"></span>
                <h3
                    class="text-700 xl:text-3xl md:text-xl sm:text-sm text-lg mb-2 font-bold"
                >
                    We Are The Trusted Experts We Keep Things Simple
                </h3>
                <p class="text-600 mb-2 middle-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at dictum risus, non suscipit arcu. Quisque aliquam
                    posuere tortor iscing elit. Duis at dictum risus, non
                    suscipit arcu.
                </p>
                <p class="text-600 middle-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!
                </p>
                <NuxtLink
                    to="/"
                    class="font-normal know-more inline-block no-underline xl:text-xl md:text-1xl border-2 border-solid border-primary text-primary px-4 py-2 hover:text-800 hover:bg-primary transition-all transition-duration-300 getStarted mt-4"
                    >Know More</NuxtLink
                >
            </div>
        </div>

        <div class="section2 grid align-items-center">
            <div class="text col" data-aos="fade-up" data-aos-duration="1200">
                <span class="text-700 xl:text-2xl md:text-xl sm:text-sm mb-5"
                    >Cloud & Cyber Security</span
                >
                <span class="m-line block bg-primary mt-2 mb-4"></span>
                <h3
                    class="text-700 xl:text-3xl md:text-xl sm:text-sm text-lg mb-2 font-bold"
                >
                    Creative Cyber Security & Cloud Computing Solutions
                </h3>
                <p class="text-600 mb-2 middle-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at dictum risus, non suscipit arcu. Quisque aliquam
                    posuere tortor iscing elit. Duis at dictum risus, non
                    suscipit arcu.
                </p>
                <p class="text-600 middle-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!
                </p>
                <NuxtLink
                    to="/"
                    class="font-normal know-more inline-block no-underline xl:text-xl md:text-1xl border-2 border-solid border-primary text-primary px-4 py-2 hover:text-800 hover:bg-primary transition-all transition-duration-300 getStarted mt-4"
                    >Know More</NuxtLink
                >
            </div>
            <div
                class="m-img col lg:ml-4"
                data-aos="zoom-in"
                data-aos-duration="1200"
            >
                <img
                    src="@/assets/images/image3.jpg"
                    alt="image"
                    class="w-full h-full m-img"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {},
};
</script>
