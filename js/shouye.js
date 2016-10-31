

		function gundong() {
			var nowPage = 0;	//信号量。信号量的合法值0、1、2、3、4
			var lock = true;

			$(document).mousewheel(function(e,delta){
				if(lock){
					//往下滚动-1；往上滚动1
					var theOldPage = nowPage;
					nowPage = nowPage - delta;	//减号的作用，就是根据实际情况来加减。

					//验收，如果你超过了4，那么我们变为4；再如果你小于了0，那么我们变为0。
					if(nowPage > 3){
						nowPage = 3;
					}else if(nowPage < 0){
						nowPage = 0;
					}

					//jQuery只负责css的改变！
					$(".content").css("transform","translateY(" + nowPage * -100 + "%)");
					$(".nav-center ul li div").eq(nowPage).addClass("cur").parent().siblings().children().removeClass("cur");
					$(".circles ul li").eq(nowPage).addClass("cur").siblings().removeClass("cur");

		};

					//函数节流
					lock = false;
					$(".page").eq(nowPage).addClass("cur").siblings().removeClass("cur")

					//指定秒数后，打开lock
					setTimeout(function(){
						lock = true;
					},1000);
				});


			//导航点击栏跳转
			$(".nav-center ul li").click(function(){
				nowPage = $(this).index();
				$(".content").css("transform","translateY(" + nowPage * -100 + "%)");
				$(".nav-center ul li div").eq(nowPage).addClass("cur").parent().siblings().children().removeClass("cur");
				$(".circles ul li").eq(nowPage).addClass("cur").siblings().removeClass("cur");
				$(".page").eq(nowPage).addClass("cur").siblings().removeClass("cur")

			});


			//banner
			var nowimage = 0;
			function fun(){
				$(".page0 ul li").eq(nowimage).fadeOut(600);
				nowimage++;
				if(nowimage > 2){
					nowimage = 0;
				}

					$(".page0 ul li").eq(nowimage).fadeIn(600);
			}
			var timer = setInterval(fun,3000)

			//小圆点滚动页面
			$(".circles ul li").click(function(){
				nowPage = $(this).index();
				$(".content").css("transform","translateY(" + nowPage * -100 + "%)");
				$(this).addClass("cur").siblings().removeClass("cur")
				$(".nav-center ul li div").eq(nowPage).addClass("cur").parent().siblings().children().removeClass("cur");

			 //去到的页面带cur的动
			$(".page").eq(nowPage).addClass("cur").siblings().removeClass("cur")


	});
			// TAB滑动
			$(".page3 .left-btn li").click(function(){
				$(".page3 .tab .tab-ul").animate({"left":-967 * $(this).index()},500);
			});

// 电脑内容


 			// 点击小图看大图

 			var $BLACKCOVER = $(".BLACKCOVER");
			var $bigShow = $(".bigShow");
			var $bigImg = $bigShow.children("img");

			$(".two .show-box li").click(function(){
				//让大黑布展示：
				$BLACKCOVER.fadeIn();
				$bigShow.fadeIn();
				//让大图的src，变成你点击的li里面的data-large属性：
				$bigImg.attr("src",$(this).attr("data-large"));
				//让大图显示
				$bigShow.show();

			});

			//关闭业务
			$(".close , .BLACKCOVER").click(function(){
				$BLACKCOVER.fadeOut();
				$bigShow.hide();
			});
			// 鼠标经过透明条上拉
		if (!$(".show-box li div").is(":animated")) {
			$(".show-box li").mouseenter(function(){

					$(this).children("div").slideDown();

			});
			$(".show-box li").mouseleave(function(){
					$(this).children("div").slideUp();

			});
		};
		// phone轮播
 			var nowphone = 0;
 			$(".page3 .tab .tab-ul .three .three-ul li").clone().appendTo(".page3 .tab .tab-ul .three .three-ul");
 		function phone(){
 			if (nowphone < 16){
 				nowphone++;
 				$(".page3 .tab .tab-ul .three .three-ul").animate({"left":nowphone * -330}
		 				,800);
 			}else{
		 			nowphone = 0;
		 			$(".page3 .tab .tab-ul .three .three-ul").animate({"left":17 * -330},1000,function()
						{$(this).css("left",0)
		 			});
 				}
 		}
 			var time = setInterval(phone,2000);
			$(".page3 .tab .tab-ul .three .three-ul").hover(function(e) {
                clearInterval(time);
            },function(){
				time = setInterval(phone,2000);
			});
};
