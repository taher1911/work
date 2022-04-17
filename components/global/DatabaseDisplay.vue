<template>
    <div class="surface-card">
        <PageHeading :heading="database.heading" />
        <div class="surface-card lg:px-7 sm:px-1 shadow-2 border-round">
            <DataTable
                :value="database.data"
                :scrollable="true"
                scrollHeight="400px"
                responsiveLayout="scroll"
            >
                <template #header>
                    <div class="flex justify-content-between">
                        <Button
                            type="button"
                            icon="pi pi-filter-slash"
                            label="Clear"
                            class="p-button-outlined"
                        />
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText placeholder="Keyword Search" />
                        </span>
                    </div>
                </template>
                <Column
                    v-for="col of database.headers"
                    :field="col.field"
                    :header="col.header"
                    :key="col.field"
                    sortable
                ></Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
    components: {
        DataTable,
        Button,
        Column,
        InputText,
    },
    props: {
        database: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
