/*
 ZEVMS冒险岛(079)游戏服务端
 推雪球比赛
 */
function action() {
    cm.给物品(3010070,3);
	cm.说明文字("恭喜你获取 "+cm.显示物品(3010070)+" x 3");
	cm.全服黄色喇叭( "  恭喜玩家" +cm.getPlayer().getName()+ "获得推雪球活动奖励");
	cm.对话结束();
}