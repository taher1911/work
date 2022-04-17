<template>
    <div>
        <DatabaseDisplay :database="database" />
    </div>
</template>

<script>
import { mocks } from "@/assets/data/mock.js";

export default {
    head() {
        return {
            title: "Topic",
        };
    },
    data: () => ({
        database: {
            data: mocks,
            headers: [
                { field: "Topic", header: "Topic" },
                { field: "Description", header: "Description" },
                { field: "Tags", header: "Tags" },
            ],
            // TODO: save page heading in store
            heading: {
                title: "Topic",
                section: "Database",
                sectionUrl: "/db",
                subSection: "Topics",
                status: [
                    {
                        icon: "pi-database",
                        text: mocks.length + " Records",
                    },
                ],
            },
        },
    }),
};
</script>
