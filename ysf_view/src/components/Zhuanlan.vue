<template>
	<div class="aspectratio">
		<div class="aspectratio-content">
			<div class="main">
				<div class="m1">
					<ul>
						<li class="m11"><img src="../assets/zhuanlan/1.gif" width="100%" height="100%"></li>
						<li class="m12">专栏</li>
					</ul>	
				</div>
				<div class="s">
						<Carousel autoplay v-model="value2" loop>
	  		   		  	<CarouselItem>
	        	<div class="demo-carousel"><img src="../assets/first/1.jpg" width="100%" height="100%"/></div>
	      				</CarouselItem>
	    		  		<CarouselItem>
	      		<div class="demo-carousel"><img src="../assets/first/s2.jpg" width="100%" height="100%"/></div>
	     		  		</CarouselItem>
	    		
    					</Carousel>
					
					
				</div>
				<div class="m2">	
						<ul>
							<li class="m21"><img src="../assets/zhuanlan/2.gif" width="100%" height="100%"></li>
							<li class="m22">推荐</li>
							<li class="m23"><img src="../assets/zhuanlan/3.gif" width="100%" height="100%"></li>
						</ul>
				</div>
				<div class="m10">
					
					<ul class="m101">
						<li class="m1011"><img src="../assets/first/21.gif" width="100%" height="100%"></li>
					</ul>
					<ul class="m102">
						<li class="m1021">窦令成——话说对了，事就成了</li>
						<li class="m1022">作为鼎积教育集团董事长、鼎积商学院院长、教授，窦令成导师被聘请为浙江大学、清华...</li>
						<li class="m1023">已更新至第0节</li>
						<li class="m1024">0人订购</li>
						<li class="m1025"><img src="../assets/first/22.gif" width="100%" height="100%"></li>	
						<li class="m1026">188元</li>
					</ul>
					
				</div>
				<div class="m10">
					
					<ul class="m101">
						<li class="m1011"><img src="../assets/zhuanlan/4.gif" width="100%" height="100%"></li>
					</ul>
					<ul class="m102">
						<li class="m1021">窦令成——话说对了，事就成了</li>
						<li class="m1022">作为鼎积教育集团董事长、鼎积商学院院长、教授，窦令成导师被聘请为浙江大学、清华...</li>
						<li class="m1023">已更新至第0节</li>
						<li class="m1024">0人订购</li>
						<li class="m1025"><img src="../assets/first/22.gif" width="100%" height="100%"></li>	
						<li class="m1026">188元</li>
					</ul>
					
				</div>
				<div class="m10">
					
					<ul class="m101">
						<li class="m1011"><img src="../assets/zhuanlan/5.gif" width="100%" height="100%"></li>
					</ul>
					<ul class="m102">
						<li class="m1021">窦令成——话说对了，事就成了</li>
						<li class="m1022">作为鼎积教育集团董事长、鼎积商学院院长、教授，窦令成导师被聘请为浙江大学、清华...</li>
						<li class="m1023">已更新至第0节</li>
						<li class="m1024">0人订购</li>
						<li class="m1025"><img src="../assets/first/22.gif" width="100%" height="100%"></li>	
						<li class="m1026">188元</li>
					</ul>
					
				</div>
				<div class="m10">
					
					<ul class="m101">
						<li class="m1011"><img src="../assets/zhuanlan/6.gif" width="100%" height="100%"></li>
					</ul>
					<ul class="m102">
						<li class="m1021">窦令成——话说对了，事就成了</li>
						<li class="m1022">作为鼎积教育集团董事长、鼎积商学院院长、教授，窦令成导师被聘请为浙江大学、清华...</li>
						<li class="m1023">已更新至第0节</li>
						<li class="m1024">0人订购</li>
						<li class="m1025"><img src="../assets/first/22.gif" width="100%" height="100%"></li>	
						<li class="m1026">188元</li>
					</ul>
					
				</div>
				<div class="m10">
					
					<ul class="m101">
						<li class="m1011"><img src="../assets/zhuanlan/7.gif" width="100%" height="100%"></li>
					</ul>
					<ul class="m102">
						<li class="m1021">窦令成——话说对了，事就成了</li>
						<li class="m1022">作为鼎积教育集团董事长、鼎积商学院院长、教授，窦令成导师被聘请为浙江大学、清华...</li>
						<li class="m1023">已更新至第0节</li>
						<li class="m1024">0人订购</li>
						<li class="m1025"><img src="../assets/first/22.gif" width="100%" height="100%"></li>	
						<li class="m1026">188元</li>
					</ul>
					
				</div>
		</div>
	</div>
</div>
</template>

<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>

<style>
	.main{
		width: 750px;
		
	}
	.m1{
		float: left;
		width: 750px;
		height: 93px;
		border-bottom: 1px solid #c3dcc5;
		border-top: 1px solid #d2d2d2;
	}
	.m11{
		float: left;
		width: 22px;
		height: 38px;
		margin-top: 30px;
		margin-left: 26px;
	}
	.m12{
		
		font-size: 32px;
		line-height: 93px;
		text-indent: 295px;
	}
	.s{
		float: left;
		height: 430px;
		width: 750px;
		overflow: hidden;
	}
	.m2{
		float: left;
		width: 750px;
		height: 88px;
		border-bottom:1px solid #f3f3f3;
	}
	.m21{
		float: left;
		width: 38px;
		height: 33px;
		margin-top: 28px;
		margin-left: 20px;
	}
	.m22{
		float: left;
		font-size: 28px;
		line-height: 88px;
		text-indent: 20px;
		color: black;
	}
	.m23{
		float: right;
		width: 16px;
		height: 27px;
		margin-top: 28px;
		margin-right: 27px;
	}
	.m10{
		float: left;
		width: 702px;
		height: 298px;
		margin-left: 24px;
		border-bottom: 1px solid #f2f2f2;
	}
	.m101{
		
		float: left;
		width: 167px;
		height: 251px;
		margin-top: 23px;
		
	}
	.m1011{
		float: left;
		width: 167px;
		height: 251px;
		
		
	}
	.m102{
		float: left;
		width: 513px;
		height: 251px;
		margin-top: 23px;
		margin-left: 20px;
	}
	.m1021{
		font-size: 29px;
		color: black;
		
		
	}
	.m1022{
		font-size: 24px;
		color: #7c7c7c;
		margin-top: 10px;
		
	}
	.m1023{
		font-size: 24px;
		color: #9e9e9e;
		margin-top: 20px;
		
	}
	.m1024{
		float: left;
		font-size: 22px;
		color:#b9b9b9;
		margin-top: 40px;
		
	}
	.m1025{
		margin-top: 45px;
		float: left;
		width: 21px;
		height: 22px;
		margin-left: 15px;
	}
	.m1026{
		float: right;
		font-size: 22px;
		color: #c88216;
		margin-top: 40px;
	}
</style>