<template>
    <div class="container mt-8">
        <ComponentsTextSection
            :name="'Our Testimonials'"
            :title="'Loved By Our Clients'"
            :description="'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, culpa. Autem explicabo dolores commodi odit consequuntur alias, harum veniam suscipit.'"
        />
        <div class="clients">
            <ClientsCraousel :clients="data.clients" />
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import ComponentsTextSection from "../home/ComponentsTextSection.vue";
import ClientsCraousel from "../home/ClientsCarousel.vue";
export default {
    components: {
        ComponentsTextSection,
        ClientsCraousel,
    },
    computed: {
        ...mapState(["data"]),
    },
};
</script>
<style lang="scss" scoped>
.container {
    @media screen and(max-width:450px) {
        margin-top: 3rem !important;
    }
}
</style>
