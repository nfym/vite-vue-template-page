/**
 * 配置依赖包分析插件
 */
import visualizer from 'rollup-plugin-visualizer'

export default function configVisualizerConfig() {
  if (isReportMode()) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  }
  return []
}

function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}
