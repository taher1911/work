<template>
    <div>
        <Landing />
        <Services />
        <Middle />
        <Working />
        <Best />
        <Clients />
        <!-- <div class="grid grid-nogutter surface-section text-800 pt-4">
            <div
                class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
            >
                <section>
                    <span class="block text-6xl font-bold mb-1"
                        >Live the dream</span
                    >
                    <div class="text-6xl text-primary font-bold mb-3">
                        Engineer insight
                    </div>
                    <p class="mt-0 mb-4 text-700 line-height-3">
                        Life is like a journey to pride and you will have
                        toestablish where you arrive. Maybe you wont be able to
                        pick the final destination but you can certainly decide
                        which way you choose.
                    </p>

                    <Button
                        pButton
                        pRipple
                        label="Learn More"
                        type="button"
                        class="mr-3 p-button-raised"
                        onclick="location.href='/db';"
                    ></Button>
                    <Button
                        pButton
                        pRipple
                        label="Topic"
                        type="button"
                        class="p-button-outlined"
                        onclick="location.href='/topic';"
                    ></Button>
                </section>
            </div>
            <div class="col-12 md:col-6 overflow-hidden hidden md:inline-flex">
                <img
                    src="@/assets/images/image4.jpg"
                    alt="Image"
                    class="md:ml-auto block md:h-full"
                    style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
                />
            </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
//// home components ///
import Landing from "../components/home/Landing.vue";
import Services from "../components/home/Services.vue";
import Middle from "../components/home/Middle.vue";
import Working from "../components/home/Working.vue";
import Best from "../components/home/Best.vue";
import Clients from "../components/home/Clients.vue";

import Button from "primevue/button";

export default {
    components: {
        Landing,
        Services,
        Middle,
        Working,
        Clients,
        Best,
        Button,
    },
};
</script>
