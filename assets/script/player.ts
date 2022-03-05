// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import touch_move from "./touch-move";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    /**
     * @type {Player}
     */
    @property({
        type: touch_move
    })
    canvas: touch_move = null;


    onCollisionEnter (other, self){
        this.canvas.endGame();
        // gameOver.setPosition(cc.v2(0,0));
        // cc.log(gameOver.x, gameOver.y);
    }

    // update (dt) {}
}
