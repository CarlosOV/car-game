Quintus.PlayerCar = function(Q){
    
    
    Q.Sprite.extend("CarPlayer",{
        
        init:function(p){
            this._super(p,{
              type: Q.SPRITE_PLAYER,
              collisionMask: Q.SPRITE_ENEMY,
              gravityY: 0,
              sheet: "car",
              sprite: "car",
              vy: -200,
              speedX:200
            });
            this.add('2d, animation');
        },
        step:function(dt){
            p = this.p;
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