import Koa from "koa"
import Router from "koa-router"

const app = new Koa()
const router = new Router()
const PORT = 8000

router.get("/*", async (ctx) => {
    ctx.body = "Hello World!"
})

app.use(router.routes())
app.listen(PORT)
console.log(`Server running on port ${PORT} `)

