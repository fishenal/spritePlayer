(function () {
    window.SpritePlayer = function (conf) {
        var defaultConf = {
            width: 100,
            speed: 100,
            forward: true,
            frameNum: 12   
        }
        for (var prop in conf) {
            if (!conf[prop]) {
                this[prop] = defaultConf[prop];    
            }
            else {
                this[prop] = conf[prop];    
            }
        }
        this.Stage = document.createElement('div');
        document.body.appendChild(this.Stage);
        this.Stage.style.backgroundImage = 'url(' + this.backgroundImage + ')';
        this.Stage.style.height = this.height + 'px';
        this.Stage.style.width = this.width + 'px';
    }
    SpritePlayer.prototype.run = function () {
        var stageNum = 0;
        var me = this;
        var pre = this.forward ? '-' : '';
        clearInterval(this.intervalId);
        this.intervalId = setInterval(function () {
            var position = pre + stageNum * me.width + 'px 0px';
            me.Stage.style.backgroundPosition = position;
            if (stageNum <= me.frameNum) {
                stageNum ++;    
            }
            else {
                stageNum = 0;
            }
        }, this.speed);
    }
    SpritePlayer.prototype.stop = function () {
        clearInterval(this.intervalId);
    }
})()