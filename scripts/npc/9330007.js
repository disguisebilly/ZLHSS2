var status = 0;
var cost = 2000;
function start() {
    cm.sendYesNo("请问是否想去西门町?? 2000枫币一次~~~~");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
        cm.sendOk("既然你不要那就算了~~~");
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
		if(cm.getMeso() < cost) {
		cm.sendOk("干没钱还敢去西门町!");
		cm.dispose();
		} else {
		cm.gainMeso(-cost);
		cm.warp(740000100);
        cm.dispose();
    }
}
}
