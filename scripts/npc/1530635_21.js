﻿var status = -1;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#";////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////红色圆
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var jsts = "#fEffect/ItemEff/1102376/effect/proneStab/7#";//橘色翅膀

var buyId = -1;
var item = null;
var itemList = Array(
	//道具代码，抵用券，数量， 次数：-1为不限制
	//Array(5062005, 50000, 10, 1),
	//Array(2436489, 10000, 5, 2),
	//Array(2433853, 100000, 1, 1),
	//Array(3991058, 50000, 2, 1),
	//Array(2049116, 50000, 10, 1),
	//Array(2049323, 50000, 5, 2),
	//Array(3994075, 200000, 3, 1),
	//Array(2430207, 50000, 5, 2),
	//Array(4310199, 100000, 10, 1),
	//Array(4033248, 20000, 100, 2),
	//Array(3994420, 600000, 1, 1),
	//Array(3994418, 300000, 1, -1),
	//Array(3994419, 400000, 1, -1)
);
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		 var text="\t\t\t#e#r#fEffect/CharacterEff/1032054/0/0#VIP抵用限定商铺#fEffect/CharacterEff/1032054/0/0#" + jsts + "#l\r\t\t\t#d当前抵用券:" + cm.getNX(2) + "\r\n"
text += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
		for(var key in itemList) {
			var itemid = itemList[key][0];
			var itemquantity = itemList[key][2];
			var limitcount = itemList[key][3];
			var price = itemList[key][1];
			text+="#L"+key+"#"+aaa+" #r"+price+"抵用券#d兑换#b#i"+itemid+"# #d"+itemquantity+"个#k ";
			if (limitcount != -1) {
				var currentTimes = cm.getPQLog("抵用券"+cm.getItemName(itemid));
				if (currentTimes >= limitcount)
					text+="#r("+currentTimes+"/"+limitcount+"次)#k#l\r\n";
				else
					text+="#g("+currentTimes+"/"+limitcount+"次)#k#l\r\n";
			} else {
				text+="#l\r\n";
			}
		}
		cm.sendSimple(text);
		//cm.dispose();
	} else if (status == 1) {
		buyId = selection;
		item = itemList[buyId];
		var itemid = item[0];
		var itemquantity = item[2];
		var price = item[1];
		cm.sendYesNo("是否需要花费#r"+price+"抵用券#k购买"+itemquantity+"个#b#z"+itemid+"##k？");
	} else if (status == 2) {
		var itemid = item[0];
		var itemquantity = item[2];
		var limitcount = item[3];
		var price = item[1];
		var currentTimes = cm.getPQLog("抵用券"+cm.getItemName(itemid));
		var myNx = cm.getPlayer().getCSPoints(2);
		if (myNx < price) {
			cm.sendOk("您的抵用券现金不足，无法完成购买。");
			cm.dispose();
			return;
		}
		if (limitcount!=-1 && currentTimes>=limitcount) {
			cm.sendOk("您今天无法再购买该物品。");
			cm.dispose();
			return;
		}
		if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
			cm.sendOk("您的背包空间不足，请整理后再购买。");
			cm.dispose();
			return; 
		}
		cm.gainItem(itemid, itemquantity);
		cm.gainNX(2, -price);
		if (limitcount!=-1) {
			cm.setPQLog("抵用券"+cm.getItemName(itemid))
		}
		cm.sendOk("恭喜您购买成功！");
		cm.dispose();
	}
}