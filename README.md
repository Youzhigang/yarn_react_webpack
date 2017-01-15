# yarn_react_webpack
```
yarn install //install dependencies
yarn dev //run dev localhost:8111
```

yarn构建项目过程
>mkdir demo&cd demo

yarn init 生成package.json

构建项目目录

```

├──src

├─├──main.js

├─├──components

├─├──├─app.js

├── build

├─├──bundle.js

├─├──index.html

├── node_modules

├── npm-debug.log

├── package.json

├── webpack.config.js

└── yarn.lock

```

>yarn add webpack react react-dom

webpack.config.js

```

module.exports={

    //source maps

    devtool:"enval-source-map",

    //入口文件

    entry:__dirname+"/src/main.js",

    //输出目录

    output:{

        path:__dirname+"/build",

        filename:"bundle.js"

    }

};

//__dirname是node.js中的一个全局变量，当前执行脚本所在的目录

```

>index.html:

```

<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>ReactDemo1</title>

</head>

<body>

    <div id="app"></div>

    <script src="bundle.js"></script>

</body>

</html>

```





>配置完成之后demo目录运行```/demo $ webpack``` 可以打包了输出

```

Hash: 571d56d3ad70284760b4

Version: webpack 1.14.0

Time: 192ms

        Asset     Size  Chunks             Chunk Names

    bundle.js  1.53 kB       0  [emitted]  main

bundle.js.map  1.59 kB       0  [emitted]  main

   [0] ./app/main.js 18 bytes {0} [built]

```

在package.json里加入scripts配置

```

"scripts": {

    "start": "webpack"

  },

```

输入yarn start 等同于输入 webpack

#### 安装和配置babel

babel其实是个编译平台可以称之为转码工具,可以将es6,es7转成es5的代码,使得浏览器支持,babel内嵌了对jsx的支持

>yarn add --dev babel-core babel-loader  babel-preset-es2015 babel-preset-react

>在demo目录新建文件.babelrc

```

{

    "presets":[

        "react",

        "es2015"

    ]

}

```

>在webpack.config.js中加入modules,配置loaders

```

module:{

        //loaders:

        loaders:[

            {

                test:/\.(js|jsx)$/, //regex匹配js&jsx

                exclude:/node_modules/, //排除文件&文件夹

                loader:"babel" //loader名称*

            }

        ]

    }

```



#### webpack-dev-server

```

yarn add webpack-dev-server

```

>在webpack.config.js中配置web-dev-server

```

devServer:{

        contentBase:"./build/" ,//为build文件夹下的内容配置服务器,默认是根目录

        colors:true,

        historyApiFallback:true,

        inline:true,//源文件改变,自动刷新

        port:8111,

        process:true, //显示进度

    }

```

在package.json中加入启动script

```

 "scripts": {

    "start": "webpack",

    "dev":"webpack-dev-server"

  },

```

>建立react测试用例



```

//app.js

import React, {Component} from 'react';



class App extends Component {

    render() {

        return (

            <div className="test">

                Hello React!

            </div>

        );

    }

}

export default App;

```



```

//main.js

import React from 'react';

import ReactDom from 'react-dom';

import App from './components/app.js';



ReactDom.render(

    <App />,

    document.getElementById("app")

);

```

返回demo的根目录```yarn dev```输出一堆东西后最终```

webpack: bundle is now VALID.

```

此时打开127.0.0.1:8111 会显示测试用例的内容



##### 关于热加载

网上有的人说要说此时打开console会显示```Uncaught Error: [HMR] Hot Module Replacement is disabled```需要额外配置Hot Module Replacement[HMR]

在webpack.config.js中头上添加```var webpack = require("webpack")```

在devServer前面加入pluigins

```


plugins: [

        new webpack.HotModuleReplacementPlugin()//热模块替换插件

    ],

```

但是本人进行到这里的时候,不报错Uncatch error

修改app.js中的内容保存后显示内容立即改变,不用配置HMR



#### 额外

当然以上这些只是基本的配置,比如现在css就没法识别,识别css需要loader,

在module里面加上css-loader,style-loader

>first:

```

yarn add css-loader style-loader


//css-loader 是处理css文件中的url()等
//style-loader 将css插入到页面的style标签
//less-loader 是将less文件编译成css
//ass-loader 是将sass文件编译成css
```

>then eidt then webpack.config.js

```


    ﻿    ﻿{

                test: /\.css$/,

                exclude:/node_modules/,

                loader: 'style-loader!css-loader'

            },

```

现在可以把css文件当模块使用,

在app.js同级目录下建立app.css(显示用,实际过程中按照项目要求放置css目录)

```

﻿#test{

    ﻿color:red;

    font-size:50px;

}

```

在app.js中引入css ```require("./app.css")```当然也可以写成import的方式

```

yarn add --dev file-loader url-loader

```

file-loader处理mp4/ogg/svg等,url-loader处理图片字体等,同样配置loader

```

{

            test: /\.(png|jpg|gif|woff|woff2)$/,

            loader: 'url-loader?limit=8192'

        }, {

            test: /\.(mp4|ogg|svg)$/,

            loader: 'file-loader'

        }

﻿```

添加loader后报错 can't find module 请重启服务器再次尝试
