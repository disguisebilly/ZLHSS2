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
        qm.askAcceptDecline("#v1142030# #e#b#t1142030##k\n\r\n\r - ����#r�����๦�ܡ�#k��ս��ѫ�£�\n\r - ��ð�յ�������ǩ���ﵽһ���������ɻ�ȡ��");
    } else if (status == 1) {
        qm.sendNext("�����ס�����м�¼����ÿ���µĵ�һ�����á�");
    } else if (status == 2) {
        qm.sendNextPrev("ף����ˣ��Ⲣû������ȷ�������ڣ������������������ʸ�μӣ���ô����ʱ�����ң������ҾͿ���ȷ�����Ƿ����ʸ�μӡ���ס������������������ս�������㽫�޷���ս����ѫ�¡�");
        qm.dispose();
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
