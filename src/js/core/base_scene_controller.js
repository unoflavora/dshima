import Phaser from "phaser";

class BaseSceneController extends Phaser.Scene
{    
    constructor(superobj) {
        super(superobj);
    }

    init (data){

    }   

    registerOnceShutdown = (event)=>{
        this.events.once('shutdown', event);
    }

}

export {BaseSceneController}