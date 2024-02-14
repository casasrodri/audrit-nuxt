<script setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';
import { getModalUsuario } from '../services/modals.js'

import Swal from 'sweetalert2'
import api from '../services/api/index.js'

async function logout() {
    try {
        const response = await api.post('/logout')
        if (response.data.status === 'ok') {
            getModalUsuario().hide()
            await navigateTo('/login')
        }

    } catch (error) {
        console.error(error)

        Swal.fire({
            title: "Error",
            text: error.response.data.error,
            icon: "error"
        });
    }
}

onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <!-- Modal toggle -->
    <button data-modal-target="modalUsuario" class="hidden" type="button" />

    <!-- Main modal -->
    <div id="modalUsuario" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="p-4 z-[101] bottom-0 left-0 fixed ml-4 mb-3 min-w-52 min-h-24">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
                    <div class="relative pl-2 w-full">
                        <p class="font-semibold">Rodrigo Casas</p>
                        <p class="font-semilight text-sm text-gray-500">Auditor Analista</p>
                    </div>

                </div>
                <!-- Modal body -->
                <div class="p-2">
                    <div class="inline-flex cursor-pointer text-sm" @click="logout">
                        <Icon name="iconamoon:exit" size="20" color="red" />
                        <span class="ml-1 text-red-600">
                            Cerrar sesión
                        </span>
                    </div>


                </div>
                <!-- Modal footer -->
                <!-- <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="modalUsuario" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                        accept</button>
                    <button data-modal-hide="modalUsuario" type="button"
                        class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
