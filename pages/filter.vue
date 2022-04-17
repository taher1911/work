<template>
    <div class="surface-card pt-8">
        <div class="surface-card lg:px-7 sm:px-1 shadow-2 border-round">
            <DataTable
                :value="data"
                :scrollable="true"
                scrollHeight="400px"
                responsiveLayout="scroll"
                :globalFilterFields="filterTitle"
                :filters="filters"
                dataKey="id"
                filterDisplay="row"
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
                    field="Description"
                    header="Description"
                    filterMatchMode="contains"
                    :key="data.Description"
                >
                    <template #body="{ data }">
                        {{ data.Description }}
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText
                            type="text"
                            v-model="filterModel.value"
                            @input="filterCallback()"
                            class="p-column-filter"
                            placeholder="Search by description"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { mocks } from "@/assets/data/mock.js";
import { FilterMatchMode, FilterOperator } from "primevue/api/";

export default {
    components: {
        DataTable,
        Button,
        Column,
        InputText,
    },
    data() {
        return {
            data: mocks,
            headers: [
                { field: "Acronym", header: "Acronym" },
                { field: "Description", header: "Description" },
                { field: "Tags", header: "Tags" },
            ],
            filters: {
                Description: {
                    value: null,
                    matchMode: FilterMatchMode.CONTAINS,
                },
            },
            filterTitle: ["Acronym", "Description", "Tags"],
        };
    },
};
</script>

<style scoped></style>
