 # 当前项目主要使用uni-app框架完成跨端app
 
 ### cloudfunctions => uniCloud(云服务器)
 data_init.json => 主要用于初始化云数据库

 ### uni-app => 跨端框架(注释)
 1. static => 主要用于存放静态资源，项目不会编译该文件夹里的文件，所以不要放js || css
 2. easyCom => 页面引入组件不必使用import，使用组件同名即可引用
 3. 搜索框需要主要weChat(需要占位符,且根据胶囊动态计算宽度高度)和H5的兼容
 4. uniCloud.callFunction()调用云函数，获取后端数据
 5. 列表切换实质是轮播图
 
