<template>
    <div class="surface-card">
        <div v-if="true">
            <div v-if="dataLength == null">
                <FileUpload
                    mode="basic"
                    @upload="csvTojson"
                    :auto="true"
                    chooseLabel="Browse"
                    ref="file"
                    class="py-3"
                />
                <div
                    style="height: 150px"
                    class="border-2 border-dashed surface-border"
                ></div>
            </div>
            <div v-else>
                <DataTable
                    :value="database.field"
                    :scrollable="true"
                    scrollHeight="500px"
                    responsiveLayout="scroll"
                >
                    <template #empty> No Records found. </template>
                    <template #loading> Loading data... </template>
                    <template #header>
                        <div class="flex justify-content-between">
                            <Button
                                label="Reset"
                                @click="removeFile"
                                class="mr-2"
                            />
                            <div>
                                <Button
                                    type="button"
                                    icon="pi pi-filter-slash"
                                    label="Clear"
                                    class="button-outlined mr-2"
                                />
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Keyword Search" />
                                </span>
                            </div>
                        </div>
                    </template>
                    <Column
                        v-for="col of database.header"
                        :field="col.field"
                        :header="col.header"
                        :key="col.field"
                        sortable
                        filterField="acronym"
                        filterMatchMode="contains"
                    ></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
// TODO: move and manage database table via store

// FIXME: file upload not working on server
//   error: Failed to load resource: the server responded with a status of 404 ()

import FileUpload from "primevue/fileupload";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import papa from "papaparse";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { FilterMatchMode, FilterOperator } from "primevue/api/";

export default {
    components: {
        FileUpload,
        DataTable,
        Column,
        InputText,
        Button,
    },
    computed: {
        ...mapGetters(["dataLength"]),
        ...mapState(["data"]),
    },
    data() {
        return {
            database: {
                header: [],
                field: [],
            },
        };
    },
    methods: {
        csvTojson() {
            let csvFile = this.$refs.file.files[0];
            if (csvFile == undefined || csvFile.type != "text/csv") {
                alert("Please select a file");
                return;
            }
            let that = this;

            papa.parse(csvFile, {
                header: true,
                dynamicTyping: true,
                transformHeader: function (h) {
                    return h.trim();
                },
                skipEmptyLines: true,
                preview: 0,
                complete(results) {
                    that.$store.commit("SET_DATA", results.data),
                        results.meta.fields.forEach((e) =>
                            that.database.header.push({
                                header:
                                    e.trimStart().charAt(0).toUpperCase() +
                                    e.trimStart().slice(1).trimStart(),
                                field: e.trimStart(),
                            })
                        ),
                        (that.database.field = that.$store.state.data);
                },
            });
        },
        removeFile() {
            console.log("removeFile");
            this.$store.commit("SET_DATA", {});
            this.database = {
                header: [],
                field: [],
            };
        },
    },
};
</script>
