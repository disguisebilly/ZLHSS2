var status = 0;
var price = 10000; //�Ҿ���
var ����װ��Ѫ������ = 600;
var Ѫ�����ֵ = Math.floor(Math.random() * 10 + 1);
var ʧ�����ֵ = Math.floor(Math.random() * 100 + 1);
function start() {
	if (cm.getPlayer().getMap().getId() != 910000000) {
		cm.dispose();
		return;
	}
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("�ȿȡ���");
            cm.dispose();
            return;
        }	
        if (mode == 1)
            status++;
        else
            status--;
		if (status == 0) {
			cm.sendNext("��~���ǲ��Ǿ����Լ�̫�����ˣ���������лƽ��Ҷ���Ը��ң��ҿ��԰�����ǿ��һ��װ����������Ҫ̫̰�ģ���ֻ��Ϊ���װ����������ֵ������ֵ���Ϊ���������屶Ŷ������Ϊ���ʽ���������ÿ�ζ���Ҫ1W���Ŷ��");
			
        } else if (status == 1) {
			/*
				 if (cm.getBossLog("����ϴѪ����") >= 10) {
                    cm.sendOk("һ��ֻ��ʮ��Ŷ!");
                    cm.dispose();
                    return;
                }
			*/
			
				 if (!cm.haveItem(4000313, 5)) {
                    cm.sendOk("����Ҫ5���ƽ��Ҷ���ܰ���ɻ");
                    cm.dispose();
                    return;
                }
			
				 if (cm.getMeso() < price) {
                    cm.sendOk("�Բ���,��û���㹻��ð�ձ�,Ϊ�˵��ڽ��蹱��һ������");
                    cm.dispose();
                    return;
                }
			/*
				 if (ʧ�����ֵ <= 10) {
					cm.gainItem(4031546, -1);
                    cm.sendOk("�ۣ������ޣ�����͵������ĺ����");
                    cm.dispose();
                    return;
                }
			*/
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v" + item.getItemId() + "##z" + item.getItemId() + "#��");
                }
	
		} else if (status == 2) {                
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var finHP = (item.getWdef()* 5)-(item.getHp() * 1);
				if (finHP > ����װ��Ѫ������) {
					finHP = ����װ��Ѫ������
				}
				if (item.getHp() + Ѫ�����ֵ > (item.getWdef()* 5) ) {
					Ѫ�����ֵ = finHP
				}
				if (item.getHp() >= ����װ��Ѫ������) { //�������
					cm.sendOk("���װ���Ѿ��ﵽ����");
					cm.dispose();
					return;
				}
				
				
				if (item.getHp() < (item.getWdef()* 5)) { //watk
					//cm.setLock(item); //����װ��
                    item.setHp(item.getHp() * 1 + Ѫ�����ֵ);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("��ϲ���ɹ���װ��������:#r" + Ѫ�����ֵ + "#khp.");
                    cm.worldMessage("[װ��ϴѪ]��[" + cm.getChar().getName() + "]Ϊ��" + cm.getItemName(item.getItemId()) + "������ˡ�" + Ѫ�����ֵ + "����HP��");
					cm.gainMeso(-price);
					cm.gainItem(4000313, -5);
					cm.dispose();
                }else {
                // cm.gainMeso(-price / 2);
                // cm.gainItem(4032733, -25);
                cm.sendOk("��װ���޷�������Ѫ����");
				}
                cm.dispose();
				return;
			}    
		}
    }

