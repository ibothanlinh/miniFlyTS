// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import enemy_mgr from "./enemy-mgr";
import bullet_mgr from "./bullet-mgr";
import bkCamera from "./bkCamera";
import popupGameOver from "./popup";

const {ccclass, property} = cc._decorator;

@ccclass
export default class touch_move extends cc.Component {
    @property({
        type: enemy_mgr
    })
    enemy: enemy_mgr = null;

    @property({
        type: bullet_mgr
    })
    bullet: bullet_mgr = null;

    @property({
        type: bkCamera
    })
    backGround: bkCamera = null;

    @property({
        type: cc.Node
    })
    player: cc.Node = null;

    @property({
        type: cc.Prefab
    })
    popup: cc.Prefab = null;

    userData = {
        score: 0
    };

    userData_heighestScore = JSON.parse(cc.sys.localStorage.getItem('userData'));

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
        this.player.x = 0;
        this.player.y = -316;

        this.node.on('touchmove',(e) =>{
            let delta = e.getDelta();
            this.player.x += delta.x;
            this.player.y += delta.y;
        }, this);
    }

    endGame(){
        this.node.off('touchmove');
        cc.log('asd');
        this.saveScore();
        let gameOver = cc.instantiate(this.popup);
        this.node.addChild(gameOver)

        this.enemy.detroyALLEnemy();
        this.bullet.pool = null;
        this.backGround.stopMove();
        this.saveScore();
        gameOver.getComponent(popupGameOver).scoreCr(this.enemy.scoreCr);
        gameOver.getComponent(popupGameOver).heighestScore(this.userData_heighestScore);
    }

    saveScore(){
        if (this.enemy.scoreCr > this.userData_heighestScore.score){
            this.userData.score = this.enemy.scoreCr;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.userData));
        }      
    }

    update (dt) {
        if (this.player.x < -cc.winSize.width/2){
            this.player.x = -cc.winSize.width/2;
        } else if (this.player.x > cc.winSize.width/2) {
            this.player.x = cc.winSize.width/2;
        }

        if (this.player.y < -cc.winSize.height/2) {
            this.player.y = -cc.winSize.height/2;
        } else if (this.player.y > cc.winSize.height/2){
            this.player.y = cc.winSize.height;
        }

    }

    // update (dt) {}
}
