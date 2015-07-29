Quintus.PlayerCar = function(Q){
    
    
    Q.Sprite.extend("CarPlayer",{
        
        init:function(p){
            this._super(p,{
            delayPower:1,        
            type: Q.SPRITE_PLAYER,
            collisionMask: Q.SPRITE_ENEMY,
            gravityY: 0,
            sheet: "car",
            sprite: "car",
            vy: 0,
            speedX:0
            });
            this.add('2d, animation');
            Q.audio.play('alarm_lock.mp3');
            var that = this;
            setTimeout(
                function(){that.initPropierties()},1000);
        },
        doit:function(){
            this.stage.viewport.centerOn(0 ,this.p.y-240 );
        },
        initPropierties:function(){
            console.log("holi boli")
            this.on("step","updatestep");
            this.stage.insert(new Q.EnemyThrower());
            var p = this.p;
            p.vy =  -200;
            p.speedX = 200;
        },
        updatestep:function(dt){
            var p = this.p;
            this.stage.viewport.centerOn(0 ,this.p.y-240 );
            if(Q.inputs["left"]){
                p.vx = -p.speedX;
            }else if(Q.inputs["right"]){
                p.vx = p.speedX;
            }else{
                p.vx=0;
            }

        }
        
    })
    
}