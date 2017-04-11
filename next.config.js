module.exports = {
  webpack: (config, { dev }) => {
    if (!dev) {
        return config
    }

    const rules = config.module.rules;
    const lintConfig = {
        test: /\.js(\?[^?]*)?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
    };
    rules.push(lintConfig);
    
    return config
  }
}