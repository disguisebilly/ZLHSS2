/*
 蜗牛冒险岛(079)游戏服务端
 */
function start() {
	cm.任务完成(6370);
	cm.任务完成(6330);
	if(cm.判断职业()==522){
		if(cm.判断技能等级(5221006)==0){
			cm.给技能(5221006,1,10);
		}
	}
	if(cm.判断职业()==512){
		if(cm.判断技能等级(5121003)==0){
			cm.给技能(5121003,1,10);
		}
	}
    cm.dispose();
}

