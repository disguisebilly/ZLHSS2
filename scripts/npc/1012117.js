/* ==================
 脚本类型: NPC	    
 脚本版权：枫之谷团队
 联系扣扣：297870163    609654666
 =====================
 */
 load("nashorn:mozilla_compat.js");importPackage(java.lang);
 load("nashorn:mozilla_compat.js");importPackage(Packages.tools);
 load("nashorn:mozilla_compat.js");importPackage(Packages.client);
 load("nashorn:mozilla_compat.js");importPackage(Packages.server);
 load("nashorn:mozilla_compat.js");importPackage(Packages.tools.packet); 
 var status = -1;
 var beauty = 0;
 var hair_Colo_new;
 
 function action(mode, type, selection) {
     if (mode == 0) {
     cm.dispose();
     return;
     } else {
     status++;
     }
 
     if (status == 0) {
     cm.sendSimple("嗨，我是爱德华如果你有 #b#t5150040##k, 我就可以施展我的技术随机为你打造属于你的发型. \r\n#L0#使用: #i5150040##t5150040##l\r\n\r\n#b#L1##v5150040#购买皇家理发券1张 980 点卷#l\r\n#b#L2##v5150040#购买皇家理发券10张 9500 点卷#l \r\n#b#L3##v5150038#购买超级明星美发卡 20000 点卷#l");
     } else if (status == 1) {
     if (selection == 0) {
         var hair = cm.getPlayerStat("HAIR");
         hair_Colo_new = [];
         beauty = 1;
 
         if (cm.getPlayerStat("GENDER") == 0) {
         hair_Colo_new = [35000,35090,35220,38360,35060,35100,35150,35200,35260,35270,35340,35350,35290,35300,35420,35450,35310,35330,35360,35430,35440,35460,35470,35510,35550,35560,35600,35660,36690,36710,36750,36760,36810,36820,36920,36340,36030,33810,33980,33670,33580,33320,36000,36420,36460,36470,36480,36510,36520,36530,36560,36580,36590,36640,36680,36700,33550,33820,33380,33930,32120,33150,33310,33600,33640,36310,33750,33250,33350,33440,35050,35170,35180,33290,33040,36300,33780,33700,33390,33260,33340,33240,33120,33000,35070,36290,33750,36310,36220,36180,36330,36120,36540,36770,33800,33740,33690,33630,33180,34440,33280,33300,33220,36360,33830,36010,36020,35020,32470,35130,35160,36550,36380,32440,];
         } else {
         hair_Colo_new = [37980,37860,37820,37670,37640,37300,37260,37140,37030,34670,38030,38050,38060,38220,38240,38320,37310,35080,35110,34980,35190,35210,38380,38390,38470,38480,38500,38310,38270,38130,38400,38410,38420,38430,38450,38530,38540,38600,38610,38440,38460,38490,38520,38560,38570,38580,38590,38620,36640,38650,38680,38690,38700,38770,31610,31560,31230,37640,37690,36980,38070,37990,37960,37930,37920,34450,37950,37810,37190,37060,37000,34970,34890,34860,34810,34770,34750,34670,34600,33970,34450,33140,37440,37450,37490,37560,34160,34300,34260,34240,34210,38290,38160,38100,38020,38010,38120,37330,37340,34060,37710,34870,34800,34760,37700,37320,34330,34840,34850,34830,34110,34510,34250,34270,37400,37370,37380,37350,37530,37520];
         }
         for (var i = 0; i < hair_Colo_new.length; i++) {
         hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
         }
         cm.sendYesNo("确定要使用 #b#t5150040##k 随机剪发了??");
         }else if(selection == 1){
             if(cm.getPlayer().getCSPoints(1) >= 980){
                 //cm.收点券(980);
                 //cm.给物品(5150040, 1);
                 cm.getPlayer().modifyCSPoints(2, -980, true);
                 cm.gainItem(5150040, 1);
                 cm.sendOk("购买成功！");
                 cm.worldMessage(6,"玩家：["+cm.getName()+"] 购买了1张皇家理发卷 祝他/她好运吧.");
                 cm.dispose();
             }else{
                 cm.sendOk("点卷不足无法购买!");
                 cm.dispose();
             }
         }else if(selection == 2){
             if(cm.getPlayer().getCSPoints(1) >= 9500){
                 //cm.收点券(9500);
                 //cm.给物品(5150040, 10);
                 cm.getPlayer().modifyCSPoints(2, -980, true);
                 cm.gainItem(5150040, 10);
                 cm.sendOk("购买成功！");
                 cm.worldMessage(6,"玩家：["+cm.getName()+"] 购买了10张皇家理发卷 祝他/她好运吧.");
                 cm.dispose();
             }else{
                 cm.sendOk("点卷不足无法购买!");
                 cm.dispose();
             }		
         }else if(selection == 3){
             if(cm.getPlayer().getCSPoints(1) >= 20000){
                 //cm.收点券(20000);
                 //cm.给物品(5150038, 1);
                 cm.getPlayer().modifyCSPoints(2, -980, true);
                 cm.gainItem(5150040, 10);
                 cm.sendOk("购买成功！");
                 cm.worldMessage(6,"玩家：["+cm.getName()+"] 购买了1张超级明星理发卷 获得美发潮人勋章 赶紧来抱大腿啦.");
                 cm.dispose();
             }else{
                 cm.sendOk("点卷不足无法购买!");
                 cm.dispose();
             }		
         }
     } else if (status == 2){
     if (beauty == 1){
         if (cm.setRandomAvatar(5150040, hair_Colo_new) == 1) {
         cm.sendOk("对你的新发型满意吗?");
         } else {
         cm.sendOk("貌似没有#b#t5150040##k。");
         }
     } 
     cm.safeDispose();
     }
     
 }
 