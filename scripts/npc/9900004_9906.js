/*
 ����ҽ��׵���
 */

var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";

 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" ���������װ���ˣ��ǵ�����Ŷ��");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		
		
        var selStr = "             #v4000463#�����ǻ��ҽ�������#v4000463#"
			selStr += "\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+""
			//selStr += "\r\n#L0#"+����+"װ������"+����+"#l";
			selStr += "#L1#"+����+"������"+����+"#l";
			selStr += "#L15#"+����+"�������"+����+"#l";
			selStr += "#L16#"+����+"�һ����"+����+"#l\r\n\r\n";
			selStr += "#L0#"+����+"������"+����+"#l";
			selStr += "#L10#"+����+"���˱Ҷһ�"+����+"#l";
			//selStr += "#L2#��������#v1432167##l";
			//selStr += "\r\n#L3#��������#v1003797##l";
			//selStr += "#L4#������Ʒ#v1102481##l";
			//selStr += "#L5#��װ����#v1102510##l";
			
			//selStr += "\r\n\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

			//selStr += "#L11#��������#v2049100##l";
			//selStr += "#L12#������ԭ#v2270004##l";
			//selStr += "#L13#���޽�#v5570000##l";
			//selStr += "\r\n#L14#����ǿ��#v2040709##l";
			
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			cm.dispose();
            cm.openNpc(9900004, 9923);
            return;	
		};
		if(selection == 1){
			cm.dispose();
            cm.openNpc(9900004, 9913);
            return;
		};
		if(selection == 10){
			cm.dispose();
            cm.openNpc(9900004, 9924);
            return;
		};
		if(selection == 15){
			cm.dispose();
            cm.openNpc(9900004, 9920);
            return;
		};
		if(selection == 16){
			cm.dispose();
            cm.openNpc(9900004, 9922);
            return;
		};
		if(selection == 2){
			cm.dispose();
            cm.openNpc(9900004, 9896);
            return;
		};
		if(selection == 3){
			cm.dispose();
            cm.openNpc(9900004, 9897);
            return;
		};
		if(selection == 4){
			cm.dispose();
            cm.openNpc(9900004, 9992);
            return;
		};
		if(selection == 11){
			cm.dispose();
            cm.openNpc(9900004, 9899);
            return;
		};
		if(selection == 12){
			cm.dispose();
            cm.openNpc(9900004, 9900);
            return;
		};
		if(selection == 13){
			cm.dispose();
            cm.openNpc(9900004, 9902);
            return;
		};
		if(selection == 14){
			cm.dispose();
            cm.openNpc(9900004, 9903);
            return;
		};
		if(selection == 5){
			cm.dispose();
            cm.openNpc(9900004, 9901);
            return;
		};
    } else if (status == 3) {
		cm.sendOk("�쳣");
        cm.dispose();
    }
}