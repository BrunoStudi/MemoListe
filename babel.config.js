module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@components" : "./src/components",
            "@hooks" : "./src/hooks",
            "@navigate" : "./src/navigate",
            "@screens" : "./src/screens",
          },
        },
      ],
    ],
  };
};
