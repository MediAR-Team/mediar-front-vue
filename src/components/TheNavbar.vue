<script setup lang="ts">
    import {ref, reactive} from 'vue';
    import {Cog, HomeVariantOutline, ArrowLeft, ChevronLeft, ChevronRight } from 'mdue';
    import NavbarItem from './Navbar/NavbarItem.vue';

    let tenantName = ref('High Linguistic Academy of Peremozhne');
    let menuItems = ref([{
        label: 'Dashboard',
        link: '/',
        icon: HomeVariantOutline
    },
    {
        label: 'Courses',
        link: '/courses',
        icon: HomeVariantOutline
    },
    {
        label: 'Resources',
        link: '/resources',
        icon: HomeVariantOutline
    },
    {
        label: 'Calendar',
        link: '/calendar',
        icon: HomeVariantOutline
    },
    {
        label: 'Progress',
        link: '/progress',
        icon: HomeVariantOutline
    },
    {
        label: 'Settings',
        link: '/settings',
        icon: Cog
    }]);

    const logoutItem = {
        label: 'Log Out',
        link: '/logout',
        icon: ArrowLeft
    };

    const isCollapsed = ref(false);
    const onCollapseClick = () => {
        isCollapsed.value = !isCollapsed.value;
    };
</script>

<template>
    <div class="h-full flex flex-col justify-between py-3 bg-white rounded-r-3xl">
        <div class="mb-5 p-5">
            <div class="font-extrabold text-5xl mb-2">
                M<span class="font-extrabold" v-if="!isCollapsed">EDIAR</span>
            </div>
            <div v-if="!isCollapsed">
                {{tenantName}}
            </div>
        </div>
        <div>
            <NavbarItem v-for="i in menuItems" :item="i" :is-collapsed="isCollapsed"></NavbarItem>
        </div>
        <div>
            <NavbarItem :item="logoutItem" :is-collapsed="isCollapsed"></NavbarItem>
        </div>
        <button class="collapse-btn" @click="onCollapseClick()">
            <ChevronRight v-if="isCollapsed" />
            <ChevronLeft v-else />
        </button>
    </div>
</template>

<style scoped lang="scss">
    .collapse-btn {
        @apply absolute top-8 right-[-25px] p-2 z-10 rounded-2xl bg-bgblack text-textorange text-3xl;
    }
</style>
