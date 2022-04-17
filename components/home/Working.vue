<template>
    <div class="container mt-7">
        <ComponentsTextSection
            :name="'Working Steps'"
            :title="'How It Works'"
            :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit sit nostrum animi quod perferendis amet, magnam veniam distinctio illum.'"
        />
        <div class="cards__container">
            <Card
                v-for="cardData in cardsData"
                :key="cardData.id"
                :cardData="cardData"
            />
        </div>
        <span class="line block surface-100 mx-auto mt-5"></span>
    </div>
</template>
<script>
import ComponentsTextSection from "../home/ComponentsTextSection.vue";
import Card from "../home/Card.vue";

export default {
    components: {
        ComponentsTextSection,
        Card,
    },
    data() {
        return {
            cardsData: [
                {
                    id: 1,
                    icon: "pi-globe",
                    title: "Add Your Security Problem",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    id: 2,
                    icon: "pi-tablet",
                    title: "Choose Security Package",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    id: 3,
                    icon: "pi-lock",
                    title: "Prepare For Security Test",
                    description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    @media screen and(max-width:450px) {
        margin-top: 3rem !important;
    }
    .cards__container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2em;
        @media screen and(max-width:768px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .line {
        height: 1px;
        width: 65%;
    }
}
</style>
