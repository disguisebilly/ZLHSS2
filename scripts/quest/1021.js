var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("��, ��ô����? �����޽ܣ����Խ���һЩ���õ�֪ʶ");
	} else if (status == 1) {
		qm.sendNextPrev("������Ϊʲô��������? ������!\r����Ҫ�̵���Щ�ս�ð�յ������ְ���");
	} else if (status == 2) {
	qm.sendAcceptDecline("����..... �����ǁ������Ȥ��~!");
	} else if (status == 3) {
	    if (!qm.haveItem(2010007)) {
		qm.gainItem(2010007, 1);
	    }
	    qm.sendNext("���������Ȼ��\r\n�ҵȵȻ����#r����С����#k�� ��������°��� ʹ�ú�����ø�ǿ׳�� ����������˫��һ��ƻ�� �ܼ򵥵ģ���һ�¼��̵� #bI#k������ร�");
	} else if (status == 4) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}
        
function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    if (qm.getPlayerStat("HP") < 50) {
		qm.sendNext("���ӣ���߀�]���ҽo����O���Ե������s������ف����Ұɡ�");
		qm.dispose();
	    } else {
		qm.sendNext("�㿴���ǲ��Ǻܼ򵥣� ��������Ҳ����λ�趨#b�ȼ�#k�� ���������������԰ɣ� ร�ÿ��һ�Εr�g��Ѫ���ͻ�ָ��ˡ� ��Ȼ�ܻ�ʱ�䣬���ú����õĻ����԰������ٵġ�");
	    }
	} else if (status == 1) {
	    qm.gainExp(10);
	    qm.gainItem(2010000, 3);
	    qm.gainItem(2010009, 3);
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}