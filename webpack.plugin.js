import pkg from 'webpack';
const { sources, Compilation } = pkg;

export class Minifier {

    apply(compiler) {
        compiler.hooks.compilation.tap('Minifier', (compilation) => {
            compilation.hooks.afterProcessAssets.tap(
                {
                    name: 'Minifier',
                    stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
                },
                assets => {
                    if (compilation.options.mode === 'production') {
                        Object.entries(assets).forEach(([pathname, source]) => {
                            const rawSource = source._value.replace(/\\n\s*/g, '').replace(/([:,]) /g, '$1');
                            compilation.updateAsset(
                                pathname,
                                new sources.RawSource(rawSource)
                            );
                        });
                    }
                }
            );
        });
    }

}