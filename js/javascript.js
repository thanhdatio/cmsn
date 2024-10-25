// JavaScript Document
window.onload = function() {
    // 获取元素
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var start = document.getElementById("p1_cc");
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
	var n11=document.getElementById("add");
	var n12=document.getElementById("sub");
    audio.volume = 0.6;
	
	n11.addEventListener("touchstart",function(event){
		if(audio.volume>=0&&audio.volume<=1){
			audio.volume=audio.volume+0.1;
		}	
	},false);
	n12.addEventListener("touchstart",function(event){
		if(audio.volume>=0&&audio.volume<=1){
			audio.volume=audio.volume-0.1;
		}
	},false);
    // 音乐播放完毕时，动画停止
    audio.addEventListener("ended", function(event) {
        music.setAttribute("class", "");//为节点添加属性
        // this.style.animationPlayState = "paused"; 存在兼容性问题
        // this.style.webkitAnimationPlayState = "paused";
    }, false)

    // 点击音乐图标，控制音乐播放效果
    music.addEventListener("touchstart", function() {
        if (audio.paused) {
            audio.play();
            music.setAttribute("class", "play");
        } else {
            audio.pause();
            music.setAttribute("class", "");
        }
    }, false);
	

    // 点击开始，切换下一页
    start.addEventListener("click", function() {
        page1.style.display = "none";
        page2.style.display = "block";
        
		setTimeout(function() {
            page3.style.display = "block";
			page3.style.top = "100%";
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 10500)
    }, false)

    
	//手指滑动切换页面--第一页
    page1.addEventListener("touchstart", function(e) {
        start_y = e.touches[0].clientY;
    }, false)
    page1.addEventListener("touchend", function(e) {
        end_y = e.changedTouches[0].clientY;
        var delta_y = end_y - start_y;
        if (Math.abs(delta_y) < 0.2 * window.innerHeight) {
            return;
        } else {
            if (delta_y < 0) { //下一页
                page1.style.display = "none";
                page2.setAttribute("class", "page");
                page2.style.display = "block";

            } else { //上一页
                page1.style.display = "none";

                page3.style.display = "block";
                // blessing.style.opacity = 1;
            }
        }
    }, false)

    //手指滑动切换页面--第二页
    page2.addEventListener("touchstart", function(e) {
        start_y = e.touches[0].clientY;
    }, false)
    page2.addEventListener("touchend", function(e) {
        end_y = e.changedTouches[0].clientY;
        var delta_y = end_y - start_y;
        if (Math.abs(delta_y) < 0.2 * window.innerHeight) {
            return;
        } else {
            if (delta_y < 0) { //下一页
                page2.style.display = "none";
                page3.style.display = "block";
            } else { //上一页
                page1.style.display = "block";
                page2.style.display = "none";
            }
        }
    }, false)

    //手指滑动切换页面--第三页
    page3.addEventListener("touchstart", function(e) {
        start_y = e.touches[0].clientY;
    }, false)
    page3.addEventListener("touchend", function(e) {
        end_y = e.changedTouches[0].clientY;
        var delta_y = end_y - start_y;
        if (Math.abs(delta_y) < 0.2 * window.innerHeight) {
            return;
        } else {
            if (delta_y < 0) { //下一页
                page1.style.display = "block";
                page3.style.display = "none";
            } else { //上一页
                page2.setAttribute("class", "page");
                page2.style.display = "block";
                page3.style.display = "none";
            }
        }
    }, false)
}
