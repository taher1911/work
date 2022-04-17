<template>
    <div>
        <Menu :model="sideLinks" />
    </div>
</template>

<script>
import Menu from "primevue/menu";

export default {
    components: {
        Menu,
    },
    props: {
        sideLinks: {
            type: Array,
            required: true,
        },
    },
};
</script>
