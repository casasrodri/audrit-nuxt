<script setup>
const props = defineProps({
    texto: String,
    icono: String,
    link: String
})

const route = useRoute()
const rutaBase = props.link.replace('/', '')
const regex = RegExp(`/${rutaBase}/?`, 'i')
const isActive = computed(() => regex.test(route.path) && rutaBase !== '')

</script>

<template>
    <div
        class="group/itemnav ml-[2px] flex my-2 border-[1px] border-transparent hover:border-cyan-200 hover:bg-cyan-100/70 hover:text-cyan-600 rounded-md hover:font-medium p-1">
        <span id="logo" :class="{ 'bg-cyan-100/30 rounded-md contrast-125': isActive }">
            <span class="text-gray-400 group-hover/itemnav:text-sky-500" :class="{ 'text-sky-500': isActive }">
                <Icon :name="icono" size="24" />
            </span>
        </span>
        <span id="nombre" class="ml-2 hidden text-gray-600 group-hover/nav:inline group-hover/itemnav:text-cyan-600">
            {{ texto }}
        </span>
    </div>
</template>
