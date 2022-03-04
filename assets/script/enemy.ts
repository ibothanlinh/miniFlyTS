// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class enemy extends cc.Component {
    // @property({
    //     type: cc.Node
    // })
    // player: cc.Node = null;

    dir = 0;
    speed_x = 0;
    speed_y = 0;
    hp = 0;
    hpLab = null;
    game = null;
    collect = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    protected onLoad(): void {
        this.enabled = false;
        this.dir = Math.random() > 0.5 ? 1 : -1;
        this.speed_x = 50 + Math.floor(120*Math.random());
        this.speed_y = 20 + Math.floor(50 * Math.random());
        this.hp = 20 + Math.floor(30 * Math.random());
        this.node.getChildByName('hp').getComponent(cc.Label).string = this.hp + '';
    }

    // start(){
    //     this.hpLab = this.node.getComponentInChildren(cc.Label);
    //     this.hpLab.string = this.hp + '';
    //     // cc.log(typeof this.player.group);
    // }

    init (game){
        this.game = game;
        this.enabled = true;
        this.collect = false
    }

    reuse (game) {
        this.init(game);
    }
    // getPlayDistance(){
    //     var playerPos = this.player.getPosition();

    // }

    onCollisionEnter (other, self){
        this.hp -= 1;
        if (this.hp <= 0 && !this.collect){
            this.node.destroy();
            this.game.gainScore();
            this.collect = true;
        } 
        this.node.getChildByName('hp').getComponent(cc.Label).string = this.hp + '';
        // cc.log('other: ' , other.group);
        // cc.log('self: ', self.group);

        // var enemy = self;
        // if (other === this.player.group){

        // }
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
