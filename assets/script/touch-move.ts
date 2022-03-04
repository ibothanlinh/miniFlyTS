// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({
        type: cc.Node
    })
    player: cc.Node = null;

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
        cc.log(cc.winSize.width/2);
        cc.log(-cc.winSize.width/2);
        cc.log(this.player.x, this.player.y);
        cc.log(cc.winSize.height/2);
        cc.log(-cc.winSize.height/2);
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

        cc.log(this.player.x, this.player.y);

    }

    // update (dt) {}
}
