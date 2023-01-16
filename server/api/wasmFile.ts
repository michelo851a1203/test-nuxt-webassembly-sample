import fs from 'fs';
import type { H3Event } from 'h3'

export default defineEventHandler((event: H3Event) => {
  event.node.res.setHeader('Content-Type', 'application/wasm')
  return fs.readFileSync('simple.wasm')
})
