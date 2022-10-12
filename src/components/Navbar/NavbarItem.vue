<script lang="ts" setup>
const props = defineProps<{item: any, isCollapsed: boolean}>();

const item = props.item;
</script>

<template>
    <div class="text-xl">
        <RouterLink :to="item.link" active-class="active" class="w-full py-4 block">
            <span class="px-8 text-2xl">
                <component :is="item.icon" class="inline"></component>
            </span>
            <span class="" v-if="!props.isCollapsed">
                {{item.label}}
            </span>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
.active {
    @apply bg-bgblack text-textorange rounded-r-[20px];
}
</style>
