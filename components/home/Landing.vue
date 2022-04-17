<template>
    <div class="landing h-screen flex align-items-center">
        <span class="shadow"></span>
        <div
            class="container mx-auto"
            data-aos="fade-right"
            data-aos-duration="1200"
        >
            <span class="block mb-1 text-700 md:text-xl sm:text-sm"
                >Creative Cyber Security Solutions</span
            >
            <h2
                class="text-primary font-bold mb-3 xl:text-7xl lg:text-6xl md:text-5xl"
            >
                We Are Much More A<br />
                consultant business website.
            </h2>
            <p class="text-700 md:text-xl sm:text-sm mb-5 line-height-3">
                Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.<br />
                Corporis Eius Molestias Quaerat Vborder-solidelit Magnam Et Ab
                Quas Dolors!
            </p>
            <NuxtLink
                to="/"
                class="font-normal inline-block no-underline xl:text-xl border-3 border-solid border-primary text-primary px-4 py-2 hover:text-800 hover:bg-primary transition-all transition-duration-300 getStarted"
                >GET STARTED</NuxtLink
            >
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.landing {
    background: url("@/assets/images/hero-bg.png") center center/cover;
    position: relative;
}
</style>
