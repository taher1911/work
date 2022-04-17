<template>
    <div>
        <div class="grid grid-nogutter surface-section text-800 pt-4">
            <div
                class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
            >
                <section>
                    <span class="block text-6xl font-bold mb-1">404</span>
                    <div class="text-6xl text-primary font-bold mb-3">
                        Page Not Found
                    </div>
                    <p class="mt-0 mb-4 text-700 line-height-3">
                        The orbiter you are looking for is not here.
                    </p>

                    <Button
                        pButton
                        pRipple
                        label="Back to Home"
                        type="button"
                        class="p-button-outlined"
                        onclick="location.href='/';"
                    ></Button>
                </section>
            </div>
            <div class="col-12 md:col-6 overflow-hidden hidden md:inline-flex">
                <img
                    src="@/assets/images/image3.jpg"
                    alt="Image"
                    class="md:ml-auto block md:h-full"
                    style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Button from "primevue/button";

export default {
    head() {
        return {
            title: "404 - Page Not Found",
        };
    },
    components: {
        Button,
    },
};
</script>
