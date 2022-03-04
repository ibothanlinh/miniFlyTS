// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class gamePlay extends cc.Component {
    @property({
        type: cc.Prefab
    })
    popup: cc.Prefab = null;
    // @property({
    // })

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {

    // }

    // update (dt) {}

    popupGameOver(number){
        // let gameOver = cc.instantiate(this.popup);
        // this.node.addChild(gameOver)
        // cc.log(123);
        cc.log(number);
    }
}
