export default defineEventHandler((event) => {
  const cf = event.context.cloudflare
  return cf
})
