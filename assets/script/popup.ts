// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class popupGameOver extends cc.Component {
    @property({
        type: cc.Label
    })
    score: cc.Label = null;

    @property({
        type: cc.Label
    })
    h_Score: cc.Label = null;

    loadGame(){
        cc.director.loadScene('game');
    }

    heighestScore(heighestScore){
        this.h_Score.string = `HIGHEST SCORE: ${heighestScore.score}`;
    }

    scoreCr(score: number){
        this.score.string = `SCORE: ${score}`;
    }

    // update (dt) {}
}
