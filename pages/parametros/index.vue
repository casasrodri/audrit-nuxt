<script setup>

// TODO: Traer desde la API.
const parametros = ref([
    { nombre: 'Ciclos', ruta: '/parametros/ciclos', icon: 'icon-park-outline:cycle' },
    { nombre: 'Periodos', ruta: '/parametros/periodos', icon: 'ci:calendar' },
]);

</script>

<template>
    <SubLayout ventana="Parámetros">
        <template #header>
            Parámetros
        </template>

        <div id="contenedor" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            <template v-for="param in parametros">
                <NuxtLink :to="param.ruta"
                    class="bg-gradient-to-r from-cyan-500/60 to-blue-300/60 hover:from-cyan-500/70 hover:to-blue-300/80 rounded-md w-56 h-20 flex items-center justify-center hover:scale-105 transition-all duration-200 ease-in-out flex-col gap-2">
                    <Icon :name="param.icon" size="24" />
                    {{ param.nombre }}
                </NuxtLink>
            </template>

        </div>
    </SubLayout>
</template>


<!-- Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl -->
