<script setup>
import '~/assets/css/global.css'
import 'primeicons/primeicons.css'
// import 'primevue/resources/themes/aura-light-cyan/theme.css'
import 'primevue/resources/themes/aura-light-cyan/theme.css'

import { abrirModalBuscador, abrirModalUsuario } from '~/services/modals.js';


document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
        // console.log('Se apretó Ctrl+k!')
        event.preventDefault()
        abrirModalBuscador()
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'i') {
        event.preventDefault()
        alert('[Ctrl+i] 🤖 Chateá con la Inteligencia Artificial');
    }
});


// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Escape') {
//         event.preventDefault()
//         menuUserAbierto.value = false;
//     }
// });

useHead({ title: 'Audrit' })

</script>



<template>
    <body>
        <!--  body: @keydown="pruebaTecla" -->
        <div id="contenedor-app" class="flex flex-grow">

            <nav id="app-nav"
                class="group/nav h-screen fixed min-w-14 hover:min-w-52 transition-all duration-500 ease-in-out border-r-[1px] border-gray-200 bg-white/95 flex flex-col px-3 py-4 z-20">
                <NuxtLink to="/">
                    <div id="app-nav-header" class="mb-3 ml-[6px] flex flex-row">
                        <Icon name="ph:webhooks-logo-duotone" size="32" color="#0768a0" />
                        <span id="nombre"
                            class="ml-2 items-center hidden group-hover/nav:inline-flex font-extralight text-2xl text-cyan-700"
                            style="font-family: 'Rubik';">
                            Audrit
                        </span>
                    </div>
                </NuxtLink>

                <hr class="my-1">
                <div id="app-nav-menu" class="flex flex-col">
                    <BotonLateralLink menu="auditorias" />
                    <BotonLateralLink menu="observaciones" />
                    <BotonLateralLink menu="requerimientos" />
                    <BotonLateralLink menu="parametros" />
                </div>
                <div id="app-nav-footer" class="mt-auto mb-0">
                    <BotonLateralModal menu="buscar" />
                    <BotonLateralModal menu="asistente" />
                    <BotonLateralLink menu="configuracion" />

                    <hr class="my-1">

                    <div id="logo-user" @click="abrirModalUsuario" class="ml-[3px] inline-flex items-center justify-center">
                        <span id="logo" class="w-8 h-8 inline-flex items-center justify-center">
                            <!-- <img :src="userAvatar" alt="Perfil del usuario"> -->
                            <div
                                class="rounded-full bg-green-400 font-normal uppercase p-1 w-7 h-7 flex items-center justify-center text-sm">
                                RC
                            </div>
                        </span>
                        <span id="nombre"
                            class="ml-2 text-gray-500 hidden group-hover/nav:inline-flex justify-center items-center">
                            Rodri Casas
                        </span>
                    </div>
                </div>
            </nav>

            <div id="margen" class="min-w-14 hover:min-w-52"></div>

            <main id="contenido-principal" class="flex flex-col pl-2 min-w-min min-h-min">
                <slot />
            </main>

            <ModalBusqueda />
            <ModalUsuario />
        </div>
    </body>
</template>

<style scoped>
</style>
