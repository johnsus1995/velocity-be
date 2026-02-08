import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/test', (c) => {
    return c.text('Hello Hono!')
})



const start = async () => {
    try {
        serve({
            fetch: app.fetch,
            port: 8002
        }, (info) => {
            console.log(`payment service is running on http://localhost:${info.port}`)
        })
    } catch (error) {
        process.exit(1)
    }
}

start()