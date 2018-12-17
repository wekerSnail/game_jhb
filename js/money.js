(function () {
    var five = new Image();//5
    five.src = "img/f1.png";

    var pig = new Image();//100
    pig.src = "img/f2.png";
	
	var cloud = new Image();//空的
    cloud.src = "img/f3.png";
	
	var boom = new Image();//炸弹
    boom.src = "img/f0.png";

    var moneyEnum = {
        five: {
            image: five,
            speed: 4,
            value: 1,
            widths:127,
			heights:143,
        },
        cloud: {
            image: cloud,
            speed: 4,
            value: 1,
            widths:127,
			heights:143,
        }, pig: {
            image: pig,
            speed: 8,
            value: 5,
            widths:127,
			heights:143,
        }, boom: {
            image: boom,
            speed: 4,
            value: -3,
            widths:83,
			heights:71,
        }
    };


    var money = function (x, type) {
        this.x = x;
        this.y = 0;
        this.type = type;
        this.status = 0;//0正在掉落，1接住 ，2没接住
        this.widths = moneyEnum[this.type].widths;
        this.heights = moneyEnum[this.type].heights;


    }

    money.prototype.draw = function () {
        if (this.status == 0) {
            game.ctx.drawImage(moneyEnum[this.type].image, this.x, this.y, moneyEnum[this.type].widths, moneyEnum[this.type].heights);
        }
    }

    money.prototype.drop = function () {
        //速度叠加
        this.y += moneyEnum[this.type].speed;
        var top = this.y
        var bottom = this.y + this.heights
        var left = this.x
        var right = this.x + this.widths
        var caiY = game.phone.h - game.rect.h
        if (this.status == 0 && caiY <= bottom && ((game.rect.x <= left && left <= (+game.rect.x + game.rect.w)) || (game.rect.x <= right && (+game.rect.x + game.rect.w) >= right))) {//
            this.status = 1;
            game.score += moneyEnum[this.type].value;//记录总分数
        } else if (this.y >= game.phone.h) {
            this.status = 2;
        }
        this.draw();
    }

    window.money = money;
})();