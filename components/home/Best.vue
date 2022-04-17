<template>
    <div class="container-full w-full">
        <h3 class="xl:text-2xl md:text-xl sm:text-sm mb-5">
            BEST PLACE TO PROTECT<br />
            YOUR COMPANY
        </h3>
    </div>
</template>
<script>
export default {
    setup() {},
};
</script>
<style lang="scss" scoped>
.container-full {
    min-height: 400px;
    background: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
        ),
        url("@/assets/images/best.jpg") center center/cover;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ddd;
    margin-top: 70px;
    @media screen and(max-width:450px) {
        margin-top: 3rem !important;
        min-height: 300px;
        font-size: 10px;
    }
}
</style>
