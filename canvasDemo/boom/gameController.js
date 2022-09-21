const mirror = [  
    {
        name: 'mirrorA',
        x: 0, 
        y: 0, 
        deg: 180,
        icon: './mirror.png', // 发射器图标
        width: 500, // 发射器宽度
        height: 10 // 发射器高度
    },    
    {
        name: 'mirrorB',
        x: 500, 
        y: 0, 
        deg: 270,
        icon: './mirror.png', // 发射器图标
        width: 500, // 发射器宽度
        height: 10 // 发射器高度
    },   
    {
        name: 'mirrorC',
        x: 500, 
        y: 500, 
        deg: 0,
        icon: './mirror.png', // 发射器图标
        width: 500, // 发射器宽度
        height: 10 // 发射器高度
    },     
    {
        name: 'mirrorD',
        x: 0, 
        y: 500, 
        deg: 90,
        icon: './mirror.png', // 发射器图标
        width: 500, // 发射器宽度
        height: 10 // 发射器高度
    },   
]

const laserTransmitter = [
    {
        name: 'laserA',
        oriName: 'laserA',
        x: 50, // 发射器x坐标，激光开始的x坐标
        y: 50, // 发射器y坐标，激光结束的y坐标
        deg: 208,
        icon: './moon.png', // 发射器图标
        width: 100, // 发射器宽度
        height: 100 // 发射器高度
    }
]

var Game = {
    start: function() {
        GSctx.clearRect(0, 0, stageWidth, stageHeight); // 先清理画布
        this.init(); //初始化
        
        this.update(); // 更新画面
        this.bindTouchAction(); // 绑定触摸操作
        this.bindClickAction(); // 绑定鼠标事件
    },
    init: function() {
        // 激光初始化
        this.lasers = [];
        for(let opts of laserTransmitter) {
            this.lasers.push(new LaserTransmitter(opts))
        }

        for(let opts of mirror) {
            let newMirror = new Mirror(opts);
            this.mirrors.push(newMirror);
        }

        // 制作碎块
        this.makeBricks();
    },
    makeBricks() {
        this.bricks = [];
        if(this.mirrors) {
            for(let mirror of this.mirrors) {
                this.bricks = this.bricks.concat(mirror.makeBricks());
            }
        }
    },
    updateElement: function() {
        let self = this;
        let lasers = this.lasers;

        // for(laser of lasers) {
        //     let aims = this.crashOrder(laser, this.bricks); // 将碎片依照射线中心重新排序
        //     laser.getEndXY();
        //     crashAims:
        //     for(aim of aims) {
        //         let oriAim = aim.ori;
        //         let oriAimClass = oriAim.constructor; //到原型中查这个属性
        //         let oriAimName = oriAim.name;
        //         if(oriAimName != laser.oriName) {
        //             // 不同目标反射规则不同
        //             if(oriAimClass == Mirror) {
        //                 let node = laser.isIntersect(aim, 0)
        //                 if(node) {
        //                     laser.endX = node.x;
        //                     laser.endY = node.y;
        //                     // console.log(oriAim)
        //                     if(oriAim.canReflect(laser.deg)) {
        //                         let light = new LaserTransmitter({
        //                             name: 'reflect' + Date.now(),
        //                             oriName: oriAimName,
        //                             x: node.x / Config.window.scale, 
        //                             y: node.y / Config.window.scale, 
        //                             deg: calRefAngle(laser.deg, oriAim.deg),
        //                             icon: imgBox['lightStart'], // 发射器图标
        //                             width: Config.objSize.lightStart.width, // 发射器宽度
        //                             height: Config.objSize.lightStart.height // 发射器高度
        //                         });
                                
        //                         // console.log(light)
        //                         // 剔除重复的反射线
        //                         let canReflect = true;
        //                         for(laser of lasers) {
        //                             if(laser.x == light.x && laser.y == light.y && laser.deg == light.deg) {
        //                                 canReflect = false;
        //                                 break;
        //                             }
        //                         }
        //                         if(canReflect) {
        //                             lasers.push(light);
        //                         }
        //                     }
                
        //                     break crashAims;
        //                 }
        //             }
        //         } 
        //     }
           
        // }

        return true;
    },
    update: function() {
        console.log(47878)
        let self = this;
        let gameFlag = this.updateElement(); // 更新元素状态，gameFlag如果为false的话说明游戏应该结束了

        if(gameFlag) {
            GSctx.clearRect(0, 0, stageWidth, stageHeight); //先清理画布
            this.draw();
            this.lasersLength =  this.lasers.length; //记录当前反射线的数量
            this.lasers.splice(1, this.lasers.length - 1); //绘画结束后删除所有的反射光线
            this.updateAnim = requestAnimFrame(function() {
                self.update();
            });
        }
    },
    draw: function() {
        if(this.mirrors) {
            for(let mirror of this.mirrors) {
                mirror.draw();
            }
        }
        if(this.lasers) {
            for(let laser of this.lasers) {
                laser.draw();
            }
        }   
    },
    bindTouchAction: function() {
        let lasers = this.lasers;
        let mirrors = this.mirrors;
        let home = this.home;
        let timeOutEvent = '';

        let startX = 0,
            startY = 0,
            endX = 0,
            endY = 0,
            activeMirror = '';

        gameStage.addEventListener('touchstart', (e) => {
            startX = e.targetTouches[0].pageX - Config.window.offectX;
            startY = e.targetTouches[0].pageY - Config.window.offectY;
            e.preventDefault();
        });        
    },
    bindClickAction: function() {
        let lasers = this.lasers;
        let mirrors = this.mirrors;
        let home = this.home;
        let timeOutEvent = '';

        let startX = 0,
            startY = 0,
            endX = 0,
            endY = 0,
            activeMirror = '';

        gameStage.addEventListener('click', (e) => {
            startX = e.pageX - Config.window.offectX;
            startY = e.pageY - Config.window.offectY;
            e.preventDefault();
        }) 
    },
    crashOrder: function(main, items) {
        // 根据目标到中心目标的距离来判断碰撞的先后顺序
        let sortItems = [];
        let mainX = main.x;
        let mainY = main.y;
        for(let item of items) {
            item.d = nodesD({x: item.x, y: item.y}, {x: mainX, y: mainY});
            sortItems.push(item);
        }

        sortItems.sort((item1, item2) => {
            return item1.d - item2.d;
        });

        for(let item of sortItems) {
            delete item.d
        }

        return sortItems;
    },
    end: function() {
        this.status = 'end'; // 游戏结束
        cancelAnimFrame(this.updateAnim); // 清除动画更新
        pauseSound(nowLv.bgMusic);  // 清除声音
        //清空使用过的变量
        this.lasers = undefined;
        this.home = undefined;
        this.wolves = undefined;
        this.walls = undefined;
        this.mirrors = undefined;
        this.bricks = undefined;
        this.clouds = undefined;

        return true;
    }
}

Game.start()


