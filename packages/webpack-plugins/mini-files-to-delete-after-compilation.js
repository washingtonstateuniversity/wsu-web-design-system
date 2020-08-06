class MiniFilesToDeleteAfterCompilation {

	constructor(filenames) {
		this.filenames = filenames['filenames'];
	}

	apply(compiler) {

		compiler.hooks.emit.tapAsync("MiniCssExtractPluginCleanup", (compilation, callback) => {

			Object.keys(compilation.assets)
				.filter(asset => {
					let i = 0;

					for (i = 0; i < this.filenames.length; i++) {
						if (this.filenames[i] == asset) {
							delete compilation.assets[asset];
						}
					}
				});

			callback();
		});
	}
}

module.exports = MiniFilesToDeleteAfterCompilation;
