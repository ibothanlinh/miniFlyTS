// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import enemy from "./enemy";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property({
        type: cc.Prefab
    })
    enemy: cc.Prefab = null;

    @property({
        type: cc.Label
    })
    score_label: cc.Label = null;
    
    scoreCr = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.resetScore();
        this.schedule(this.createOneEnemy, 4);
    }
    createOneEnemy () {
        let e = cc.instantiate(this.enemy);
        e.parent = this.node;
        e.x = -300 + 600 * Math.random();
        e.y = 750;
        e.getComponent(enemy).init(this);
    }

    gainScore(){
        this.scoreCr += 1;
        this.score_label.string = 'SCORE: ' + this.scoreCr.toString();
        cc.log(this.scoreCr);
    }

    resetScore(){
        this.scoreCr = 0;
        this.score_label.string = 'SCORE: ' + this.scoreCr.toString();

    }

    // update (dt) {}
}
