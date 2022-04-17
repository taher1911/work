<template>
    <div class="surface-card" id="layout-menubar">
        <Menubar :model="items" class="nav">
            <template #item="{ item }">
                <NuxtLink :to="item.url">{{ item.label }}</NuxtLink>
            </template>
            <template #end>
                <Button
                    :icon="icon"
                    class="p-button-raised p-button-rounded p-button-outlined"
                    @click="changeMode"
                />
            </template>
        </Menubar>
    </div>
</template>

<script>
import Button from "primevue/button";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
    components: {
        Button,
        Menubar,
        Menu,
    },
    methods: {
        changeMode() {
            let themeElement = document.getElementById("theme-link");
            this.$store.commit("UPDATE_DARK", !this.$store.getters.darkMode);
            localStorage.setItem("changeTheme", this.$store.getters.darkMode);
            this.$store.getters.darkMode
                ? (this.icon = "pi pi-sun")
                : (this.icon = "pi pi-moon");
            this.$store.getters.darkMode
                ? themeElement.setAttribute("href", "/css/dark.css")
                : themeElement.setAttribute("href", "/css/light.css");
        },
    },
    created() {
        this.$nextTick(async function () {
            let themeElement = document.getElementById("theme-link");
            const changeTheme = JSON.parse(localStorage.getItem("changeTheme"));
            if (changeTheme == null) {
                localStorage.setItem(
                    "changeTheme",
                    this.$store.getters.darkMode
                );
            } else {
                await this.$store.commit("UPDATE_DARK", changeTheme);
            }
            if (this.$store.getters.darkMode) {
                themeElement.setAttribute(
                    "href",
                    "/css/dark.css"
                )((this.icon = "pi pi-sun"));
            } else {
                themeElement.setAttribute("href", "/css/light.css");
                this.icon = "pi pi-moon";
            }
        });
    },

    data() {
        return {
            icon: this.$store.getters.darkMode
                ? (this.icon = "pi pi-sun")
                : (this.icon = "pi pi-moon"),
            items: [
                {
                    label: "Home",
                    url: "/",
                },
                {
                    label: "Topic",
                    url: "/topic",
                },
                {
                    label: "Database",
                    url: "/db",
                },
                {
                    label: "Glossary",
                    url: "/glossary",
                },
                {
                    label: "Tutorials",
                    url: "/tutorials",
                },
                {
                    label: "Csv",
                    url: "/csv",
                },
                {
                    label: "Filter",
                    url: "/filter",
                },
            ],
        };
    },
};
</script>
<style>
#layout-menubar {
    position: fixed;
    width: 100%;
    z-index: 10;
    background: transparent;
    border: none;
}

#layout-portlets-cover {
    margin-left: 260px;
}
</style>
