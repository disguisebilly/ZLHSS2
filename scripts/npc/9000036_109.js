var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"//3
			text += "          #r欢迎来到月月冒险岛累计赞助物品奖励#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
	        text += "              #L1#"+小烟花+"#r领取20000档奖励"+小烟花+"#l\r\n\r\n"
			text += "    领取前请将原本的赞助戒指放在包内，否则不能升级#l\r\n\r\n"
			text += "#b#v1112900##z1112900#*1（升级至四维2400，攻魔1200）\r\n"
			text += "#b#v1142789##z1142789#*1（最强基础属性勋章，四维300，攻魔300）\r\n"
			text += "#b#v1112915##z1112915#*1（最强基础属性戒指，四维300，攻魔300）\r\n"
			text += "#b#v4310108##z4310108#*30\r\n"
			text += "#b#v4001165##z4001165#*2000\r\n"
			text += "#b#v2028083##z2028083#*8\r\n"
			text += "#b#v4310148##z4310148#*2\r\n"
			text += "#b#v4032226##z4032226#*20\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 20000 && cm.haveItem(1112900,1) && cm.getPlayer().getBossLog("20000赞助物品礼包",1) == 0 ){
				cm.gainItem(1112900,-1);
				cm.gainItem(1112900,2400,2400,2400,2400,0,0,1200,1200,0,0,0,0,0,0);//赞助戒指
				cm.gainItem(1142789,300,300,300,300,0,0,300,300,0,0,0,0,0,0);//赞助之神
				cm.gainItem(1112915,300,300,300,300,0,0,300,300,0,0,0,0,0,0);//蓝调戒指
				cm.gainItem(4310108,30);//UR时装附魔币
				cm.gainItem(4001165,2000);//太阳神的赐福
				cm.gainItem(2028083,8);//星火武器卷自选箱
				cm.gainItem(4310148,2);//25星必成币
				cm.gainItem(4032226,20);//黄金猪猪
				
				cm.getPlayer().setBossLog("20000赞助物品礼包",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了20000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了20000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				cm.sendOk("#r恭喜你，领取成功20000赞助物品奖励！");
				cm.dispose();
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}