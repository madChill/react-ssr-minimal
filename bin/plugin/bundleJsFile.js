class BundleJsFileToRuntime {
    constructor(options = {}) {
        // Applying user-specified options over the default options
        // and making merged options further available to the plugin methods.
        // You should probably validate all the options here as well.
        // this.options = { ...FileListPlugin.defaultOptions, ...options };
    }
    // Define `apply` as its prototype method which is supplied with compiler as its argument
    apply(compiler) {
        compiler.hooks.done.tapAsync('MyPlugin', (params, callback) => {
            params['MyPlugin - data'] =
                'important stuff my plugin will use later';
            callback();
        });
    }
}
module.exports = BundleJsFileToRuntime;
