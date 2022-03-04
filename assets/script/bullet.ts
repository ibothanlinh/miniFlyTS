// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property
    speed =  800;
    @property
    pool = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    protected onLoad(): void {
        // this.pool = new cc.NodePool('Star');
    }
    
    reuse (pool){
        this.pool = pool;
    }

    onCollisionEnter (other, self){
        this.pool.put(this.node);
    }

    protected update(dt: number): void {
        this.node.y += this.speed *dt;
        if (this.node.y > 800){
            this.pool.put(this.node)
        }
    }

    start () {

    }

    // update (dt) {}
}
