/*
 
 */
var status = 0;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status >= 0 && mode == 0) {
    cm.sendOk("恩... 我猜你还有想在这做的事？");
    cm.dispose();
    return;
  }
  if (mode == 1) status++;
  else status--;

  if (status == 0) {
    cm.sendYesNo(
      "	搭上了这艘船，你可以前往更大的大陆冒险。 只要给我 #b80#k 金币，我会带你去 #b金银岛#k 你想要去金银岛吗？"
    );
  } else if (status == 1) {
    if (cm.haveItem(4031801)) {
      cm.sendNextPrev(
        "	既然你有推荐信，我不会收你任何的费用。收起来，我们将前往金银岛，坐好，旅途中可能会有点动荡！"
      );
    } else {
      cm.sendNext("真的只要 #b80#k 金币 就能搭船!!");
    }
  } else if (status == 2) {
    if (cm.haveItem(4032338)) {
      cm.sendNextPrev(
        "	既然你有推荐信，我不会收你任何的费用。收起来，我们将前往金银岛，坐好，旅途中可能会有点动荡！"
      );
    } else {
      if (cm.getPlayerStat("LVL") >= 10) {
        if (cm.getMeso() < 80) {
          cm.sendOk("什么？你说你想搭免费的船？ 你真是个怪人！");
          cm.dispose();
        } else {
          cm.sendNext("哇! #b80#k 金币我收到了！ 好，准备出发去金银岛啰！");
        }
      } else {
        cm.sendOk(
          "让我看看... 我觉得你还不够强壮。 你至少要达到10等我才能让你到金银岛。"
        );
        cm.dispose();
      }
    }
  } else if (status == 3) {
    if (cm.haveItem(4032338)) {
      cm.warpBack(200090070, 104000000, 80);
      cm.dispose();
    } else {
      cm.gainMeso(-80);
      cm.warpBack(200090070, 104000000, 80);
      cm.dispose();
    }
  }
}
