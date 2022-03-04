// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    dir = 0;
    speed_x = 0;
    speed_y = 0;
    hp = 0;
    hpLab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    protected onLoad(): void {
        this.dir = Math.random() > 0.5 ? 1 : -1;
        this.speed_x = 50 + Math.floor(120*Math.random());
        this.speed_y = 20 + Math.floor(50 * Math.random());
        this.hp = 40 + Math.floor(60 * Math.random());
    }

    start(){
        this.hpLab = this.node.getComponentInChildren(cc.Label);
        this.hpLab.string = this.hp + '';
    }

    onCollisionEnter (other, self){
        this.hp -= 1;
        if (this.hp <= 0) this.node.destroy();
        this.hpLab.string = this.hp + '';
    }

    protected update(dt: number): void {
        this.node.x += this.speed_x * dt * this.dir;
        if (this.node.x < -cc.winSize.width/2 + this.node.width/2) this.dir = 1;
        if (this.node.x > cc.winSize.width/2 - this.node.width/2) this.dir = -1;
        this.node.y -= this.speed_y*dt;
        if (this.node.y < -800) this.node.y = 800;
    }

    // start () {

    // }

    // update (dt) {}
}
