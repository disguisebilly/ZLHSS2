var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4771)==2){
			qm.sendOk("你的奖励已经全部领取完。");
						qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b100#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你获得系统奖励！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2340000# x 2个 #v2049100# 	x 2个");
			qm.gainItem(2340000, 2);
			qm.gainItem(2049100, 2);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}