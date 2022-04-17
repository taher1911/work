<template>
    <div class="container-s sm:mt-7">
        <ComponentsTextSection
            :name="'our services'"
            :title="'Our Special Services'"
            :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'"
        />
        <div class="cards__container">
            <Card
                v-for="cardData in data.servicesCards"
                :key="cardData.id"
                :cardData="cardData"
            />
        </div>
        <span class="line block surface-100 mx-auto mt-5"></span>
    </div>
</template>
<script>
import { mapState } from "vuex";
import ComponentsTextSection from "../home/ComponentsTextSection.vue";
import Card from "../home/Card.vue";
export default {
    components: {
        ComponentsTextSection,
        Card,
    },
    computed: {
        ...mapState(["data"]),
    },
};
</script>
