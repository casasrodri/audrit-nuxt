<script setup>
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import api from '@/services/api/index.js';

const nodos = ref(null);

onMounted(async () => {
    const { data } = await api.get('/ciclos/nodos')
    nodos.value = data
});

function ver(id) {
    window.alert(`Visualizando a: ${id}`);
}

function modif(id) {
    window.alert(`Modificando a: ${id}`);
}

function del(id) {
    window.alert(`Eliminando a: ${id}`);
}

// const loading = ref(false);

// const load = () => {
//     loading.value = true;
//     setTimeout(() => {
//         loading.value = false;
//     }, 2000);
// };

</script>

<template>
    <SubLayout ventana="Ciclos">
        <template #header>
            Ciclos
        </template>

        <div class="max-w-4xl">
            <NuxtLink to="/parametros/ciclos/nuevo" class="mt-2 mb-0 w-full flex items-center justify-end">
                <Button type="button" label="Nuevo" icon="pi pi-plus" />
            </NuxtLink>

            <TreeTable :value="nodos" class="" :pt="{
                thead: { class: 'bg-red-300 ' }
            }">

                <Column expander>
                    <template #body="props">
                        <span
                            class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{{
                                props.node.data.sigla }}</span>
                        <span class="">
                            {{ props.node.data.nombre }}
                        </span>
                    </template>
                </Column>
                <Column headerStyle="width: 10rem">

                    <template #body="props">
                        <div class="flex flex-row items-center justify-end gap-2">

                            <span @click="ver(props.node.key)" class="text-green-600" title="Visualizar">
                                <Icon name="mdi:eye" size="20" />
                            </span>

                            <span @click="modif(props.node.key)" class="text-cyan-600" title="Editar">
                                <Icon name="material-symbols-light:edit-square" size="20" />
                            </span>

                            <span @click="del(props.node.key)" class="text-red-600"
                                :class="{ 'invisible': props.node.children.length > 0 }" title="Eliminar">
                                <Icon name="material-symbols-light:delete-rounded" size="20" />
                            </span>
                        </div>
                    </template>
                </Column>
            </TreeTable>
        </div>


    </SubLayout>
</template>




<script setup>

</script>
