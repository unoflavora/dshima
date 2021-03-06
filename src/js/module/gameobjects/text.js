import Transform from "./transform/text_transform";
import { Hierarky } from "./constraints/constraints_index";

/**
 * @class
 * This class is a gameobject to manage Text Type Object
 */
export default class Text {
    
    /** 
    * @param {Phaser.Scene} scene 
    * @param {Number} x
    * @param {Number} y
    * @param {String} text
    * @param {Phaser.Types.GameObjects.Text.TextStyle} [style]
    */
    constructor(scene, x, y, text, style){
        
        /** @private @type {Phaser.Scene} */
        this.scene = scene;

        /** @public @readonly @type {Phaser.GameObjects.Text} */
        this.gameobject = this.scene.add.text(x, y, text, style);

        /** @public @readonly @type {Transform} */
        this.transform = new Transform(this.scene, this.gameobject);

        /** @public @readonly @type {Hierarky} */
        this.hierarky = new Hierarky(this.scene, this.transform);
        
    }
}