Quintus.EnemyrCar = function(Q){

    Q.GameObject.extend("EnemyThrower",{
        init:function(){
            this.p = {
                launchDelay : 1,
                launch:1
            }
        },
        
        update: function(dt){
            var p = this.p;
            p.launch -= dt;
            
            if(p.launch<0){
                this.stage.insert(new Q.Enemy());
                this.p.launch=2;
            }
            
        }
        
    });
    
    Q.Sprite.extend("Enemy",{
        
        init:function(p){
            
            var positions = [-120,0,120];
            var player = Q("CarPlayer").first();
            
            this._super(p,{
                player:player,
                x:positions[Math.round(Math.random()*2)] ,
                y:player.p.y - Q.height - 50,
                type: Q.SPRITE_ENEMY,
                gravityY: 0,
                sheet: "car",
                sprite: "enemy",
                vy: -20,
                sensor:true
            });
            this.add('2d, animation');
        },
        
        step:function(dt){
            var p = this.p;
            
            if(p.y>p.player.p.y+100)this.destroy();
            
        }
   
    })
    
}