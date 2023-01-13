// npm run start:prod
// npm run start:dev

const fs = require('fs');
const envEnumerate = require('./env.list');


// 获取命令行参数
const cliArgs = process.argv.splice(2);
const env = cliArgs[0].slice(2);

// 根据不同环境选择不同的环境配置信息
const targetConfig = envEnumerate[env];

// 写入的目标文件
const targetFiles = [{
  prefix: '/src/utils/',
  filename: 'dev.js',
},];


// 匹配对应路径的文件并进行修改
fs.readFile(__dirname + targetFiles[0].prefix + targetFiles[0].filename, (readErr, data) => {
  if (readErr) {
    throw new Error(
      `Error occurs when reading file ${targetFiles[0].prefix}${targetFiles[0].filename}.\nError detail: ${readErr}`
    );
    // 终止运行
    process.exit(1);
  }

  // 获取目标文件原来的内容
  const targetFileData = data.toString();
  // 匹配文本,将dev文件的scriptConfig修改成需要使用的环境参数
  const writeData = targetFileData.replace(/scriptConfig[\s\S]*?;/,
    `scriptConfig = ${JSON.stringify(targetConfig, null, 2)};`);
  console.log(`已切换到${targetConfig.DESC}`);
  // 将获取的内容写入到目标文件中
  targetFiles.forEach(function (item) {
    let result = null;
    if (item.filename === 'dev.js') {
      result = writeData;
    }
    // 写入文件(这里只做简单的强制替换整个文件的内容)
    fs.writeFile(__dirname + item.prefix + item.filename, result, 'utf8', (writeErr) => {
      if (writeErr) {
        throw new Error(`error occurs when writing file. Error detail: ${writeErr}`);
        process.exit(1);
      }
    });
  });
});