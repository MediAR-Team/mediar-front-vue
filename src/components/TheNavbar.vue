<script setup lang="ts">
    import {ref} from 'vue';
    import {Cog, HomeVariantOutline, ArrowLeft } from 'mdue';
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
</script>

<template>
    <div class="h-full flex flex-col justify-between py-3">
        <div class="mb-5 p-5">
            <div class="font-bold text-5xl mb-2">
                MEDIAR
            </div>
            <div>
                {{tenantName}}
            </div>
        </div>
        <div>
            <NavbarItem v-for="i in menuItems" :item="i" ></NavbarItem>
        </div>
        <div>
            <NavbarItem :item="logoutItem"></NavbarItem>
        </div>
    </div>
</template>

<style scoped>

</style>
