/*
SnailMS脚本生成器
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		if(cm.判断当前地图怪物数量() > 0){
			cm.sendOk("地图里还有怪物没有被消灭！");
			cm.dispose();
			return;
		}else{
			cm.warpParty(105200110);
			//cm.给当前地图时钟(180, true, true);
			cm.spawnMobOnMap(8910100, 1, -1, 445, 105200110);
			cm.getMap().clearOwnerList();
			cm.getMap().addAllOwnerHere();
			cm.dispose();
		}

	} else {
		cm.dispose();
		return;
	}
}

