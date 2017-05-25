const XunitViewerCli = require('xunit-viewer/cli')


XunitViewerCli({
    results: 'reports/',
    ignore: [],
    output: 'results.html',
    title: 'XunitResults',
    port: false,
    watch: false,
    color: true,
    filter: {}
})
