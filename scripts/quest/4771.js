/*
 ZEVMSð�յ�(079)��Ϸ�����
 72������
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
            // if (qm.�жϱ���������().isFull()) {
            //     qm.sendNext("������������һ����λ��");
            //     qm.�Ի�����();
            //     return;
            // }
            if (qm.getQuestStatus(4771) == 2) {
                qm.sendOk("��Ľ����Ѿ�ȫ����ȡ�ꡣ");
                qm.forceCompleteQuest();
                qm.dispose();
            } else {
                qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ����� #b72#k ����\r\n\r\n" + huoqu + " #v4001005# x 5");
            }
        } else if (status == 1) {
            qm.sendOk("��Ľ����Ѿ�ȫ����ȡ�ꡣ");
            qm.gainItem(4001005, 5);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}