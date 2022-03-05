// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bkCamera extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    protected start(): void {
       
        // cc.tween(this.node).repeatForever(cc.tween().to(10, {position: cc.v2(0,1440)})
        // .call(()=>{this.node.y = 0})).start();
        cc.tween(this.node).repeatForever(cc.tween().to(10, { position: cc.v2(0, 1440) })
          .call(() => {
            this.node.y = 0;
          })
      ).start();
    }

    stopMove(){
      this.node.stopAllActions();
    }

    // start () {
    //     cc.tween(this.node).repeatForever(cc.tween().to(10, {position: cc.v2(0,1440)})
    //     .call(()=>{this.node.y = 0})).start();
    // }

    // update (dt) {}
}
