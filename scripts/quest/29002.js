/* 
 *  Dallier - King Medal
 *  Lith Habor = 104000000
 *  Sleepywood = 105040300
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("����������Ѿ������˳�ֵ�׼�����ͻ������Ұ�");
            qm.dispose();
            return;
        } else if (status == 2) {
            status--;
        } else {
            qm.dispose();
            return;
        }
    } else {
        status++;
    }

    if (status == 0) {
        qm.askAcceptDecline("#v1142003# #e#b#t1142003##k\n\r\n\r - ��������ֵ�ﵽ1000���ϣ�\n\r - ��ʱ�����ƣ�");
    } else if (status == 1) {
        qm.sendNext("��ȷ��Ҫ��ս��ð�ռҡ�");
    } else if (status == 2) {
        if (qm.�ж�����() >= 1000) {
	    qm.����Ʒ(1142003, 1);		
		qm.sendOk("��ս�ɹ���ף���㣡");
		qm.ȫ����ɫ����("[ѫ������] : ["+qm.getName()+"] �ɹ���ս������ѫ�£���Ϊ������������");//����
		qm.dispose();
    }else{
		qm.sendOk("���������û�ﵽ��սҪ��,��սʧ�ܣ�");
}
}
}
function end(mode, type, selection) {}

/*function getMedalType(ids) {
    var thestring = "#b";
    var extra;
    for (x = 0; x < ids.length; x++) {
	extra = "#L" + x + "##t" + ids[x] + "##l\r\n";
	thestring += extra;
    }
    thestring += "#k";
    return thestring;
}*/
