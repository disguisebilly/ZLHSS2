var status = -1;
var map = 910000017;
var num = 1;
var maxp = 3;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
		var selStr = "ѡ��һ������Ҫȥ�ĸ�������.";
		for (var i = 0; i < num; i++) {
			selStr += "\r\n#b#L" + i + "##v3015259#����boss�������� " + i + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
		}
		cm.sendSimple(selStr);
    } else if (status == 1) {
		if (selection < 0 || selection >= num) {
			cm.dispose();
		} else if (cm.getPlayer().getLevel() <= 119) {
            cm.sendNext("��Ҫ�ﵽ120���ſ��Խ��롣");
            cm.dispose();
		} else if (cm.getPlayerCount(map + selection) >= maxp) {
			cm.sendNext("����ߵĸ����Ѿ����ˣ����Ժ��ٳ���!");
			status = -1;
		} else {
			cm.warp(map + selection, 0);
			cm.dispose();
		}
    }
}