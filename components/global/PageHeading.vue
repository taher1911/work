<template>
    <div class="surface-section px-4 pt-8 pb-4 md:px-6 lg:px-8">
        <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-2">
            <li>
                <nuxt-link
                    :to="heading.sectionUrl"
                    class="text-500 no-underline line-height-3 cursor-pointer"
                    >{{ heading.section }}
                </nuxt-link>
            </li>
            <li class="px-2">
                <i class="pi pi-angle-right text-500 line-height-3"></i>
            </li>
            <li>
                <span class="text-900 line-height-3">{{
                    heading.subSection
                }}</span>
            </li>
        </ul>
        <div
            class="
                flex
                align-items-start
                flex-column
                lg:justify-content-between lg:flex-row
            "
        >
            <div>
                <div class="font-medium text-3xl text-900">
                    {{ heading.title }}
                </div>
                <div class="flex align-items-center text-700 flex-wrap">
                    <div
                        v-for="(item, key) in heading.status"
                        :key="key"
                        class="mr-2 lg:mr-5 flex align-items-center mt-3"
                    >
                        <i class="pi mr-2" :class="item.icon"></i>
                        <span class="text-sm lg:text-lg">{{ item.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        heading: {
            type: Object,
            required: true,
        },
    },
};
</script>
