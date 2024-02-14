<script setup>
import menuLateral from '../assets/menuLateral.js'
import { abrirModal } from '../services/modals.js'

const props = defineProps({
    menu: String
})

const data = menuLateral[props.menu]

function abrirModalAsociado() {
    abrirModal(data.modal)
}

</script>

<template>
    <div @click="abrirModalAsociado">
        <BotonLateral :texto="data.texto" :icono="data.icono" :link="data.link" />
    </div>
</template>
