<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
    headers: {
        type: Array,
        required: true,
    },
    items: {
        type: Array,
        required: true,
        default: () => []
    },
    total: {
        type: Number,
        required: true,
        default: 0,
    },
    loading: {
        type: Boolean,
        required: true,
    },
    page: {
        type: Number,
        required: true,
    },
    itemsPerPage: {
        type: Number,
        required: true,
    },
    multiSort: {
        type: Boolean
    }
    /*loadItems: {
        type: Function,
        required: true
    }*/
})

const emits = defineEmits(['page-updated', 'sort-by-updated'])
//watch(props.total, (v) => console.log(v))
const nbPages = computed(() => {
    if (props.total && props.itemsPerPage) return Math.ceil(props.total / props.itemsPerPage)
    return 0
})
</script>

<template>
    <v-row>
        <v-col cols="12">
            <v-sheet elevation="1">
                <v-data-table-server :headers="headers" :items="items" :items-length="total" :loading="loading"
                    :page="page" hide-default-footer density="comfortable" striped="odd" gridlines="vertical"
                    @update:sort-by="$emit('sort-by-updated', $event)" :multi-sort="multiSort">
                    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                        <slot :name="name" v-bind="slotData" />
                    </template>
                </v-data-table-server>
            </v-sheet>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-pagination :length="nbPages" total-visible="5" variant="elevated" active-color="primary-darken-1"
                density="comfortable" tile @update:model-value="$emit('page-updated', $event)"></v-pagination>
        </v-col>
    </v-row>
</template>
<style scoped>
nav.v-pagination {
    display: flex;
    flex-direction: row;
    justify-content: end;
}
</style>
<style>
@layer vutify-components {
    ul.v-pagination__list {
        width: unset !important;
    }
}
</style>