window.addEventListener("load",function() {
    
    var Q = window.Q = Quintus({
        development:true
    })
            .include("Sprites, Scenes, Input, 2D, Touch, Anim, UI, Audio") // Load any needed modules
              .include("PlayerCar, EnemyrCar")
              .setup({
                  width:640,
                  height:960,
                  scaleToFit: true
              })                           // Add a canvas element onto the page
              .controls()                        // Add in default controls (keyboard, buttons)
              .touch()
              .enableSound(); 
    
    Q.SPRITE_PLAYER = 2;
    Q.SPRITE_ENEMY = 4;
    
    Q.debug=true;
    
    
    Q.scene("level", function(stage){
        
        stage.insert(new Q.Repeater({
            asset: "cuadrado.png"
        }));
    
    //stage.insert(new Q.EnemyThrower());
    
    var player = new Q.CarPlayer();
    stage.insert(player);
    console.log("holi")
    stage.add("viewport");
    player.doit();
    player.play("run");
    
    
        
    });
    
    var assets = [
        "car.json",
        " car.png",
        "cuadrado.png",
        "enemy.json",
        "alarm_lock.mp3",
        "alarm_lock.ogg"
        ]
    
    Q.load(assets.join(", "), function(){
       Q.compileSheets("car.png", "car.json");
       Q.compileSheets("car.png", "enemy.json");
       
       Q.animations("car",{
           run:{frames:[12], rate:1}
       });
       
       Q.animations("enemy",{
           run:{frames:[5], rate:1}
       })
       
       Q.stageScene("level");
    });
    
});