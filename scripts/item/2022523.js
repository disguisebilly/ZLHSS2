/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������
 */
var ���� = [
    /*************
     ����
     *************/
2044902,
2044809,
2044802,
2044702,
2044602,
2044502,
2044414,
2044402,
2044314,
2044302,
2044214,
2044202,
2044114,
2044102,
2044014,
2044002,
2043802,
2043702,
2043302,
2043214,
2043202,
2043114,
2043102,
2043019,
2043008,
2043002,
2041206,
2041201,
2041023,
2041020,
2041017,
2041014,
2041011,
2041008,
2041005,
2041002,
2040933,
2040928,
2040925,
2040920,
2040915,
2040902,
2040825,
2040816,
2040805,
2040802,
2040702,
2040627,
2040622,
2040612,
2040534,
2040517,
2040514,
2040502,
2040427,
2040419,
2040412,
2040323,
2040318,
2040302,
2040205,
2040200,
2040105,
2040100,
2040031,
2040031,
2040016,
2040005,
2040002,




    //
];
//˵������
var ˵������ = "   hi #b#h ##k ��ѡ����Ҫ�ľ����\r\nѡ����ǲ��ܷ��ڵ�Ŷ��#r�����ҳ�������ѡ��#k�������Ѿ������ġ�";


var status = -1;
var sels;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.�Ի�����();
        return;
    }
    if (status == 0) {
        var �ı���Ϣ = "";
        for (var i = 0; i < ����.length; i++) {
            �ı���Ϣ += "#b#L" + i + "#";
            �ı���Ϣ += "#i" + ����[i] + "##z" + ����[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + ˵������ + "\r\n" + �ı���Ϣ + "");
    } else if (status == 1) {
        sels = selection;
        cm.gainItem(����[sels], 1);
	//	cm.haveItem(2022466)
        cm.gainItem(2022523, -1);
        cm.˵������("��ϲ���� " + cm.��ʾ��Ʒ(����[sels]) + "");
		cm.ȫ����ɫ����("[������ѡ] : ������� "+cm.getPlayer().getName()+" ѡ��һ��10%����")
		//cm.�����¼("����һ���¼/������װ�һ���¼.txt",""+cm.ʱ��()+" : "+cm.getChar().getName()+" �һ��� "+cm.getItemName(װ��[sels])+" \r\n");
        cm.�Ի�����();
    } else {
        cm.˵������("#r��������: mode : " + mode + " �ű�ִ�� : " + status);
        cm.�Ի�����();
    }
}