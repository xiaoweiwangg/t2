let path=require("path")
let html=require("html-webpack-plugin")
module.exports={
  mode:"development",
  entry:{
    index:"./src/index.js",
  },
  output:{
    filename:"bundle.js",
    path:path.resolve(__dirname,"dist")
  },
  plugins:[
    new html({
      template:"./src/index.html",
      filename:"index.html"
    })
  ],
  module:{
    rules:[
      {test:/\.js$/,use:[
        {loader:"babel-loader",options:{
          presets:["@babel/preset-env"]
        }}
      ]}
    ]
  },
  devServer:{
    port:8090,
    progress:true,
    compress:true,
    contentBase:"./dist",
    inline:true,
    open:true,
  }
}