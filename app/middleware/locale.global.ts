export default defineNuxtRouteMiddleware(async() => {
    const cloudflare =  await $fetch('/api/cf')
    console.log(cloudflare)
})
