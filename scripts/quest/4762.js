/*
 ZEVMSð�յ�(079)��Ϸ�����
 10������
 */
var huoqu = "#fUI/UIWindow.img/QuestIcon/4/0#";
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
            if (qm.getQuestStatus(4762) == 2) {
                qm.sendOk("���Ѿ���ȡ������������Ŭ����15�����Ի���½����");
                qm.forceCompleteQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ����� #b10#k �����Ѿ�������ʽ��̤��ð�������ˣ���Ҷ��ð�յ��͸�������С�����\r\n\r\n" + huoqu + " ��� x #b1000000#k  ����ȯ x #b5000#k ~" );
            }
        } else if (status == 1) {
            qm.sendOk("��һ�ν���Ϊ #b15#k ����");
            qm.gainPet(5000047, 1, 1, 1, 1, 90);
            qm.gainMeso(100 * 10000);
	        //qm.������ȯ(5000);
	        qm.gainItem(4006000, 20);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}