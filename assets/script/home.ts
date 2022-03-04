// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    highest_score = 0;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.highest_score = 10;
        this.node.getChildByName('Highest_score').getComponent(cc.Label).string = 'SCORE: ' + this.highest_score.toString();
    }
    onStartGame () {
        
        cc.director.loadScene('game');
    }

    // update (dt) {}
}
