/*
 
 道具制作
 */
var 装备 = [
  2290000, 2290001, 2290002, 2290003, 2290004, 2290005, 2290006, 2290007,
  2290008, 2290009, 2290010, 2290011, 2290012, 2290013, 2290014, 2290015,
  2290018, 2290019, 2290022, 2290023, 2290024, 2290025, 2290026, 2290027,
  2290028, 2290029, 2290030, 2290031, 2290032, 2290033, 2290034, 2290035,
  2290036, 2290037, 2290040, 2290041, 2290042, 2290043, 2290046, 2290047,
  2290048, 2290049, 2290050, 2290051, 2290052, 2290053, 2290054, 2290055,
  2290056, 2290057, 2290058, 2290059, 2290060, 2290061, 2290064, 2290065,
  2290066, 2290067, 2290068, 2290069, 2290070, 2290071, 2290074, 2290075,
  2290076, 2290077, 2290080, 2290081, 2290082, 2290083, 2290084, 2290085,
  2290086, 2290087, 2290088, 2290089, 2290090, 2290091, 2290092, 2290093,
  2290094, 2290095, 2290096, 2290097, 2290098, 2290099, 2290100, 2290101,
  2290102, 2290103, 2290104, 2290105, 2290106, 2290107, 2290108, 2290110,
  2290111, 2290112, 2290113, 2290115, 2290116, 2290117, 2290118, 2290119,
  2290120, 2290121, 2290122, 2290123, 2290124, 2290125, 2290126, 2290127,
  2290128, 2290129, 2290130, 2290131, 2290132, 2290133, 2290134, 2290135,
  2290136, 2290137, 2290138, 2290139,
];

var job112 = [
  2290096, 2290125, 2290000, 2290001, 2290002, 2290003, 2290004, 2290005,
  2290006, 2290007, 2290008, 2290009, 2290010, 2290011, 2290014, 2290015,
];
var job122 = [
  2290096, 2290125, 2290000, 2290001, 2290002, 2290003, 2290004, 2290005,
  2290006, 2290007, 2290012, 2290013, 2290018, 2290019, 2290014, 2290015,
];
var job132 = [
  2290096, 2290125, 2290000, 2290001, 2290002, 2290003, 2290004, 2290005,
  2290006, 2290007, 2290022, 2290023,
];
var job212 = [
  2290096, 2290125, 2290026, 2290027, 2290028, 2290029, 2290024, 2290025,
  2290030, 2290031, 2290036, 2290037, 2290040, 2290041,
];
var job222 = [
  2290096, 2290125, 2290026, 2290027, 2290028, 2290029, 2290024, 2290025,
  2290032, 2290033, 2290046, 2290047, 2290042, 2290043,
];
var job232 = [
  2290096, 2290125, 2290026, 2290027, 2290028, 2290029, 2290024, 2290025,
  2290034, 2290035, 2290050, 2290051, 2290048, 2290049,
];
var job312 = [
  2290096, 2290125, 2290052, 2290053, 2290054, 2290055, 2290056, 2290057,
  2290058, 2290059, 2290060, 2290061, 2290064, 2290065,
];
var job322 = [
  2290096, 2290125, 2290052, 2290053, 2290054, 2290055, 2290066, 2290067,
  2290068, 2290069, 2290070, 2290071, 2290074, 2290075,
];
var job412 = [
  2290096, 2290125, 2290076, 2290077, 2290080, 2290081, 2290082, 2290083,
  2290084, 2290085, 2290086, 2290087, 2290088, 2290089,
];
var job422 = [
  2290096, 2290125, 2290076, 2290077, 2290080, 2290081, 2290082, 2290083,
  2290090, 2290091, 2290092, 2290093, 2290094, 2290095,
];
var job512 = [
  2290096, 2290125, 2290097, 2290098, 2290099, 2290100, 2290101, 2290102,
  2290103, 2290104, 2290105, 2290106, 2290107, 2290110, 2290111,
];
var job522 = [
  2290096, 2290125, 2290112, 2290113, 2290115, 2290116, 2290117, 2290118,
  2290119, 2290120, 2290121, 2290122, 2290123, 2290124,
];
var job2112 = [
  2290096, 2290125, 2290126, 2290127, 2290128, 2290129, 2290130, 2290131,
  2290132, 2290133, 2290134, 2290135, 2290136, 2290137,
];
var choose = [];
//说明文字
var 说明文字 = "每日首次兑换需50个#v4000273#，兑换一次减少10个，最低10个";
var cost = 50;

var sels;
var 脚本执行 = -1;

function start() {
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    脚本执行++;
  } else if (mode == 0) {
    脚本执行--;
  } else {
    cm.对话结束();
    return;
  }
  if (脚本执行 == 0) {
    var 文本信息 = "";
    var job = cm.判断职业();
    if (job == 110 || job == 111 || job == 112) {
      choose = job112;
    } else if (job == 120 || job == 121 || job == 122) {
      choose = job122;
    } else if (job == 130 || job == 131 || job == 132) {
      choose = job132;
    } else if (job == 210 || job == 211 || job == 212) {
      choose = job212;
    } else if (job == 220 || job == 221 || job == 222) {
      choose = job222;
    } else if (job == 230 || job == 231 || job == 232) {
      choose = job232;
    } else if (job == 310 || job == 311 || job == 312) {
      choose = job312;
    } else if (job == 320 || job == 321 || job == 322) {
      choose = job322;
    } else if (job == 410 || job == 411 || job == 412) {
      choose = job412;
    } else if (job == 420 || job == 421 || job == 422) {
      choose = job422;
    } else if (job == 510 || job == 511 || job == 512) {
      choose = job512;
    } else if (job == 520 || job == 521 || job == 522) {
      choose = job522;
    } else if (job == 2110 || job == 2111 || job == 2112) {
      choose = job2112;
    } else {
      cm.说明文字("请至少二转以后再来");
      cm.对话结束();
      return;
    }
    if (cm.getBossLog("购买四转技能书") <= 4) {
      cost = cost - cm.getBossLog("购买四转技能书") * 10;
    } else {
      cost = 10;
    }
    for (var i = 0; i < choose.length; i++) {
      文本信息 += "#b#L" + i + "#";
      文本信息 += "#i" + choose[i] + "##z" + choose[i] + "##l#k\r\n";
    }

    cm.sendSimple(
      "" +
        说明文字 +
        "\r\n" +
        "根据您的购买次数，您#e#b本次需要" +
        cost +
        "个#k#n#v4000273#\r\n" +
        文本信息 +
        ""
    );
  } else if (脚本执行 == 1) {
    if (cm.haveItem(4000273, cost)) {
      sels = selection;
      cm.gainItem(choose[sels], 1);
      cm.gainItem(4000273, 0 - cost);
      cm.setBossLog("购买四转技能书");
      cm.说明文字("兑换了没有用，反正也是失败。");
      //cm.输出记录("礼包兑换记录/重生套装兑换记录.txt",""+cm.时间()+" : "+cm.getChar().getName()+" 兑换了 "+cm.getItemName(装备[sels])+" \r\n");
      cm.对话结束();
    }
    cm.说明文字("你没有材料不要骗我，去神木村打骨头龙吧");
  } else {
    cm.对话结束();
  }
}
