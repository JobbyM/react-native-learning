# react native learning
## 参考文档

	1. https://facebook.github.io/react-native/docs/getting-started.html
	2. http://reactnative.cn/docs/0.31/getting-started.html#content 中文文档


## 入门
###　Windows + Android 依赖安装

	1. Chocolatey Windows 平台包安装工具
	2. 使用npm 安装React Native 命令行工具（react-native-cli）
```cmd
$ cnpm install -g react-native-cli
[react-native-cli@1.0.0] link D:\git\nvmw\v6.3.0\react-native@ -> D:\git\nvmw\v6.3.0\react-native
[react-native-cli@*] installed at node_modules\.react-native-cli_npminstall\node_modules\.react-native-cli@1.0.0 (41 packages, use 3s, speed 171.38kB/s, json 264.98kB, tarball 175.3kB)
All packages installed (41 packages installed from npm registry, use 3s, speed 169.66kB/s, json 44(264.98kB), tarball 175.3kB)
```

	1. Android Studio 安装


### 测试React Native 安装

	1. 使用React Native 命令行工具进行生成一个AwesomeProject 项目，同时在新项目目录下进行运行
```cmd
react-native init AwesomeProject
cd AwesomeProject
react-native run-andorid
```

	1. 相关错误处理，参考这里 https://github.com/JobbyM/react-native-learning/issues?q=is%3Aissue+is%3Aclosed


### 修改项目

	1. 在编辑器中修改index.android.js
	2. 需要重新运行
```cmd
react-natvie run-android
```
才能够修改成功

	1. 不需要重新运行，只要将焦点在模拟器上，然后按两下R 键就可以看到自己的最新修改了
