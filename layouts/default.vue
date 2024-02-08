<script setup>
import '~/assets/css/global.css'
const menuUserAbierto = useState('menuUserAbierto', () => false)

function pruebaTecla(event) {
    console.log('Se apretó una tecla!')
    if (event.key === "Escape") {
        menuUserAbierto.value = false;
    }
}

function abrirMenuUsuario() {
    menuUserAbierto.value = true;
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        alert('[Ctrl+K] 🔎 En este momento se abriría el buscador...');
    }
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'i') {
        event.preventDefault()
        alert('[Ctrl+i] 🤖 Chateá con la Inteligencia Artificial');
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        event.preventDefault()
        menuUserAbierto.value = false;
    }
});

</script>



<template>
    <!DOCTYPE html>
    <html lang="es" class="scroll-smooth">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Audrit</title>
    </head>

    <body @keydown="pruebaTecla">
        <div id="contenedor-app" class="flex flex-grow" @keydown="pruebaTecla">
            <nav id="app-nav"
                class="group/nav h-screen fixed min-w-14 hover:min-w-52 transition-all duration-500 ease-in-out border-r-[1px] border-gray-200 bg-white/95 flex flex-col px-3 py-4 z-20">
                <div id="app-nav-header" class="mb-3 ml-[6px] flex flex-row">
                    <Icon name="ph:webhooks-logo-duotone" size="32" color="#0768a0" />
                    <span id="nombre"
                        class="ml-2 items-center hidden group-hover/nav:inline-flex font-extralight text-2xl text-cyan-700"
                        style="font-family: 'Rubik';">
                        Audrit
                    </span>
                </div>

                <hr class="my-1">
                <div id="app-nav-menu" class="flex flex-col">
                    <BotonNavLateral nombre="Auditorías" href="/auditorias">
                        <Icon name="ri:user-search-line" size="24" />
                    </BotonNavLateral>

                    <BotonNavLateral nombre="Observaciones" href="/observaciones">
                        <Icon name="ri:eye-line" size="24" />
                    </BotonNavLateral>

                    <BotonNavLateral nombre="Requerimientos" href="/requerimientos">

                        <Icon name="ri:archive-2-line" size="24" />
                    </BotonNavLateral>

                    <BotonNavLateral nombre="Parámetros" href="/parametros">
                        <Icon name="icon-park-outline:setting-config" size="24" />
                    </BotonNavLateral>

                </div>
                <div id="app-nav-footer" class="mt-auto mb-0">

                    <BotonNavLateral nombre="Buscar">
                        <Icon name="iconamoon:search-duotone" size="24" />
                    </BotonNavLateral>

                    <BotonNavLateral nombre="Chat IA">
                        <Icon name="iconamoon:comment-duotone" size="24" />
                    </BotonNavLateral>

                    <BotonNavLateral nombre="Configuración">
                        <Icon name="iconamoon:settings-duotone" size="24" />
                    </BotonNavLateral>

                    <hr class="my-1">

                    <div id="logo-user" @click="abrirMenuUsuario" class="ml-[3px] inline-flex items-center justify-center">
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

            <div class="min-w-14 hover:min-w-52"></div>

            <main id="contenido-principal" class="flex flex-col pl-2">
                <slot />
            </main>
        </div>
        <MenuFlotanteUser />
    </body>

    </html>
</template>

<style scoped>
</style>
