// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bullet_mgr extends cc.Component {
    @property({
        type: cc.Prefab
    })
    bullet: cc.Prefab = null;
    @property({
        type: cc.Node
    })
    player: cc.Node = null;

    pool = null;
    

    protected onLoad(): void {
        cc.director.getCollisionManager().enabled = true;
        this.pool = new cc.NodePool('bullet');
        for (let i = 0; i < 100; i++){
            this.pool.put(cc.instantiate(this.bullet));
        }
        console.log(this.pool);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.schedule(this.createManyBullet, 0.4);
    }

    createManyBullet (){
        if (this.pool){
            let px = this.player.x;
            let py = this.player.y + 80;
            let offset = 45;
            this.createOneBullet(px, py);
            this.createOneBullet(px + offset, py);
            this.createOneBullet(px - offset, py);
        }
        
    }

    createOneBullet (x, y) {
        let b = this.pool.get(this.pool);
        if (!b) {
            this.pool.put(cc.instantiate(this.bullet));
            b = this.pool.get(this.pool);
        }
        b.parent = this.node;
        b.x = x;
        b.y = y;
    }

    // update (dt) {}
}
