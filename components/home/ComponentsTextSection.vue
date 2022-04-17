<template>
    <div
        class="text text-center sm:mb-6 mb-4"
        data-aos="fade-up"
        data-aos-duration="1200"
    >
        <span
            class="text-primary font-normal mb-3 xl:text-3xl md:text-2xl sm:text-1xl"
            >{{ name }}</span
        >
        <h3
            class="text-700 xl:text-5xl md:text-3xl sm:text-2xl text-h3 mb-5 my-2 font-bold"
        >
            {{ title }}
        </h3>
        <p class="text-600 xl:text-xl md:text-lg card-p">
            {{ description }}
        </p>
    </div>
</template>
<script>
export default {
    props: ["name", "title", "description"],
};
</script>
