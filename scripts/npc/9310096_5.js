var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var a0 = "             #L0#"+ 小烟花 +"#r#v1112748##z1112748#制作"+ 小烟花 +"#l\r\n\r\n                     #b需要材料如下#l\r\n\r\n    #v4310008#*100、#v4310014#*1000、#v4310025#*1000、#v4000487#*5000\r\n\r\n   #v4000435#*30、#v4000313#*500、#v4251202#*30、#v4011008#*5、#v4011007#*5\r\n\r\n                     #v4031138#7500万\r\n";
//		var a1 = "#L1#" + 正方箭头 + "#b制作外星碎片项链#r#v1122256##z1122256##l\r\n\r\n需要#v1122197#*1、#v4001129#*200、#v4002000#*25、#v4002001#*25、#v4002002#*25、#v4002003#*25、#v4000122#*500、#v4000313#*500、#v4011008#*4、1500万游戏币来制作\r\n";
//		var a2 = "#L2#" + 正方箭头 + "#b制作外星碎片耳环#r#v1032191##z1032191##l\r\n\r\n需要#v1032142#*1、#v4001129#*200、#v4002000#*25、#v4002001#*25、#v4002002#*25、#v4002003#*25、#v4000125#*500、#v4000313#*500、#v4011008#*4、1500万游戏币来制作\r\n";

	    
            cm.sendSimple(""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n              "+ 小烟花 +"#r欢迎来到风暴戒指制作"+ 小烟花 +"\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"+a0+"");
			//cm.sendOk("暂未开放！");
			//cm.dispose();
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(4310008,100)&&cm.haveItem(4310014,1000)&&cm.haveItem(4310025,1000)&&cm.haveItem(4000487,5000)&&cm.haveItem(4000435,30)&&cm.haveItem(4000313,500)&&cm.haveItem(4251202,30)&&cm.haveItem(4011008,5)&&cm.haveItem(4011007,5)&& cm.getMeso() >=75000000) {
			cm.gainItem(4310008,-100);
			cm.gainItem(4310014,-1000);
			cm.gainItem(4310025,-1000);
			cm.gainItem(4000487,-5000);
			cm.gainItem(4000435,-30);
			cm.gainItem(4000313,-500);
			cm.gainItem(4251202,-30);
			cm.gainItem(4011008,-5);
			cm.gainItem(4011007,-5);
			cm.gainMeso(-75000000);
			cm.gainItem(1112748,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"风暴戒指制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了风暴戒指。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(1122197,1)&&cm.haveItem(4001129,200)&&cm.haveItem(4002000,25)&&cm.haveItem(4002001,25)&&cm.haveItem(4002002,25)&&cm.haveItem(4002003,25)&&cm.haveItem(4000122,500)&&cm.haveItem(4000313,500)&&cm.haveItem(4011008,4)&& cm.getMeso() >=15000000) {
			cm.gainItem(1122197,-1);
			cm.gainItem(4001129,-200);
			cm.gainItem(4002000,-25);
			cm.gainItem(4002001,-25);
			cm.gainItem(4002002,-25);
			cm.gainItem(4002003,-25);
			cm.gainItem(4000122,-500);
			cm.gainItem(4000313,-500);
			cm.gainItem(4011008,-4);
			cm.gainMeso(-15000000);
			cm.gainItem(1122256,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"传承装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了外星碎片项链。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(1032142,1)&&cm.haveItem(4001129,200)&&cm.haveItem(4002000,25)&&cm.haveItem(4002001,25)&&cm.haveItem(4002002,25)&&cm.haveItem(4002003,25)&&cm.haveItem(4000125,500)&&cm.haveItem(4000313,500)&&cm.haveItem(4011008,4)&& cm.getMeso() >=15000000) {
			cm.gainItem(1032142,-1);
			cm.gainItem(4001129,-200);
			cm.gainItem(4002000,-25);
			cm.gainItem(4002001,-25);
			cm.gainItem(4002002,-25);
			cm.gainItem(4002003,-25);
			cm.gainItem(4000125,-500);
			cm.gainItem(4000313,-500);
			cm.gainItem(4011008,-4);
			cm.gainMeso(-15000000);
			cm.gainItem(1032191,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"传承装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了外星碎片耳环。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 3) {
		if (cm.haveItem(4031196,20)&&cm.haveItem(4002000,80)&&cm.haveItem(4002002,40)&&cm.haveItem(4002003,40)&&cm.haveItem(1132244,1)&&cm.haveItem(4002001,80)&&cm.haveItem(4001083,1)&&cm.haveItem(4000463,20)&&cm.getMeso()>=30000000) {
			cm.gainItem(4031196, -20);
			cm.gainItem(4002000, -80);
			cm.gainItem(4002001, -80);
			cm.gainItem(4002002, -40);
			cm.gainItem(4002003, -40);
			cm.gainItem(4001083, -1);
			cm.gainItem(4000463, -20);
			cm.gainItem(1132244, -1);
			cm.gainMeso(-30000000);
			cm.gainItem(1132245, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了恐怖鬼娃的伤口1。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(4031196,40)&&cm.haveItem(4002000,160)&&cm.haveItem(4002002,80)&&cm.haveItem(4002003,80)&&cm.haveItem(4031456,200)&&cm.haveItem(1132245,1)&&cm.haveItem(4002001,160)&&cm.haveItem(4001083,1)&&cm.haveItem(4001084,1)&&cm.haveItem(4001085,1)&&cm.haveItem(4000463,30)&&cm.getMeso()>=50000000) {
			cm.gainItem(4031196, -40);
			cm.gainItem(4002000, -160);
			cm.gainItem(4002001, -160);
			cm.gainItem(4002002, -80);
			cm.gainItem(4002003, -80);
			cm.gainItem(4031456, -200);
			cm.gainItem(4001083, -1);
			cm.gainItem(4001084, -1);
			cm.gainItem(4001085, -1);
			cm.gainItem(4000463, -30);
			cm.gainItem(1132245, -1);
			cm.gainMeso(-50000000);
			cm.gainItem(1132246, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了恐怖鬼娃的伤口1。O(∩_∩)O哈哈~",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
            }
        }
    }
}