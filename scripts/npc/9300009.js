var status = 0

function start(){
	action(1, 0, 0);
}

function action(mode, type ,selection){
	if(mode == 1) {
		status++;
	} else if(mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	if(status == 1){
		cm.sendYesNo("�����ȥ��");
	} else if(status == 2){
		var map = cm.getSavedLocation("WEDDING");
		cm.warp(map, 0);
		cm.clearSavedLocation("WEDDING");
		cm.dispose();	
	} else {
		cm.dispose();
	}
}