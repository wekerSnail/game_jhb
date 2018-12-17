var game = null
$(function () {


    //切换页面
    window.change = function change(index) {
        var allPart = $('.part')
        allPart.addClass('hidden')
        $(allPart[index]).removeClass('hidden')
        var allChildren = $(allPart)[index].children
        $.each(allChildren, function (i, j) {
            $(j).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated zoomIn')
            })
        })
    }

    //加载数据
    var img = new Image();
    var picArr = ['./img/f0.png', './img/f1.png', './img/backMain.png', './img/bg.png',
        './img/bg2.png', './img/f2.png', './img/bt_again.png', './img/bt_backMain.png', './img/bt_regular.png',
        './img/bt_start.png', './img/caishen.png',
        './img/caishen2.png', './img/gange_bt.png', './img/over.png', './img/f3.png', , './img/regular_title.png'
    ]
    var now = 0;
    loadImg();

    function loadImg() {
        img.src = picArr[now];

        function go() {
            now++;
            if (now < picArr.length) {
                loadImg()
            } else {
                start()
            }
        }

        img.onerror = go;
        img.onload = go;
    }

    function start() {
        $('.load').addClass('hidden') //隐藏加载界面
        //显示第一个页面
        change(0)
        //生成排名排版
        render_ranks()
        //开始游戏
        $('.part1_start').tap(function () {
            game = new Game('#canvas')
            change(1)
        })
        $('.btn_again').tap(function () {
            game = new Game('#canvas')
            change(1)
        })
        //游戏规则
        $('.part1_regular').tap(function () {
            change(3)
        })

        //返回首页
        $('.rank_back').tap(function () {
            change(0)
        })
        $('.regular_back').tap(function () {
            change(0)
        })
        $('.btn_index').tap(function () {
            change(0)
        })
        //排名生成
        function render_ranks() {
            var line = 10
            var plays = $('.players')
            for (var a = 0; a < line; a++) {
                var play = $('<li class="player ' + color(a) + '"></li>').appendTo(plays)
                $('<div class=player_num>' + (a + 1) + '</div>').appendTo(play)
                var num = $('<div class="player_name"></div>').appendTo(play)
                $('<div class="headr"></div>').appendTo(num)
                $('<span>您的排名</span>').appendTo(num)
                $('<div class="player_point">2500</div>').appendTo(play)
            }
        }

        //排名颜色
        function color(a) {
            var cla = "";
            if (a % 2 == 0) {
                cla += 'wt'
            } else {
                cla += 'red'
            }

            if (a == 0) {
                cla += ' yellow'
            } else {
                cla += ' white'
            }
            return cla
        }
    }

})