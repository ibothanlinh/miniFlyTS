// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import enemy from "./enemy";

const {ccclass, property} = cc._decorator;

@ccclass
export default class enemy_mgr extends cc.Component {
    @property({
        type: cc.Prefab
    })
    enemy: cc.Prefab = null;

    @property({
        type: cc.Label
    })
    score_label: cc.Label = null;
    
    scoreCr = 0;

    enemyarr = [];
    lenghtArr = 0;
    isplaying = false;

    // LIFE-CYCLE CALLBACKS:


    // protected onLoad(): void {
    //     cc.director.getCollisionManager().enabled = true;
    // }

    start () {
        this.resetScore();
        this.schedule(this.createOneEnemy, 4);
        this.isplaying = true;
    }
    createOneEnemy () {
        if (this.isplaying){
            let e = cc.instantiate(this.enemy);
            e.parent = this.node;
            e.x = -300 + 600 * Math.random();
            e.y = 750;
            this.lenghtArr = this.enemyarr.push(e);
            cc.log(this.enemyarr);
            e.getComponent(enemy).init(this, this.lenghtArr-1);
        }
        
    }

    destroyEnemy(key){
        this.enemyarr[key].destroy();
        cc.log('key: ', key);
    }

    detroyALLEnemy(){
        this.isplaying = false;
        for (const key in this.enemyarr) {
            this.enemyarr[key].destroy();
            cc.log('stop')
        }
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
