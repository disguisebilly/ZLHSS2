/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������
 */
var װ�� = [
    /*************
     ����
     *************/
1332279,
1322255,
1312203,
1302343,
1492235,
1482221,
1472265,
1462243,
1452257,
1442274,
1432218,
1402259,
1382265,
1372228
    //
];
//˵������
var ˵������ = "   hi #b#h ##k ��ѡ����Ҫ������������\r\n[#r����װ��ͼ�������Կ�����#k]��\r\nѡ����ǲ��ܷ��ڵ�Ŷ��#r�����ҳ�������ѡ��#k�������Ѿ������ġ�";


var sels;
var status = -1;

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
        for (var i = 0; i < װ��.length; i++) {
            �ı���Ϣ += "#b#L" + i + "#";
            �ı���Ϣ += "#i" + װ��[i] + "##z" + װ��[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + ˵������ + "\r\n" + �ı���Ϣ + "");
    } else if (status == 1) {
        sels = selection;
        cm.gainItem(װ��[sels], 1);
        cm.gainItem(2022466, -1);
        cm.˵������("��ϲ���� " + cm.��ʾ��Ʒ(װ��[sels]) + "");
		cm.ȫ����ɫ����("[������ѡ] : ������� "+cm.getPlayer().getName()+" ��������ѡ��ѡ��һ����������")
		//cm.�����¼("����һ���¼/������װ�һ���¼.txt",""+cm.ʱ��()+" : "+cm.getChar().getName()+" �һ��� "+cm.getItemName(װ��[sels])+" \r\n");
        cm.�Ի�����();
    } else {
        cm.˵������("#r��������: mode : " + mode + " �ű�ִ�� : " + status);
        cm.�Ի�����();
    }
}