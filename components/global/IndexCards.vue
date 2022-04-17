<template>
    <div class="w-12 md:w-10">
        <div class="">
            <div
                class="flex flex-wrap align-items-center justify-content-start card-container"
            >
                <Card
                    v-for="link in links"
                    :key="link.index"
                    class="border-round md:w-15rem w-12 my-2 md:m-2"
                >
                    <template #header class="overflow-hidden">
                        <nuxt-link :to="link.url"
                            ><img
                                src="@/assets/images/image1.jpg"
                                class="border-round"
                        /></nuxt-link>
                    </template>
                    <template #title>
                        <nuxt-link :to="link.url" class="no-underline">{{
                            link.label
                        }}</nuxt-link>
                    </template>
                    <template #content>
                        <nuxt-link :to="link.url" class="no-underline">
                            Inventore sed consequuntur error repudiandae numquam
                            deserunt quisquam repellat libero asperiores earum
                            nam nobis.
                        </nuxt-link>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
    components: {
        Card,
        Button,
    },
    props: {
        links: {
            type: Array,
            required: false,
        },
    },
};
</script>

<style></style>
