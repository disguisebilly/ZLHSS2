/*
 ZEVMS冒险岛(079)游戏服务端
 50级奖励
 */
var huoqu = "#fUI/UIWindow.img/QuestIcon/4/0#";
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
            // if (qm.判断背包消耗栏().isFull()) {
            //     qm.sendNext("消耗栏必须有一个空位。");
            //     qm.对话结束();
            //     return;
            // }
            if (qm.getQuestStatus(4767) == 2) {
                qm.sendOk("你已经领取过奖励，继续努力到60级可以获得更多奖励喔");
                qm.dispose();
            } else {
                qm.sendNext("恭喜你当前等级已经到达 #b50#k 级。\r\n\r\n" + huoqu + "#v2000005# x 50");
            }
        } else if (status == 1) {
            qm.sendOk("下一次奖励为 #b60#k 级。");
            qm.gainItem(2000005, 50);
            //qm.给点券(1000);
		    //判断是否有推广员，如果有，就将部分充值分享给推广员
            if (qm.getBossRank("推广员", 2) > 0) {
            //给推广员发送返利
            qm.Gaincharacterz((qm.getBossRank("推广员", 2)), 300, +3000); }
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}