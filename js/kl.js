$(function(){
	var kl={
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var k;//记录是第几个礼包
			//划过宝箱显示宝箱内的内容
			$(".content .per").eq(4).find("dl").eq(0).hover(function(){
				$(".zjlb").stop().fadeIn();
			},function(){
				$(".zjlb").fadeOut();
			});
			$(".content .per").eq(6).find("dl").eq(0).hover(function(){
				$(".gjlb").stop().fadeIn();
			},function(){
				$(".gjlb").fadeOut();
			});
			//页面刚加载判断是否登录
			var user=sessionStorage.getItem("user");
			if(user){
				$(".register").show().siblings().hide();
				$(".top h3").show();
			}
			//点击账号登录显示账号登录
			$(".login").on("click",function(){
				$(".mask").fadeIn();					
				$(".mask .parents .dl").show().siblings().hide();	
			})
			//点击退出登录
			$(".register").on("click",function(){
				sessionStorage.removeItem("user");
				$(this).hide().siblings().show();
				$(".top h3").hide();
				$(".content .per").find(".lingqu .lq").show().siblings().hide();
			})
			//点击领取按钮显示选择角色
			$(".content .per .lq").on("click",function(){
				i=$(this).parents(".per").index();
				if(sessionStorage.getItem("user")){//判断是否已登录
					$(".mask").fadeIn();
					$(".mask .parents .select").show().siblings().hide();
				}else{
					$(".mask").fadeIn();					
					$(".mask .parents .dl").show().siblings().hide();					
				}				
			});
			//点击select下的确定按钮领取礼包
			$(".select p a").on("click",function(){
				$(".notice").show().siblings().hide();
				$(".content .per").eq(i).find(".lingqu .disabled").show().siblings().hide();
			});
			//点击返回遮罩层消失
			$(".notice p").on("click",function(){
				$(".mask .per").eq(1).show().siblings().hide();
				$(".mask").fadeOut();
			})
			//点击dl遮罩层登录按钮显示选择角色
			$(".dl p").on("click",function(){
				if($("#pass").val()){//简单判断是否登录成功
					$(".dl .information").html("");
					sessionStorage.setItem("user","user");					
					$(".mask").fadeOut();
					$(".top h3").show();
					$(".top ul .register").show().siblings().hide();
				}else{
					$(".dl .information").html("错误提示");
				}
			});
			//点击差号消失
			$(".mask .parents .per h2 span").on("click",function(){
				var i=$(this).parents(".per").index();
				console.log(i);
				if(i==0||i==1){//
					$(".mask").fadeOut();
				}else{
					$(".mask .per").eq(1).show().siblings().hide();
					$(".mask").fadeOut();
				}
			});
		},
		render:function(){
			var that=this;
			
		},
		close:function(str){
			
		}
	};
	kl.init();
})