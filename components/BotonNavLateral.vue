<script setup lang="ts">
// import { defineProps } from 'vue'
const props = defineProps({
    href: {
        type: String,
        default: '/'
    },
    nombre: String
})

const route = useRoute()
const rutaBase = props.href.replace('/', '')
const regex = RegExp(`/${rutaBase}/?`, 'i')
const isActive = computed(() => regex.test(route.path) && rutaBase !== '')

</script>

<template>
    <NuxtLink id="menu-item" :to="href"
        class="group/itemnav ml-[2px] flex my-2 border-[1px] border-transparent hover:border-cyan-200 hover:bg-cyan-100/70 hover:text-cyan-600 rounded-md hover:font-medium p-1">
        <span id="logo" :class="{ 'bg-cyan-100/30 rounded-md contrast-125': isActive }">
            <span class="text-gray-400 group-hover/itemnav:text-sky-500" :class="{ 'text-sky-500': isActive }">
                <slot />
            </span>
        </span>
        <span id="nombre" class="ml-2 hidden text-gray-600 group-hover/nav:inline group-hover/itemnav:text-cyan-600">
            {{ nombre }}
        </span>
    </NuxtLink>
</template>
