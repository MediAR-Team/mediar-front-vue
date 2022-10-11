<script lang="ts" setup>
    const props = defineProps(['item']);

    const item = props.item;
</script>

<template>
    <div class="text-xl">
        <RouterLink :to="item.link" active-class="active" class="w-full py-4 block">
            <span class="px-6 text-2xl">
                <component :is="item.icon" class="inline"></component>
            </span>
            <span class="">
                {{item.label}}
            </span>
        </RouterLink>
    </div>
</template>

<style scoped>
    .active {
        color: #ff9a69;
        background-color: #3e3e3e;
        border-radius: 0 20px 20px 0;
    }
</style>
