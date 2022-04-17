<template>
    <div>
        <div class="grid grid-nogutter surface-section text-800 lg:pl-8 sm:pl-1">
            <div
                class="
                    col-12
                    md:col-6
                    p-6
                    text-center
                    md:text-left
                    flex
                    align-items-center
                "
            >
                <Sidebar :sideLinks="links" />
            </div>
            <div class="col-12 md:col-6 overflow-hidden hidden md:inline-flex">
                <img
                    src="@/assets/images/image4.jpg"
                    alt="Image"
                    class="md:ml-auto block md:h-full"
                    style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
                />
            </div>
        </div>
    </div>
</template>

<script>
const path = "/db/";
const files = require.context("@/pages/db", false, /^.*\.vue$/);
let link = [];

files
    .keys()
    .filter((e) => e !== "./_id.vue" && e !== "./index.vue")
    .flat()
    .forEach((e) =>
        link.push({
            label:
                e
                    .replace("./", "")
                    .replace(".vue", "")
                    .charAt(0)
                    .toUpperCase() +
                e
                    .replace("./", "")
                    .replace(".vue", "")
                    .replace("-", " ")
                    .slice(1),
            url: path + e.replace("./", "").replace(".vue", ""),
        })
    );

export default {
    data: () => ({
        links: link,
    }),
};
</script>

<style scoped></style>
