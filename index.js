function WebpackDevCompileOptimizePlugin() {}

WebpackDevCompileOptimizePlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin(['optimize-chunks-basic', 'optimize-extracted-chunks-basic'], function(chunks) {
      chunks.forEach(function(chunk) {
        chunk.parents = []
      })
    })
  })
}

module.exports = WebpackDevCompileOptimizePlugin