<script setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import TreeSelect from 'primevue/treeselect';
import SelectButton from 'primevue/selectbutton';

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import api from '@/services/api/index.js';

const route = useRoute();
const titulo = computed(() => {
    return route.params.cid === 'nuevo' ? 'Nuevo ciclo' : 'Editar ciclo';
});

const nodos = ref(null);
const ciclosDisponibles = ref({})
const inputPadre = ref({})

const ciclo = ref({
    nombre: '',
    sigla: '',
    prefijo: '',
    descripcion: '',
    tipo: 'Ciclo',
    padre: null
});

const cicloACrear = ref()

const crearCiclo = async () => {
    let padre = null
    let siglaExt = ''

    if (ciclo.value.tipo === 'Subciclo' && ciclo.value.padre) {
        padre = ciclo.value.padre.id
        siglaExt = ciclo.value.padre.sigla_extendida + '-' + ciclo.value.sigla
    } else {
        siglaExt = ciclo.value.sigla
    }

    const nuevoCiclo = {
        nombre: ciclo.value.nombre,
        sigla: ciclo.value.sigla,
        sigla_extendida: siglaExt,
        descripcion: ciclo.value.descripcion,
        padre_id: padre
    }

    cicloACrear.value = nuevoCiclo
    // TODO crear ciclo y botones para crear y editar

    // const { data } = await api.post('/ciclos/', ciclo.value)
    // console.log(data)
}




onMounted(async () => {
    const { data } = await api.get('/ciclos/nodos')
    nodos.value = data

    const { data: ciclosDis } = await api.get('/ciclos/')
    ciclosDisponibles.value = ciclosDis
});


watch(inputPadre, (val) => {
    const id = parseInt(Object.keys(val)[0])
    const encontrado = ciclosDisponibles.value.filter(nodo => nodo.id === id)[0]

    ciclo.value.padre = encontrado
    ciclo.value.prefijo = encontrado.sigla_extendida
})

watch(ciclo.value, (newValue, oldValue) => {
    if (newValue.tipo === 'Ciclo') {
        ciclo.value.prefijo = ''
    }
    if (newValue.tipo === 'Subciclo') {
        if (newValue.padre) {
            ciclo.value.prefijo = newValue.padre.sigla_extendida
        }
    }
})

</script>


<template>
    <SubLayout :ventana="titulo">
        <template #header>
            {{ titulo }}
        </template>

        <form class="w-2/3 flex flex-grow flex-col max-w-lg">
            <div class="mb-3 flex flex-col">
                <label class="font-bold mb-1">Nombre:</label>
                <InputText type=" text" v-model="ciclo.nombre" />
            </div>

            <div class="mb-3 flex flex-col">
                <div class="flex flex-row items-center justify-between mb-1">
                    <label class="font-bold">Tipo:</label>
                    <div class="card flex justify-content-center">
                        <SelectButton v-model="ciclo.tipo" :options="['Ciclo', 'Subciclo']" aria-labelledby="basic" />
                    </div>
                </div>

                <div class="card flex justify-content-center mt-2" v-if="ciclo.tipo === 'Subciclo'">
                    <TreeSelect v-model="inputPadre" :options="nodos" placeholder="Seleccioná el ciclo/subciclo padre"
                        class="md:w-20rem w-full" />
                </div>
            </div>

            <div class="mb-3 flex flex-col">
                <label class="font-bold mb-1">Sigla:</label>

                <InputGroup>
                    <InputGroupAddon v-if="ciclo.prefijo != ''">{{ ciclo.prefijo }}-</InputGroupAddon>
                    <InputText type="text" v-model="ciclo.sigla" />
                </InputGroup>
            </div>

            <div class="mb-3 flex flex-col">
                <label class="font-bold mb-1">Descripción:</label>
                <Textarea v-model="ciclo.descripcion" autoResize rows="5" cols="30" />
            </div>


        </form>


        <p>
            <!-- {{ ciclo }} -->
        </p>


        <!-- --------------------- -->

        <button @click="crearCiclo">
            Crear
        </button>

        <p>
            {{ cicloACrear }}
        </p>


    </SubLayout>
</template>
