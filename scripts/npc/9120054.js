var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "#e#b��ӭ����糺�BOSSս��\r\n��ѡ����Ҫ��ս��BOSS\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#L1##r" + ��ɫ��ͷ + "��ս��ħ��#g>>>>>>>>\r\n\r\n"//3
            text += "#L2##r" + ��ɫ��ͷ + "��սѪ�潫��#g>>>>>>\r\n\r\n"//3
            text += "#L3##r" + ��ɫ��ͷ + "��ս��������#g>>>>>>\r\n\r\n"//3
            text += "#L4##r" + ��ɫ��ͷ + "��ս��֮ħŮ#g>>>>>>\r\n\r\n"//3
			text += "#L5##r" + ��ɫ��ͷ + "��ս��Ӱɱ��#g>>>>>>\r\n\r\n"//3
            text += "#L6##r" + ��ɫ��ͷ + "�����뿪\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#L7##d" + ��ɫ��ͷ + "����#v4031497#1��\t��Ҫ��#v5200002# 200W\r\n\r\n"//3
            text += "#L8##d" + ��ɫ��ͷ + "����#v4031497#10��\t��Ҫ��#v5200002# 1800W\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if(cm.haveItem(4031497,1)){ //��Ʒ����
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9400592,1,1234,276,803001200);
                          cm.worldMessage(6,"��ң�["+cm.getName()+"]�ɹ���ʼ��ս糺�BOSS�������ٻ���һֻ����ħ�ˡ�����");
			             cm.dispose();
		   }else{
			            cm.sendOk("��Ҫ�Ѽ�#b1�� #v4031497#");
			           cm.dispose();
		   }
        } else if (selection == 2) { 
			if(cm.haveItem(4031497,1)){ //��Ʒ����
                           
                            cm.gainItem(4031497,-1);
						   cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9400591,1,1234,276,803001200);
cm.worldMessage(6,"��ң�["+cm.getName()+"]�ɹ���ʼ��ս糺�BOSS�������ٻ���һֻ��Ѫ�潫��������");
			   cm.dispose();
		   }else{
			   cm.sendOk("��Ҫ�Ѽ�#b1�� #v4031497#");
			   cm.dispose();
		   }
        } else if (selection == 3) {
			if(cm.haveItem(4031497,1)){ //��Ʒ����
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);			           
                           cm.spawnMobOnMap(9400589,1,1234, 276,803001200);
cm.worldMessage(6,"��ң�["+cm.getName()+"]�ɹ���ʼ��ս糺�BOSS�������ٻ���һֻ����������������");
			   cm.dispose();
		   }else{
			   cm.sendOk("��Ҫ�Ѽ�#b1�� #v4031497#");
			   cm.dispose();
		   }
        } else if (selection == 4) {
			if(cm.haveItem(4031497,1)){ //��Ʒ����
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9400590,1,1234, 276,803001200);
cm.worldMessage(6,"��ң�["+cm.getName()+"]�ɹ���ʼ��ս糺�BOSS�������ٻ���һֻ����֮ħŮ������");
			   cm.dispose();
		   }else{
			   cm.sendOk("��Ҫ�Ѽ�#b1�� #v4031497#");
			   cm.dispose();
		   }
		   
		   } else if (selection == 5) {
			if(cm.haveItem(4031497,1)){ //��Ʒ����
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9300775,1, 1234, 276,803001200);
cm.worldMessage(6,"��ң�["+cm.getName()+"]�ɹ���ʼ��ս糺�BOSS�������ٻ���һֻ����֮ħŮ������");
			   cm.dispose();
		   }else{
			   cm.sendOk("��Ҫ�Ѽ�#b1�� #v4031497#");
			   cm.dispose();
		   }
		   
        } else if (selection == 6) {
            cm.warp(100000000);
            cm.dispose();
        } else if (selection == 7) {
            if(cm.getMeso() >= 2000000){
                cm.sendOk("��ϲ�㣬������ #v4031497#! .");
                cm.gainMeso(-2000000);
	        cm.gainItem(4031497,1);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 2000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
        } else if (selection == 8) {
            if(cm.getMeso() >= 18000000){
                cm.sendOk("��ϲ�㣬������ #v4031497# X10! .");
                cm.gainMeso(-18000000);
	        cm.gainItem(4031497,10);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 20000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
        } else if (selection == 9) {
            if (!cm.canHold(4031497, 1)) {
                cm.sendOk("���İ����ռ䲻��.����������");
                cm.dispose();
            } else if (cm.haveItem(4000243, 3)) {
                cm.gainItem(4000243,-3);
                cm.gainItem(4031497,1);
                cm.sendOk("��ϲ��ɹ��һ�#v4031497#X1����");
                cm.dispose();
            } else {
                cm.sendOk("�һ�ʧ�ܣ���Ҫ#v4000243#X3����");
                cm.dispose();
            }
        } else if (selection == 10) {
            if (!cm.canHold(4031497, 1)) {
                cm.sendOk("���İ����ռ䲻��.����������");
                cm.dispose();
            } else if (cm.haveItem(4000243, 30)) {
                cm.gainItem(4000243,-30);
                cm.gainItem(4031497,10);
                cm.sendOk("��ϲ��ɹ��һ�#v4031497#X10����");
                cm.dispose();
            } else {
                cm.sendOk("�һ�ʧ�ܣ���Ҫ#v4000243#X30����");
                cm.dispose();
            }
        } else if (selection == 12) {//ǧ���������ż�
            cm.warp(541020700);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 13) {//��żʦBOSS��ս
            cm.warp(910510001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 14) {//糺�
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս糺츱��");
                cm.dispose();
              }else{
			cm.warp(803001200);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 15) {//����
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("����ͼ���Ƶȼ�140������������û���ʸ���ս���㸱��");
                cm.dispose();
              }else{
			cm.warp(803000505);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 11) {//.������껪
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        }
    }
}


