<script setup>
const props = defineProps({
    ventana: String
})

useHead({ title: props.ventana })
</script>
<template>
    <header class="text-2xl border-b-[1px] fixed min-w-full pt-6 pb-2 pl-4 font-medium bg-gray-50/90 backdrop-blur-sm">
        <slot name="header" />
    </header>
    <div id="margen" class="mt-16"></div>
    <main class="text-md pr-14 pl-4 pt-3">
        <slot />
    </main>
</template>
