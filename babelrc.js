const isTest = String(process.env.NODE_env) === "test";
// Jest 會自動抓取 .babelrc 設定
module.exports = {
  presets: [["@babel/preset-env", { modules: isTest ? 'commonJS' : false }]],
};
