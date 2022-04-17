<template>
    <div class="surface-card lg:px-8 sm:px-1 pb-4 pt-8">
        <div class="px-4">
            <div class="text-3xl font-medium text-900 mb-3">CSV Import</div>
            <div class="mr-5 d-flex align-items-center mt-3 text-700">
                <i class="pi pi-database mr-2"></i>
                <span>{{ dataLength }} Records</span>
            </div>
            <CsvImportList />
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters(["dataLength"]),
        ...mapState(["data"]),
    },
};
</script>
