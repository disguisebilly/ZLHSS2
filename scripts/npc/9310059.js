var status = 0;
var price = 10000; //砸卷金币
var 单件装备血量上限 = 600;
var 血量随机值 = Math.floor(Math.random() * 10 + 1);
var 失败随机值 = Math.floor(Math.random() * 100 + 1);
function start() {
	if (cm.getPlayer().getMap().getId() != 910000000) {
		cm.dispose();
		return;
	}
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("咳咳。。");
            cm.dispose();
            return;
        }	
        if (mode == 1)
            status++;
        else
            status--;
		if (status == 0) {
			cm.sendNext("嗨~你是不是觉得自己太脆弱了？！如果你有黄金枫叶可以给我，我可以帮助你强化一个装备！不过不要太贪心，我只能为你的装备增加生命值，生命值最大为防御力的五倍哦，不过为了资金流动，我每次都需要1W金币哦。");
			
        } else if (status == 1) {
			/*
				 if (cm.getBossLog("新年洗血次数") >= 10) {
                    cm.sendOk("一天只能十次哦!");
                    cm.dispose();
                    return;
                }
			*/
			
				 if (!cm.haveItem(4000313, 5)) {
                    cm.sendOk("我需要5个黄金枫叶才能帮你干活！");
                    cm.dispose();
                    return;
                }
			
				 if (cm.getMeso() < price) {
                    cm.sendOk("对不起,你没有足够的冒险币,为了岛内建设贡献一份力吧");
                    cm.dispose();
                    return;
                }
			/*
				 if (失败随机值 <= 10) {
					cm.gainItem(4031546, -1);
                    cm.sendOk("哇！是年兽！年兽偷走了你的红包！");
                    cm.dispose();
                    return;
                }
			*/
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    cm.sendNext("请把装装备放在装备窗口的第一格，否则你将不能成功.\r\n请确认一下你要砸的装备是：#v" + item.getItemId() + "##z" + item.getItemId() + "#吗？");
                }
	
		} else if (status == 2) {                
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var finHP = (item.getWdef()* 5)-(item.getHp() * 1);
				if (finHP > 单件装备血量上限) {
					finHP = 单件装备血量上限
				}
				if (item.getHp() + 血量随机值 > (item.getWdef()* 5) ) {
					血量随机值 = finHP
				}
				if (item.getHp() >= 单件装备血量上限) { //检测上限
					cm.sendOk("这个装备已经达到上限");
					cm.dispose();
					return;
				}
				
				
				if (item.getHp() < (item.getWdef()* 5)) { //watk
					//cm.setLock(item); //锁定装备
                    item.setHp(item.getHp() * 1 + 血量随机值);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("恭喜，成功给装备增加了:#r" + 血量随机值 + "#khp.");
                    cm.worldMessage("[装备洗血]：[" + cm.getChar().getName() + "]为【" + cm.getItemName(item.getItemId()) + "】添加了【" + 血量随机值 + "】点HP！");
					cm.gainMeso(-price);
					cm.gainItem(4000313, -5);
					cm.dispose();
                }else {
                // cm.gainMeso(-price / 2);
                // cm.gainItem(4032733, -25);
                cm.sendOk("该装备无法再扩充血量！");
				}
                cm.dispose();
				return;
			}    
		}
    }

