/* Denma the Owner
	Henesys VIP Eye Change.
*/
var status = -1;
var facetype;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendNext("欢迎光临520整形中心。[#r全部免费#k]");
    } else if (status == 1) {
        var face = cm.getPlayerStat("FACE");
        if (cm.getPlayerStat("GENDER") == 0) {
           facetype = [28000,28001,28002,28003,28004,28005,28006,28007,28008,28009,28010,28011,28012,28013,28014,28015,28016,28017,28019,28020,28021,28022,28023,28024,28025,28026,28027,28028,28029,28030,28032,28033,28036,28038,28039,28040,28041,28042,28043,28044,28045,28046,28047,28048,28049,28050,28051,28052,28055,28056,28057,28058,28061,28062,28063,28064,28065,28066,28067,28068,28069,28070,28071,28072];
         
        } else {
             facetype = [27120,27121,27122,27123,27124,27125,27126,27127,27128,27129,27130,27131,27132,27133,27134,27135,27136,27137,27138,27139,27140,27141,27144,27145,27146,27147,27150,27151,27152,27153,27156,27157,27158,27159,27160,27161,27162,27163,27164,27165,27166,27200,27201,27202,27203,27204,27205,27206,27207,27208,27209,27210,27211,27213,27214,27215,27216,27217,27218,27219,27220,27230,27231,27232,27233,27234,27235,27236,27237,27238,27239,27240];
          //facetype = [];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
		
cm.gainItem(4052001, 1);//获得物品
        cm.askAvatar("请慢慢选择你想喜欢的样子！\r\n如果发现崩溃等现象请反馈给GM修复谢谢！", 4052001, facetype);
    } else if (status == 2) {
        if (cm.setAvatar(4052001, facetype[selection]) == 1) {
            cm.sendOk("好了,你的朋友们一定认不出来是你了!");
            cm.喇叭(2, "[" + cm.getPlayer().getName() + "]整形成功,你的朋友们一定认不出来是你了!~");
        } else {
            cm.sendOk("嗯。。。你肯定没有我们医院的会员卡。。。不好意思如果你没射手村整形手术高级会员卡，我不能给你做手术。");
        }
        cm.dispose();
    }
}
