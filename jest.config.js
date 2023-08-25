module.exports = {
  testEnvironment: 'jest-environment-node'
  // 假設是前端專案，會包含很多 Browser code，可以改回 'jest-environment-jsdom'：
  // Jest 預設已內建 jsdom，透過 jsdom，Jest 可以模擬 browser 環境執行測試
}