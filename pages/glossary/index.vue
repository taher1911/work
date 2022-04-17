<template>
    <div>
        <PageHeading :heading="heading" />
        <div class="surface-card lg:px-8 md:px-0 py-4">
            <Card
                style="width: 100%; margin-bottom: 2em"
                class="lg:m-2 lg:m-0 surface-50 shadow-2"
                v-for="item in body"
                :key="item.Topic"
            >
                <template #title> {{ item.Topic }} </template>
                <template #content>
                    <p>
                        {{ item.Description }}
                    </p>
                </template>
                <template
                    #footer
                    v-if="listTags(item.Tags).length > 1"
                    class="flex-wrap"
                >
                    <div class="flex flex-wrap">
                        <a
                            v-for="tag in listTags(item.Tags)"
                            :href="tag"
                            :key="tag"
                            class="bg-primary-reverse py-1 px-2 mr-2 mb-2 p-text-bold radius shadow-2"
                            style="cursor: pointer"
                            >{{ tag }}</a
                        >
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from "primevue/card";

const path = "db/";
const slug = "mock";
export default {
    components: {
        Card,
    },
    data: () => ({
        heading: {
            title: "Glosser",
            section: "Database",
            sectionUrl: path,
            subSection: "Glosser",
            status: [],
        },
    }),
    async asyncData({ $content }) {
        const page = await $content(path, slug).fetch();

        console.log(page);
        return page;
    },
    async created() {
        this.$nextTick(function () {
            let status = [
                {
                    icon: "pi-database",
                    text: this.body.length + " Records",
                },
                {
                    icon: "pi-calendar",
                    text: this.formatDate(this.updatedAt),
                },
            ];
            this.heading.status = status;
        });
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
        listTags(tag) {
            let tags = [];
            let text = tag.split(";");
            text.forEach(function (obj) {
                tags.push(obj.toString().trim());
            });
            return tags;
        },
        filter(tag) {
            console.log("filter " + tag);
        },
    },
};
</script>
<style>
.radius {
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
}
</style>
