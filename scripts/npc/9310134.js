var status = 0;
var totAp = 0;
var statup;
var p;
var needLevel = 250;//转身等级
var count = 1;
var 次数 =0;
var current;
var retap = 0;
var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";

var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
          
			text += "你好这里是未来新叶城，我是这里的研究员阿尔，我们正在研究关于外星人的秘密，请给我们带来#z4000693##v4000693#1个核心，我们将进一步揭开他们的秘密！\r\n\r\n"
        
            text += "#L1#好的，我接受你的任务#l\r\n\r\n\r\n"//3
       
    
            cm.sendSimple(text);
        } else if (selection == 1) { 

    if (cm.getChar().getLevel() < 140) {
                cm.sendOk("很抱歉，您需要到140级，你的等级不够不足已接受此任务.");
                cm.dispose();
          




    

 }

			 else if (cm.
haveItem
(4000693) < 1 ) { 
				cm.sendOk("你没有足够的核心！");
				cm.dispose();




}









else if(cm.getPlayer().getOneTimeLog('aer') >= 1 )
{
            cm.sendOk("你提供的核心很大程度上帮助了我们的研究！");
            cm.dispose();
}
else
{
 
           
            cm.getPlayer().setOneTimeLog('aer');
            cm.gainItem(4000693 ,-1);
            cm.givePartyExp(120000000);
            cm.sendOk("你完成了次任务！");
 cm.dispose();
}
        } 
    }
}

