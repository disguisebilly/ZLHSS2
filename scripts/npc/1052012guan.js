/*var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ�����̵�5��NPCŶ��\r\n\r\n";

            if (cm.getPlayer().getBossLog("��������") == 4){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�50���������㴥��#v4000006#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.����֮��-�ֿ����Ա-������!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000006,50)){
                cm.setBossLog("��������");
//cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000006, -50);
cm.gainNX(300);
cm.gainExpR(+25000);
                cm.sendOk("���̵�5�����!��ϲ���300��ȯ\r\n\r\nȻ����ȥ��..����֮��-�ֿ����Ա-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50���������㴥��#v4000006#������!");
                cm.dispose();
            }
        }
    }
}