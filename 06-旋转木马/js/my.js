window.onload = function() {
    var flag = true; //节流阀

    var config = [{
        "width": 400,
        "top": 20,
        "left": 50,
        "opacity": 0.2,
        "zIndex": 2
    }, {
        "width": 600,
        "top": 70,
        "left": 0,
        "opacity": 0.8,
        "zIndex": 3
    }, {
        "width": 800,
        "top": 100,
        "left": 200,
        "opacity": 1,
        "zIndex": 4
    }, {
        "width": 600,
        "top": 70,
        "left": 600,
        "opacity": 0.8,
        "zIndex": 3
    }, {
        "width": 400,
        "top": 20,
        "left": 750,
        "opacity": 0.2,
        "zIndex": 2
    }];
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    assign();

    wrap.onmouseover = function() {
        animate(arrow, { "opacity": 1 });
    }

    wrap.onmouseout = function() {
        animate(arrow, { "opacity": 0 });
    }

    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function() {
                flag = true; //动画执行完成后才允许执行下一次动画
            });
        }
    }

    arrLeft.onclick = function() {
        if (flag) {
            config.unshift(config.pop());
            assign();
        }
    }

    arrRight.onclick = function() {
        if (flag) {
            config.push(config.shift());
            assign();
        }
    }
}
