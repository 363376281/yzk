<template>
	<div class="aspectratio">
		<div class="aspectratio-content">
			<div class="main">		
				<header>
						
					<Carousel autoplay v-model="value2" loop>
	  		        <CarouselItem>
	          	    <div class="demo-carousel"><img src="../assets/first/1.jpg" width="100%" height="100%"/></div>
	      			</CarouselItem>
	    		    <CarouselItem>
	         	    <div class="demo-carousel"><img src="../assets/first/s2.jpg" width="100%" height="100%"/></div>
	     		    </CarouselItem>
	  	  		
    			</Carousel>
						
					
			
						<div class="h1"><input type="text" placeholder="请输入感兴趣的书籍"/></div>
						<div class="h2"><img src="../assets/first/2.gif" width="100%"></div>
				</header>
				<div class="m1">
					<ul class="m11">
						<li class="m111"><img src="../assets/first/3.gif" width="100%" height="100%"></li>
						<li class="m112">听书</li>
					</ul>
					<ul class="m12">
						<li class="m111"><img src="../assets/first/4.gif" width="100%" height="100%"></li>
						<li class="m112">电子书</li>
					</ul>
					<ul class="m12">
						<li class="m111"><img src="../assets/first/5.gif" width="100%" height="100%"></li>
						<li class="m112">借书</li>
					</ul>
					<ul class="m12">
						<li class="m111"><img src="../assets/first/6.gif" width="100%" height="100%"></li>
						<li class="m112">商场</li>
					</ul>
					<ul class="m11s">
						<li class="m111"><img src="../assets/first/7.gif" width="100%" height="100%"></li>
						<li class="m112">笔记</li>
					</ul>
					<ul class="m12s">
						<li class="m111"><img src="../assets/first/8.gif" width="100%" height="100%"></li>
						<li class="m112">日签</li>
					</ul>
					<ul class="m12s">
						<li class="m111"><img src="../assets/first/9.gif" width="100%" height="100%"></li>
						<li class="m112">专栏</li>
					</ul>
					<ul class="m12s">
						<li class="m111"><img src="../assets/first/10.gif" width="100%" height="100%"></li>
						<li class="m112">选书</li>
					</ul>
					
				</div>
				<div class="m2">
					
					
				</div>
				<div class="m3">
					<ul>
						<li class="m31">每日一听</li>
						<li class="m32"><a href="#" style="color:#727272;">查看更多</a></li>
					</ul>	
				</div>
				<div class="m4">
					<ul class="ma41">
						<li class="ma411"><img src="../assets/first/11.gif" width="100%" height="100%"></li>
						<li class="ma412">《痛并快乐着》</li>
					</ul>
					<ul class="ma41">
						<li class="ma411"><img src="../assets/first/11.gif" width="100%" height="100%"></li>
						<li class="ma412">《父母爱情》</li>
					</ul>
					<ul class="ma41">
						<li class="ma411"><img src="../assets/first/11.gif" width="100%" height="100%"></li>
						<li class="ma412">《千万别说你懂买房》</li>
					</ul>
					<ul class="ma41">
						<li class="ma411"><img src="../assets/first/11.gif" width="100%" height="100%"></li>
						<li class="ma412">《白夜行》</li>
					</ul>
					<ul class="ma41">
						<li class="ma411"><img src="../assets/first/11.gif" width="100%" height="100%"></li>
						<li class="ma412s">《当你的才华还撑不起你的梦想时》</li>
					</ul>
				</div>
				<div class="m5"></div>
				<div class="m6">
					<div class="m61">
						精选图书
						
					</div>
					<div class="m62">
						<ul class="ma6s" style="margin-right: 1px;">
							<li class="m621"><img src="../assets/first/12.gif" width="100%" height="100%"></li>
							<li class="m622">商业经管</li>
							<li class="m623">管理</li>
						</ul>
						<ul class="ma6s" style="margin-right: 1px;">
							<li class="m621"><img src="../assets/first/13.gif" width="100%" height="100%"></li>
							<li class="m622">个人成长</li>
							<li class="m623">成长</li>
						</ul>
						<ul class="ma6s" style="margin-right: 1px;">
							<li class="m621"><img src="../assets/first/14.gif" width="100%" height="100%"></li>
							<li class="m622">心理学</li>
							<li class="m623">心理</li>
						</ul>
						<ul class="ma6s" >
							<li class="m621"><img src="../assets/first/15.gif" width="100%" height="100%"></li>
							<li class="m622">生活科普</li>
							<li class="m623">科普</li>
						</ul>
						
					</div>
					
					
					
				</div>
				<div class="m7"></div>
				<div class="m8">
					<div class="m81">
						<ul>
							<li class="m811">猜您喜欢</li>
							<li class="m813">换一批</li>
							<li class="m812"><img src="../assets/first/16.gif" width="100%" height="100%"></li>
						
						</ul>
						
					</div>
					<div class="m82">
						<ul class="m821">
							<li class="m8211"><img src="../assets/first/17.gif" width="100%" height="100%"></li>
							<li class="m8212">运动改造大脑</li>
						</ul>
						<ul class="m821">
							<li class="m8211"><img src="../assets/first/18.gif" width="100%" height="100%"></li>
							<li class="m8212">最美的教育最简单</li>
						</ul>
						<ul class="m821">
							<li class="m8211"><img src="../assets/first/19.gif" width="100%" height="100%"></li>
							<li class="m8212">终结拖延症</li>
						</ul>
						<ul class="m821">
							<li class="m8211"><img src="../assets/first/20.gif" width="100%" height="100%"></li>
							<li class="m8212">我怎么没想到</li>
						</ul>
					</div>
					
					
					
				</div>
				<div class="m9">
					
					专栏推荐
					
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
	header{
		float: left;
		width: 750px;
		height: 430px;
		overflow: hidden;
		position: relative;
	}
	header .h1 input{
		width: 666px;
		height: 71px;
		border-radius: 50px;
		font-size: 26px;
		color:#b0b0b0;
		text-indent: 240px;
	}
	.h1{
		position: absolute;
		top: 14px;
		left: 40px;
	}
	.h2{
		width: 32px;
		height: 33px;
		position: absolute;
		top:35px;
		left: 240px;	
	}

	.m1{
		float: left;
		width: 750px;
		height:400px;
		
		
	}
	.m11{
		float: left;
		width: 101px;
		height: 139px;
		margin-top: 30px;
		margin-left: 50px;
	}	
	.m111{
		float: left;
		width: 100px;
		height:100px;
		
	}
	.m112{
		float: left;
		width: 101px;
		height: 40px;
		font-size: 23px;
		color: #0b0b0b;
		text-align: center;
		line-height: 50px;
	}
	.m12{
		float: left;
		width: 101px;
		height: 139px;
		margin-top: 30px;
		margin-left: 89px;
	}	
	.m11s{
		
		float: left;
		width: 101px;
		height: 139px;
		margin-top: 60px;
		margin-left: 50px;
		
	}
	.m12s{
		
		float: left;
		width: 101px;
		height: 139px;
		margin-top: 60px;
		margin-left: 89px;
		
	}
	.m2{
		float: left;
		width: 750px;
		height: 16px;
		background:#eff1f0;
		
	}
	.m3{
		float: left;
		width: 750px;
		height: 86px;
		border-bottom: 1px solid #f1f1f1;
	
	}
	.m31{
		float: left;
		font-size: 27px;
		color:black;
		line-height: 86px;
		text-indent: 25px;
		
	}
	.m32{
		float:right;
		font-size: 24px;
		color:#727272;
		line-height: 86px;
		margin-right: 27px;
	}
	.m4{
		float: left;
		width: 750px;
		height: 434px;
		
		
	}
	.ma41{
		float: left;
		width: 750px;
		height: 87px;
	}
	.ma411{
		float: left;
		width: 63px;
		height: 63px;
		margin-top: 11px;
		margin-left: 24px;
	}
	.ma412{
		float: left;
		width: 632px;
		height: 85px;
		border-bottom: 2px solid #f2f2f2;
		line-height: 85px;
		margin-left: 7px;
		font-size: 28px;
		text-indent: 10px;
		color:#000000;
	}
	.ma412s{
		float: left;
		width: 632px;
		height: 85px;
		line-height: 85px;
		margin-left: 7px;
		font-size: 28px;
		text-indent: 10px;	
		color:#000000;
	}
	.m5{
		float: left;
		width: 750px;
		height: 16px;
		background:#efefef;
		
	}
	.m6{
		float: left;
		width: 750px;
		height: 446px;
			
	}
	.m61{
		float: left;
		width: 750px;
		height: 86px;
		line-height: 86px;
		font-size: 28px;
		text-indent: 24px;
	}
	.m62{
		float: left;
		width: 700px;
		height: 359px;
		margin-left: 25px;
	}
	.ma6s{
		float: left;
		width: 173px;
		height: 359px;
		
	}
	.m621{
		float: left;
		width: 173px;
		height: 235px;	
		
	}
	.m622{
		float: left;
		width: 173px;
		font-size: 25px;
		text-align: center;
		line-height: 75px;
		color: black;
	}
	.m623{
		float: left;
		width: 173px;
		text-align: center;
		font-size: 20px;
		color:#adadad;;
	}
	.m7{
		float: left;	
		width: 750px;
		height: 16px;
		background:#eff1f0;
	}
	.m8{
		float: left;
		width: 750px;
		height: 423px;
		border-bottom: 16px solid #eff1f0;
		
	}
	.m81{
		float: left;
		width: 750px;
		height: 100px;
		line-height: 100px;
		
	}
	.m811{
		text-indent: 20px;
		float: left;
		font-size: 27px;
		
	}
	.m813{
		float: right;
		font-size: 26px;
		margin-right: 20px;
		
	}
	.m812{
		float: right;
		width: 25px;
		height: 28px;
		margin-top: 8px;
		margin-right: 10px;
	}
	.m82{
		float: left;
		width: 750px;
		height: 310px;
		
		
	}
	.m821{
		float: left;
		width: 129px;
		height: 310px;
		margin-left: 29px;
		margin-right: 29px;
	}
	.m8211{
		float: left;
		width: 129px;
		height: 191px;
		margin-bottom: 20px;
		
	}
	.m8212{
		font-size: 22px;
		color:#6a6a6a;
		
		
	}
	.m9{
		float: left;
		width: 750px;
		height: 91px;
		font-size: 27px;
		line-height: 91px;
		text-indent: 20px;
		border-bottom: 2px solid #f3f3f3;
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