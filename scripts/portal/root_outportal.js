﻿/*
* 鲁塔比斯任务出口
* author by 99
 */
function start() {
	if (pi.getQuestStatus(30002) == 1) {
		pi.sendPlayerToNpc("果然有出口。应该把这一事实告诉少女。");
		pi.getPlayer().setInfoQuestStat(30002, "outportal", "2");
		return;
	}
	pi.warp(105010200);
}
