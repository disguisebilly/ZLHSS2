/*
SnailMS�ű�������
*/
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		
		var text = "\r\n\t#L1#" + С�̻� + "װ�����齱#l\t#L2#" + С�̻� + "�������齱#l\r\n\r\n";
		/* if(cm.getPlayer().getGMLevel()>= 100){
			text += "\r\n#L12#" + С�̻� + "�������齱#l\t\r\n\r\n";
		} */
		
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 1);
			cm.safeDispose();
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 2);
			cm.safeDispose();
			return;
		} else if (selection == 3) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 3);
			cm.safeDispose();
			return;
		} else if (selection == 4) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 4);
			cm.safeDispose();
			return;
		} else if (selection == 5) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 5);
			cm.safeDispose();
			return;
		} else if (selection == 6) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 6);
			cm.safeDispose();
			return;
		} else if (selection == 7) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 7);
			cm.safeDispose();
			return;
		} else if (selection == 8) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 8);
			cm.safeDispose();
			return;
		} else if (selection == 9) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 9);
			cm.safeDispose();
			return;
		} else if (selection == 10) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 10);
			cm.safeDispose();
			return;
		} else if (selection == 11) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 11);
			cm.safeDispose();
			return;
		} else if (selection == 12) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062507, 12);
			cm.safeDispose();
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

