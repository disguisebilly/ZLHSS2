var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple(""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n              #r��ӭ��������ð�յ��������#k\r\n"+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n   #L1#"+С�̻�+"#b��ҵȼ�����"+С�̻�+"#l   #L2#"+С�̻�+"��ҲƸ�����"+С�̻�+"#l\r\n  #L3#"+С�̻�+"ÿ������������"+С�̻�+"#l  #L4#"+С�̻�+"��ҳ�ֵ����"+С�̻�+"#l\r\n\r\n");//\r\n#L2##b�������#l
	
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {	
	cm.displayGuildRanks();
	cm.dispose();
	}
	else if (selection == 1) {
	cm.showlvl();
	cm.dispose();
	}
	else if (selection == 2) {
	cm.showmeso();
	cm.dispose();
	}
	else if (selection == 3) {
	cm.dispose();
    cm.openNpc(9040004,100);
	}
	else if (selection == 4) {
	cm.dispose();
    cm.openNpc(9040004,200);
	}	
}
