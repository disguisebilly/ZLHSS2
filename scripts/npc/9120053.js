
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";



function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b�õ�,�´��ټ�.");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#b�õ�,�´��ټ�.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

//------------------------------------------------------------------------

        if (status == 0) {
   
            var add =  "\r\n       ΰ�����ʿ:#r#h ##k����ӭ����#r���ð�յ�#k\r\n   ÿ�տ���սŷ�������Ρ�\r\n\r\n";

             add +="#d              ��ǰ����սŷ����[#r"+cm.getPlayer().getBossLog('ŷ����') + "#k/3]��#l\r\n";
             add +="#d              ��ǰ����ս����ħŮŷ����[#r"+cm.getPlayer().getBossLog('����ħŮŷ����') + "#k/3]��#l\r\n";
             add +="#b#L4#           ��ս[ŷ����]#l\r\n";
             add +="#b#L1#           ��ս[����ħŮŷ����]#l\r\n";
             add += "#r#L3#          [������һؼҳԷ���]#l\r\n";



            cm.sendSimple(add);

//------------------------------------------------------------------------

        } else if (status == 1) {


        if (selection == 1) {
        cm.dispose();
                cm.openNpc(9120053,2);
        }

        if (selection == 2) 
            if (cm.getLevel() < 150 ) {  
                    cm.sendOk("����ͼ���Ƶȼ�150������������û���ʸ��ط�������ͼ");
                    cm.dispose();
                }else{
                    cm.warp(401060100);  
                    cm.serverNotice("[BOSS����]�����" + cm.getPlayer().getName() + "ʹ����BOSS�ط�������ʱ����ص�������ε�ʱ������~");
                    cm.dispose();
                    return;
                } 

        if (selection == 3) {
            cm.dispose();   
            cm.warp(401040000);
            
        }

        if (selection == 4) {
        cm.dispose();
            cm.openNpc(9120053,1);
        }

        if (selection == 5) 
            if (cm.getLevel() < 150 ) {  
                    cm.sendOk("����ͼ���Ƶȼ�150������������û���ʸ��ط����װ�����������");
                    cm.dispose();
                }else{
                    cm.warp(240060201);  
                    cm.serverNotice("[BOSS����]�����" + cm.getPlayer().getName() + "ʹ����BOSS�ط�������ʱ����ص�������ʱ������~");
                    cm.dispose();
                    return;
                } 

        if (selection == 6) {
        cm.dispose();
                cm.openNpc(9010000, "����תְ");

        
            }
        if (selection == 7) {
        cm.dispose();
                cm.openNpc(9010000, "װ��ǿ��");

            }
        if (selection == 8) {
        cm.dispose();
                cm.openNpc(9010000, "ʦͽϵͳ");
            }
        if (selection == 9) {
        cm.dispose();
                cm.openNpc(9010000, "ÿ������");

        
            }
        if (selection == 10) {
        cm.dispose();
                cm.openNpc(9010000, "�ƹ�ϵͳ");

        
            }
        if (selection == 11) {
        cm.dispose();
                cm.openNpc(9010000, "���ƹ���");

        
            }
        if (selection == 12) {
        cm.dispose();
                cm.openNpc(9010000, "�ƹ��̵�");

        
            }
        if (selection == 13) {
        cm.dispose();
                cm.openNpc(9010000, "�ƹ�����");

        
            }
        if (selection == 14) {
        cm.dispose();
                cm.openNpc(9010000, "BOSS�ٻ�");

        
            }
        if (selection == 15) {
        cm.dispose();
                cm.openNpc(9010000, "ѫ��ǿ��");


            }
        if (selection == 16) {
        cm.dispose();
                cm.openNpc(9010000, "���߽���");

            }

                

        
             
        }
    }
}

