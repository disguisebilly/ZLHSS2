
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		
	    var a2 = "#L2#" + ������ͷ + "#b����#r#v1052929##z1052929# ����60 ��ħ60\r\n\r\n��Ҫ1000��ð�ձ�����\r\n";
	    
            cm.sendSimple("������Ѱ����װ����Ӵ����ѡ��\r\n"+a2+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
          

	   
			    } else if (selection == 2) {
		if (cm.haveItem(1052929,1)&&cm.getMeso()>=10000000) {
			
			cm.gainItem(1052929, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1052929,60,60,60,60,0,0,60,60,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˱���������O(��_��)O����~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "Ѱ����װ����" + " : " + "��ϲ��" + cm.getChar().getName() + "��ҳɹ����ûָ���Ѱ����װ��O(��_��)O����~"));
           
			cm.sendOk("#z1052929#�Ѿ����ú��ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1082544,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082544, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082544,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˱���������O(��_��)O����~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "��ϲ��" + cm.getChar().getName() + "��ҳɹ������˱������ס�O(��_��)O����~"));
           
			cm.sendOk("#z1082544#�Ѿ����ú��ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1082545,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082545, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082545,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˱���������O(��_��)O����~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "��ϲ��" + cm.getChar().getName() + "��ҳɹ������˱������ס�O(��_��)O����~"));
           
			cm.sendOk("#z1082546#�Ѿ����ú��ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 5) {
		if (cm.haveItem(1082546,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082546, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082546,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˱���������O(��_��)O����~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "��ϲ��" + cm.getChar().getName() + "��ҳɹ������˱������ס�O(��_��)O����~"));
           
			cm.sendOk("#z1082547#�Ѿ����ú��ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 6) {
		if (cm.haveItem(1082547,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+10);
			cm.gainItem(1082547, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1082547,r,r,r,r,0,0,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˱���������O(��_��)O����~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "��ϲ��" + cm.getChar().getName() + "��ҳɹ������˱������ס�O(��_��)O����~"));
           
			cm.sendOk("#z1082548#�Ѿ����ú��ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
            }
        }
    }
}