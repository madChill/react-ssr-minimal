const nodemon = require('nodemon');
class NodemonRunner {
    constructor(options = {}) {
        this.runnerOptions = options;
    }
    apply(compiler) {
        const tapOptions = { name: 'nodemon runner' };
        const runnerOptions = this.runnerOptions;
        compiler.hooks.afterEmit.tapAsync(
            tapOptions,
            function (compilation, callback) {
                console.log(compilation.assets);
                const monitor = nodemon(runnerOptions);
                monitor.on('log', ({ colour: colouredMessage }) =>
                    console.log(colouredMessage)
                );
                process.once('exit', () => {
                    monitor.emit('exit');
                });
                process.once('SIGINT', () => {
                    process.exit(0);
                });
            }
        );
    }
}

module.exports = NodemonRunner;
