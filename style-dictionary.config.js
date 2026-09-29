export default {
  source: ["src/tokens/primitives/**/*.json", "src/tokens/semantic/**/*.json"],

  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/generated/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
  },
};
