/*
 NPC Name: 		The Forgotten Temple Manager
 Map(s): 		Deep in the Shrine - Forgotten Twilight
 Description: 		Pink Bean battle starter
 */
        var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("��ĵȼ�����120���o������");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
        cm.sendOk("ֻ�����l��1����");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("PinkBeanBattle");

    if (em == null) {
        cm.sendOk("�_���e�`��Ո�M����T��");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160104);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (eim_status == null || eim_status.equals("0")) {

        var squadAvailability = cm.getSquadAvailability("PinkBean");
        if (squadAvailability == -1) {
            status = 0;
            cm.sendYesNo("�����dȤ�ɞ��h�����L?");
        } else if (squadAvailability == 1) {
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("PinkBean");
            if (type == -1) {
                cm.sendOk("����h��ꠕr�g���ţ����Ա����������Ոһ���h���.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("PinkBean");
                if (memberType == 2) {
                    cm.sendOk("���ѽ����������ˡ�");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("��Ҫ��ʲ�N? \r\n#b#L0#�����h���#l \r\n#b#L1#�˳��h���#l \r\n#b#L2#�鿴�h��꠳ɆT#l");
                } else if (memberType == -1) {
                    cm.sendOk("����h��ꠕr�g���ţ����Ա����������Ոһ���h��ꠡ�");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("��Ҫ��ʲ�N?\r\n#b#L0#�����h���#l \r\n#b#L1#�˳��h���#l \r\n#b#L2#�鿴�h��꠳ɆT#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("��Ҫ��ʲ�N? \r\n#b#L0#�鿴�h��꠳ɆT#l \r\n#b#L1#�Ƴ��h��꠆T#l \r\n#b#L2#��݋�����б�#l \r\n#r#L3#�M��؈D#l");
                // TODO viewing!
            }
        } else {
            /*var eim = cm.getDisconnected("PinkBeanBattle");
             if (eim == null) {
             var squd = cm.getSquad("PinkBean");
             if (squd != null) {
             cm.sendYesNo("�����h��ꠣ����ڌ�����.\r\n" + squd.getNextPlayer());
             status = 3;
             } else {
             cm.sendOk("�����h��ꠣ����ڌ�����.");
             cm.safeDispose();
             }
             } else {
             cm.sendYesNo("��؁��˰����F���Ƿ�Ҫ���·����h������ڈ���?");
             status = 2;
             }*/


            var props = em.getProperty("leader");
            if (props != null && props.equals("true")) {
                var eim = cm.getDisconnected("PinkBeanBattle");
                if (eim == null) {
                    cm.sendOk("�����h��ꠣ����ڌ����С�");
                    cm.safeDispose();
                } else {
                    cm.sendOk("�����h��ꠣ����ڌ����С�");
                    cm.safeDispose();
                }
            } else {
                cm.sendOk("�ܱ�Ǹ����h�����L�x�_�ˬF���������㲻���ٷ��ؑ�����");
                cm.safeDispose();
            }
        }
    } else {



        var props = em.getProperty("leader");
        if (props != null && props.equals("true")) {
            var eimc = em.getInstance("PinkBeanBattle");
            var propsc = eimc.getProperty("isSquadPlayerID_" + cm.getPlayer().getId());
            var sayc = "\r\n" + (eimc == null ? "eimc is null" : propsc) + "\r\n";
            if ((eimc != null) && (propsc != null) && propsc.equals("1")) {
                status = 13;
                sayc += "#b�F���Ƿ�Ҫ���·����h������ڈ��أ�";
                sayc += "\r\n#r#L1#���·����h������ڈ���#l";
                cm.sendSimple(sayc);
            } else {
                eim = cm.getDisconnected("PinkBeanBattle");
                if (eim == null) {
                    cm.sendOk("�����h��ꠣ����ڌ����С�" + sayc);
                    cm.safeDispose();
                } else {
                    cm.sendOk("�����h��ꠣ����ڌ����С�" + sayc);
                    cm.safeDispose();
                }
            }
        } else {
            var eimd = em.getInstance("PinkBeanBattle");
            var propsd = eimd.getProperty("isSquadPlayerID_" + cm.getPlayer().getId());
            var sayd = "\r\n" + (eimd == null ? "eimd is null" : propsd) + "\r\n";
            if ((eimd != null) && (propsd != null) && propsd.equals("1")) {
                status = 13;
                sayd += "#b�F���Ƿ�Ҫ���·����h������ڈ��أ�";
                sayd += "\r\n#r#L1#���·����h������ڈ���#l";
                cm.sendSimple(sayd);
            } else {
                cm.sendOk("�ܱ�Ǹ����h�����L�x�_�ˬF���������㲻���ٷ��ؑ�����");
                cm.safeDispose();
            }
        }

        /*var eim = cm.getDisconnected("PinkBeanBattle");
         if (eim == null) {
         var squd = cm.getSquad("PinkBean");
         if (squd != null) {
         cm.sendYesNo("�����h��ꠣ����ڌ�����.\r\n" + squd.getNextPlayer());
         status = 3;
         } else {
         cm.sendOk("�����h��ꠣ����ڌ�����.");
         cm.safeDispose();
         }
         } else {
         cm.sendYesNo("��؁��˰����F���Ƿ�Ҫ���·����h������ڈ���?");
         status = 2;
         }*/
    }
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.getPlayer().getBossLogD("Ƥ��౴Δ�") == 3) {
                    cm.sendNext("�ܱ�Ǹÿ��ֻ�ܴ�3��..");
                    cm.dispose();
                    return;
                }
                if (cm.registerSquad("PinkBean", 5, " �ѳɞ��h����L����Ҫ�����h��꠵����Ո�_ʼ�M����Ո��")) {
                    cm.sendOk("��ɹ���Ո���h�����L�������ڽ���������ټ������Ո�h��ꠣ�Ȼ���_ʼ���Y��");
                    //cm.getPlayer().setBossLog("Ƥ��౴Δ�");
                } else {
                    cm.sendOk("�����h��꠳��e��");
                }
            }
            cm.dispose();
            break;
        case 2:
            if (!cm.reAdd("PinkBeanBattle", "PinkBean")) {
                cm.sendOk("�l��δ֪�e�`��Ո������ԇ��");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("PinkBean");
                if (cm.getPlayer().getBossLogD("Ƥ��౴Δ�") == 3) {
                    cm.sendNext("�ܱ�Ǹÿ��ֻ�ܴ�3��..");
                    cm.dispose();
                    return;
                }
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {

                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("���Ѽ������h��ꠡ�");
                    //cm.getPlayer().setBossLog("Ƥ��౴Δ�");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) { // join
                if (cm.getPlayer().getBossLogD("Ƥ��౴Δ�") == 3) {
                    cm.sendNext("�ܱ�Ǹÿ��ֻ�ܴ�3��..");
                    cm.dispose();
                    return;
                }
                var ba = cm.addMember("PinkBean", true);
                if (ba == 2) {
                    cm.sendOk("�h����˔��ѝM��Ո�����هLԇ��");
                } else if (ba == 1) {

                    //cm.getPlayer().setBossLog("Ƥ��౴Δ�");
                    cm.sendOk("��Ո�h��꠳ɹ���");
                } else {
                    cm.sendOk("���ѽ����h����e���ˡ�");
                }
            } else if (selection == 1) {// withdraw
                var baa = cm.addMember("PinkBean", false);
                if (baa == 1) {
                    cm.sendOk("�x�_�h��꠳ɹ���");
                } else {
                    cm.sendOk("�㲻���h����e�档");
                }
            } else if (selection == 2) {
                if (!cm.getSquadList("PinkBean", 0)) {
                    cm.sendOk("���δ֪���e�`���h��꠵�Ո�󱻾ܽ^�ˡ�");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("PinkBean", 0)) {
                        cm.sendOk("���δ֪���e�`���h��꠵�Ո�󱻾ܽ^�ˡ�");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("PinkBean", 1)) {
                        cm.sendOk("���δ֪���e�`���h��꠵�Ո�󱻾ܽ^�ˡ�");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("PinkBean", 2)) {
                        cm.sendOk("���δ֪���e�`���h��꠵�Ո�󱻾ܽ^�ˡ�");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("PinkBean") != null) {
                        var dd = cm.getEventManager("PinkBeanBattle");
						//��¼�ط�
						�ط���¼("PinkBean", "Ʒ���͵����ط�", "Ƥ��౴Δ�");
                        dd.startInstance(cm.getSquad("PinkBean"), cm.getMap(), 160104);
                    } else {
                        cm.sendOk("���δ֪���e�`���h��꠵�Ո�󱻾ܽ^�ˡ�");
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember("PinkBean", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("PinkBean", selection);
            }
            cm.dispose();
            break;
        case 13:
            var em = cm.getEventManager("PinkBeanBattle");
            if ((selection == 1) && (em != null)) {
                var eim = em.getInstance("PinkBeanBattle");
                if ((eim != null) && (eim.getProperty("isSquadPlayerID_" + cm.getPlayer().getId()) != null)) {
                    eim.registerPlayer(cm.getPlayer());
                }
            }
            cm.dispose();
            break;
    }
}

function �ط���¼(type, name1, name2) {
	var sq = cm.getSquad(type);
	var members = sq.getMembers();
	var bosscopy = cm.getBosslogManager();
	for (var i in members) {
		var chr = cm.getMap().getCharacterByName(members[i]);
		if (chr != null) {
			
			bosscopy.setBossLog(name1, chr);
			bosscopy.setBossLog(name2, chr);
		}
	}
}