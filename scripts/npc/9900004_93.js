/* global cm */
//var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		   text += " \t\t#e#r #v4000422#  �ۼƳ�ֵ�������  #v4000422##k#n              \r\n  #b#e\t \t  ��ϵȺ��QQ��343432766#b#k\r\n\r\n"
		   text += "#r\t\tע����������1:2 �ٷ���ȯ1��400#k\r\n";
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#d\t  ��ɫ���ƣ�#b" + cm.getName() + "\t\t#k#n   #d�ۼ�������#b" + cm.��ȡ�ۼ�����() + "#k#n\r\n"	
		
		var tex2 = ""+cm.getHyPay(1)+"";
          //  text += "#L6##r" + ��ɫ�ǵ� + " #r New ע��������GM #k��ˢ��Ʒ��� #r������� #l\r\n"//3
			text += "#L20##r" + ��ɫ�ǵ� + " �����̵�#r New  #v3994691# #l\r\n"
			text += "#L21##r" + ��ɫ�ǵ� + " ��Ʒ�̵�#r New  #v3994691# #l\r\n"
            text += "#L1##r" + ��ɫ�ǵ� + " �ۼƳ�ֵ#r New  #v3994691# #l\r\n"//3
			text += "#L2##r" + ��ɫ�ǵ� + " CDK�һ�#r New  #v3994691# #l\r\n"//3
         //   text += "#L2##r" + ��ɫ�ǵ� + " ���г���һ�#r New  #v5000474# #l\r\n\r\n"//3
          //  text += "#L121##b" + ��ɫ�ǵ� + "#r ����˵����#b�㹺����300����Ϳ�����ȡ300 100 \r\n#k�㹺����1000 �Ϳ�����ȡ 1000 500 300 100\r\n#r �㹺����3000 �Ϳ�����ȡ 3000 1000 500 300 100 #l\r\n\r\n"//3


//text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"



//text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
 if (cm.getPlayer().isGM()) {
              //  text += " \t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
               // text += "#L1000#��ݴ���#l\t#L1001#����תְ#l\t#L1002#ˢ��Ʒ#l\t#L1003#������#l\r\n#L1004#ˢ������#l\r\n"

            
  }
		    cm.sendSimple(text);
        } else if (selection == 1) {//��Ҷ�ϳ�
           cm.dispose();
			cm.openNpc(9900004, 4000);
        } else if (selection == 2) {//�ʼҰ�
           cm.dispose();
			 cm.openNpc(9900004, 46);
        } else if (selection == 3) { //�޽�
           cm.dispose();
			cm.openNpc(9900004, 3002);
	    } else if (selection == 4) {//������
        cm.dispose();
			cm.openNpc(9900004, 3003);
        } else if (selection == 5) {//����
         cm.dispose();
			cm.openNpc(9900004, 3004);
        } else if (selection == 7) {//����
          cm.dispose();
			cm.openNpc(9900004, 3005);
        } else if (selection == 8) {//����
       cm.dispose();
			cm.openNpc(9900004, 3006);
        } else if (selection == 9) {//��������
         cm.dispose();
		   cm.openNpc(9900004, 3007);
        } else if (selection == 10) {//��������
         cm.dispose();
			cm.openNpc(9900004, 3008);
        } else if (selection == 11) {//�����ͻ�
           cm.dispose();
			cm.openNpc(9900004, 3009);
        } else if (selection == 10) {//��ѵ�װ
         cm.dispose();
			cm.openNpc(9310071, 0);
        } else if (selection == 11) {//���ﲹ��
           cm.dispose();
			cm.openNpc(9900004, 68);
        } else if (selection == 12) {//�����һ�
          cm.dispose();
			cm.openNpc(2000, 22);
        } else if (selection == 13) {//ѫ����ȡ
          cm.dispose();
			cm.openNpc(9900004, 7);
        } else if (selection == 14) {//��������
           cm.dispose();
			cm.openNpc(9310033, 0);
        } else if (selection == 15) {//��ֵ����
          cm.dispose();
			cm.openNpc(9900004, 81);
        } else if (selection == 20) {//��ֵ����
			cm.dispose();
			cm.openNpc(9900004, 82);
		} else if (selection == 21) {//��ֵ����
			cm.dispose();
			cm.openNpc(9900004, 83);
		} else if (selection == 2999) {//ÿ������
           cm.dispose();
			cm.openNpc(9900004, 2);
        } else if (selection == 3999) {//ÿ��ǩ��
         cm.dispose();
			cm.openNpc(9010010, 0);
        } else if (selection == 4999) {//��������
         cm.dispose();
			cm.openNpc(9310057, 0);
        } else if (selection == 5999) {//Ѫ������
           cm.dispose();
			cm.openNpc(2100007, 0);
        } else if (selection == 6999) {//�齱
           cm.dispose();
			cm.openNpc(9050007, 0);
        } else if (selection == 7999) {//����
            cm.dispose();
			cm.openNpc(9000021, 0);
        } else if (selection == 999) {//21��
          cm.dispose();
			cm.openNpc(9900004, 932);
        } else if (selection == 9999) {//����
          cm.dispose();
			cm.openNpc(9000008, 0);
        } else if (selection == 10999) {//
         cm.dispose();
			cm.openNpc(2000, 0);
        } else if (selection == 1000) {//
          cm.dispose();
			cm.openNpc(9900004, 1004);
        } else if (selection == 6666) {//
          cm.dispose();
			cm.openNpc(9900004, 16);
        } else if (selection == 7777) {//
            cm.dispose();
			cm.openNpc(9900004, 7);
        } else if (selection == 8888) {//
            cm.dispose();
			cm.openNpc(9900004, 6);
        } else if (selection == 1002) {//
           cm.dispose();
		   cm.openNpc(9900004, 1002);
        } else if (selection == 1003) {//
            cm.dispose();
            cm.openNpc(9100200, 0);
        } else if (selection == 111999) {//
            cm.dispose();
          cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
          cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
              cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������99999���!\r\n\r\n\t\t\t#e#r��ϲ������2E���!");
            cm.dispose();
        } else if (selection == 9999) {//
		if(cm.getBossLog("2016�") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016�");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��2016-04-10���ϻ���影�������x3��");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���������������ռ�");
            cm.dispose();
		}
		}
    }
}


