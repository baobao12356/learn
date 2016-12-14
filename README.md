# learn
learn webpack react about my web Station

一、此项目的问题所在，希望路过的大神给予解决<br />
1）js文件中不能正常的书写相对路径得到图片<br />
2）当相对路径能用时，打包文件后图片的路径就不对了<br />
解决上面的问题是，require('../img/1.jpg')  只能这样才能解决上面的问题，如何能够用相对路径引用，来解决上面的这两个问题<br />

2）各scss文件如果写出标签样式，会污染以后的每个文件<br />
例如：<br />
a.scss  文件中写了button｛ color：red ｝<br />
以后写每个文件，只要写了button，都会有这个样式，<br />

求解决。<br />
qq:361196961<br />
<br />


运行项目：<br />

<div style="width:100%; height:30px; background-color:#ccc; line-height:30px; ">
	1、npm i    			<br />
	2、npm run play		<br />
	3、localhost：8000	<br />
</div>


<br />
<br />

＃ image url problem
（项目说明：）
backgroundImage's url only use .css file ('relative path')
IMG Tags  use (require('relative path'))

<br />

说明：图片路径问题是一个很大的问题，who can help me?  thank you 
解释： 之所以用这个的路径来构建这个项目，只因为如果路径不是这样的话，webpack打包出来后的图片地址路径都不对，
所以贴出来，希望有人能帮助我，解决这个问题！
<br />
自我查找原因：webpack配置有问题，url-loader  css-loader后面的配置项（?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:2]）可能更改了路径，但是自己一直找不到解决的方法。
<br />

请列位指出此项目的错误之处，万分感谢



<br />
Description: image path problem is a big problem, who can help me？？？？          thank you
Explanation: the reason to use this path to build the project, just because if the path is not the case,
webpack package out of the picture address path is wrong,
So stick it out and hope someone can help me to solve this problem.
<br />

Self reasons: webpack configuration problems, configuration item url-loader behind css-loader(? SourceMap&modules&localIdentName=[name]_[local]_[hash:base64:2]) may change the path, but he could not find a solution.
<br />
<br />
Please list the error of this project, thank you very much！





技术领域：<br />
react<br />
webpack<br />
express<br />
react-router<br />

<br />

ES6<br />
SCSS<br />
redux+react-redux+redux-devTools<br />


热加载－－两种方式<br />
1、webpack-dev-server<br />
2、webpack-dev-middleware和webpack-hot-middleware

<br />


还在陆续加入新的知识



