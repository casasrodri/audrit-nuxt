<script setup lang="js">
const menuUserAbierto = useState('menuUserAbierto')

function cerrarFlotante(event) {
    menuUserAbierto.value = false
}

function alerta(mensaje) {
    alert(mensaje);
    menuUserAbierto.value = false
}
</script>

<template>
    <nav id="menu-flotante" @keydown.escape="cerrarFlotante">
        <div id="fondo-float" refs="fondoMenu" @click="menuUserAbierto = false" :class="{ 'hidden': !menuUserAbierto }"
            class="fixed top-0 z-[100] w-screen h-screen bg-slate-500/20">

        </div>
        <div id="menu-float" :class="{ 'hidden': !menuUserAbierto }"
            class="mouse-pointer z-[101] bottom-0 fixed ml-8 mb-8 border-[1px] border-gray-200 rounded-lg min-w-52 min-h-24 bg-white/95 p-2 px-3">
            <p class="font-semibold">Rodrigo Casas</p>
            <p class="font-semilight text-sm text-gray-500">Auditor Analista</p>
            <hr class="border-gray-300 my-1">

            <div class="mt-2 inline-flex cursor-pointer" @click="alerta('Cerrar sesión!')">
                <Icon name="iconamoon:exit" size="22" color="red" />
                <span class="ml-2 text-red-600">
                    Cerrar sesión
                </span>
            </div>
        </div>
    </nav>
</template>
