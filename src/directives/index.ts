import type { App } from 'vue'
import { setupTrimDirective } from './trim'

export default function setupGlobDirectives(app: App) {
  setupTrimDirective(app)
}
