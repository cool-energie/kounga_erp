<script setup>
import { computed } from 'vue';
import TipedIconBtn from './TipedIconBtn.vue';
import { isFilterEmpty, toFilterLabel } from '@/types/data/Filter.ts'

const props = defineProps(['store'])
const model = defineModel({ type: Boolean })
const emits = defineEmits(['remove:filter'])
const filters = computed(() => props.store.filters.filter(f => !isFilterEmpty(f)))

async function setFilters() {
    if (await props.store.appyFilters()) model.value = false
}

function hide() {
    props.store.normalize()
    model.value = false
}

</script>

<template>
    <div>
        <tiped-icon-btn color="primary-darken-1" icon="mdi-filter-plus" tip="Add filters" @click="model = true" />
        <v-chip-group>
            <v-chip v-for="f in filters" @click:close="$emit('remove:filter', f)" closable variant="elevated">{{
                toFilterLabel(f)
            }}</v-chip>
        </v-chip-group>
    </div>
    <v-dialog max-width="800" v-model="model" persistent absolute>
        <v-card title="Add/Modify Filters">
            <v-card-text>
                <slot />
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Cancel" prepend-icon="mdi-cancel" color="gray" @click="hide"></v-btn>
                <v-btn text="Clear filters" prepend-icon="mdi-close" color="error"
                    @click="store.clearFilters()"></v-btn>
                <v-btn text="Save filters" prepend-icon="mdi-content-save-move-outline" color="success"
                    @click="setFilters"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>