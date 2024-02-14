<script setup>
import menuLateral from '../assets/menuLateral.js'

const props = defineProps({
    menu: String
})

const data = menuLateral[props.menu]

</script>

<template>
    <NuxtLink :to="data.link">
        <BotonLateral :texto="data.texto" :icono="data.icono" :link="data.link" />
    </NuxtLink>
</template>
