import fs from 'node:fs/promises'
import express from 'express'
import pino from "pino";
import pinoHttp from "pino-http";

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()
const logger = pino();
// app.use(pinoHttp({ logger }));

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares);
  const { createGameServer } = await vite.ssrLoadModule('/src/server/game-server.ts')
  createGameServer(app, logger);
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
  const { createGameServer } = await import('./dist/game/game-server.js')
  createGameServer(app, logger)
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

// Start http server
app.listen(port, () => {
  logger.info(`HTTP Server started at http://localhost:${port}`)
})
