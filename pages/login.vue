<script setup>
import api from '../services/api/index.js'
import Swal from 'sweetalert2'

definePageMeta({
    layout: 'vacio'
})
useHead({ title: 'Iniciar sesión' })
const user = ref({
    email: 'rodri@casas.com',
    password: 'rodri'
})

async function login() {
    try {
        const response = await api.post('/jwt', user.value)

        if (response.data.status === 'ok') {
            // TODO: Acá habría que pedir los menus del usuario
            await navigateTo('/')
        } else {
            Swal.fire({
                title: "Error de acceso",
                text: response.data.message,
                icon: "error"
            });
        }
    } catch (error) {
        console.error(error.response)

        Swal.fire({
            title: "Error de acceso",
            text: error.response.data.detail,
            icon: "error"
        });
    }
}

</script>

<template>
    <div class="w-full h-full flex items-center justify-center">
        <form class="bg-white/85 min-w-96 max-w-96 min-h-96 rounded-xl border-[1px] border-cyan-500 py-5 px-10">
            <div class="flex flex-col mx-auto items-center mb-5 mt-5">
                <Icon name="ph:webhooks-logo-duotone" size="100" color="#0768a0" />
                <span id="nombre" class="items-center font-extralight text-3xl text-cyan-700" style="font-family: 'Rubik';">
                    Audrit
                </span>
            </div>


            <div class="flex flex-col">
                <label for="email" class="font-semibold">Email:</label>
                <input id="email" v-model="user.email" type="email" class="border-cyan-300 rounded-md text-cyan-800">
            </div>

            <div class="flex flex-col mt-4">
                <label for="password" class="font-semibold">Password:</label>
                <input id="password" v-model="user.password" type="password"
                    class="border-cyan-300 rounded-md text-cyan-800">
            </div>

            <div class="flex justify-center mx-auto my-5">
                <button type="submit" class="rounded-xl bg-[#0768a0] text-white p-2 px-7" @click.prevent="login">
                    Ingresar
                </button>
            </div>
        </form>
    </div>
</template>


