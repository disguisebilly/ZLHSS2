﻿/*
		射手村整形NPC 加入换眼晴颜色
*/
var status = 0;
var beauty = 0;
var price = 5000000;
var aaa = "#fEffect/CharacterEff/1032054/0/0#";
var bbb = "#fEffect/CharacterEff/1032054/0/0#";
var vvv = "#fEffect/CharacterEff/1032054/0/0#";
//上男下女
var mhair2 = Array(45000,46040,35700,46000,45130,43770,43760,45010,37960,35220,40060,35290,35710,45080,45070,45040,45030,45020,44890,44880,44870,44600,44580,44570,44560,44550,44540,44530,44180,44170,44160,44150,44080,44140,44130,44100,44110,43900,43890,43830,43820,43810,43800,43790,43770,73760,43750,43740,43730,43700,43690,43680,43670,43660,43650,43600,43590,43580,43570,43430,43420,43400,43340,43330,43320,43310,43300,43290,43280,43250,43240,43230,43220,43200,43190,43180,43150,43140,43130,43120,43020,43010,43000,42120,42110,42080,42040,42010,40040,40050,40060,40090,40100,40110,40120,40280,40290,40420,40470,40490,40500,40510,40580,40600,40620,40610,40720,40690,40700,40710,40730,40740,40750,40760,40770,40780,40790,40800,40810,40820,40830,40840,36300,36290,36340,36310,36130,36120,36140,36010,35690,35650,35550,35630,35500,35260,35290,35330,35340,35050,35090,35110,35120,35130,35150,33810,33430,33250,33240,32440,32500,32510,32120);

var fhair3 = Array(47394,41930,48000,47460,47070,47030,44010,43870,41700,37700,38520,34450,37530,38700,38680,38660,38640,38600,38560,38460,38410,37890,37910,37950,38620,38710,38730,38740,38760,38790,38800,38810,38850,38930,38940,32150,34950,34940,34960,37310,37320,37330,37340,37350,37361,37370,37400,37410,37420,37430,37440,37450,37460,37490,37500,37510,37520,37530,37540,37550,37560,37570,37580,37610,37620,37630,37640,37650,37660,37670,37680,37690,37700,37710,37720,37730,37740,37750,37760,37770,37780,37790,37800,37810,37820,37830,37840,37850,37860,37880,37900,37920,37930,37940,37950,37960,37970,37980,37990,38000,38010,38020,38030,38040,38050,38060,38070,38080,38090,38100,38110,38120,38130,38150,38160,38220,38240,38250,3860,38270,38280,38290,38300,38310,38320,38330,38340,38350,38360,38370,38380,38390,38470,38500,38480);




var mhair3 = Array(35290,35710,35720,35770,35800,35440,35430,35500,35350,35340,35600,35630,35690,35750,35730,35721,35712,35705,35693,35550,35084,35063,35211,35360,35330,35460,35440,35430,35560,35602,36340,35090,35080,35160,35150,35130,35120,35110,35100,35190,35240,35230,35220,35350,36130,36160,36140,36170,36480,36470,36460,36450,36620,36630,36640,36650,36670,36690,36710,36730,36740,36750,36760,36770,36800,36820,36840,36860,36890,36900,36920,36930,36980,36940,36990,33380,33750,33790,34370,34940,35000,35010,35020,35030,35040,35050,35070,37690,37890,31870,32470,32490,33645,35060,35180,35200,35210,35260,35340,36230,36680,36490,36810,36830,36880,36950,37120,36700);
var fhair2 = Array(37320,41660,47390,47380,47330,47300,47290,47170,47160,47150,47110,47100,47090,47070,47060,47040,47030,47020,47010,47000,44120,44090,44070,44060,44050,44040,44990,44980,44950,44940,44930,44030,44020,44010,44000,43880,43870,44920,44910,44900,44850,44840,44830,44820,44810,44800,44790,44780,44770,43620,43640,43630,43610,44650,43410,44610,44590,44520,44510,44500,44490,44480,44470,43210,44460,44430,44420,44410,44400,44390,44380,44370,44360,42090,44330,44320,44310,44300,41900,41890,41880,41870,41860,41850,41840,41830,41820,41810,41800,41780,41770,41760,41720,41710,41700,41690,41670,41650,37980,38320,38390,38430,38420,38680,38760,38930,41750,41740,41730,41990,41090,41120,41150,41160,41460,41480,41490,41510,41530,41550,37930,41910,41980,41970,41960,41950,41940,41930,41920,44290,44200,44190,32130);
var hairnew = Array();
var mface = Array(20035,20147,20030,20033,20038,20043,20046,20040,20061,20066,20070,20082,23013,23016,23017,23021,23022,23023,23024,23025,23028,23032,23033,23034,23035,23055,23054,23057,23058,23059,23063,23064,23065,23067,23068,23069,23076,23077,23078,23079,23080,23081,23082,23083,23084,23086,23088,23092,23097,23098,23099,25000,25006,25007,25008,25012,25013,25014,25016,25018,25019,25020,25022,25023,25024,25025,25028,25029,25030,25031,25034,25043,25049,25054,25055,25056,25057,25059,25060,25061,25070,25074,25094);
var fface = Array(21028,21033,21036,21031,21041,21043,21044,21045,21062,21079,21081,21099,21098,21889,21892,24001,24007,24008,24012,24020,24022,24023,24024,24025,24027,24029,24038,24051,24052,24053,24055,24057,24056,24058,24059,24060,24063,24066,24067,24068,24071,24072,24077,24078,24079,24080,24081,24082,24084,24085,24087,24088,24095,24096,24097,24098,25044,25045,25046,25077,25076,26003,26004,26005,26007,26008,26015,26016,26018,26019,26020,26021,26022,26023,26024,26025,26026,26028,26029,26030,26031,26033,26034,26035,26036,26037,26046,26052,26053,26057,26058,26059,26060,26061,26063,26064,26065,26073,26074,26077,26827);
var facenew = Array();
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
		if (cm.getMapId() == 101050000) {
            cm.sendOk("防止美容美发BUG导致掉线。禁止在自由市场使用.")
            cm.dispose();
        } 
    else if (status == 0) {
            cm.sendSimple("你好我是大头国的爱德华，如果你有#v5150040##v5150040#我可以帮你改变指定的发型脸型#r（商城有卖哦）\r\n#b已经基本更新所有156皇家脸型和发型,有没找到的可以联系管理添加。\r\n\r\n#L0#" + aaa + " #r自选脸型 #l\r\n#L8#" + aaa + " 自选发型#e #n#l\r\n"); //#L18#" + aaa + " 机器人整容#k（永不变心的陪伴你#n）#l  #L8#" + aaa + " #r贵族130最新发型（永久免费）#l\r\n    #L0#" + aaa + " 改变脸型（普通玩家会员专用免费）#l\r\n
        } else if (status == 1) {
            if (selection == 0) {
                facenew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mface.length; i++) {
                        facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fface.length; i++) {
                        facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                }
                cm.sendStyle("我可以改变你的脸型,让它比现在看起来漂亮. 你为什么不试着改变它下? ,我将会帮你改变你的脸型,那么选择一个你想要的新脸型吧!", facenew, 5150040,false);
           
            } else if (selection == 8) {
                beauty = 8;
                facenew = Array();
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair2.length; i++) {
                        hairnew.push(mhair2[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair2.length; i++) {
                        hairnew.push(fhair2[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 5150040,false);
            }
        } else if (status == 2) {
            cm.dispose();
            if (beauty == 0) {
                if (cm.haveItem(5150040) == 1) {
                    cm.gainItem(5150040, -1);
                    cm.setFace(facenew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的#v5150040#皇家理发券,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
        
            } else if (beauty == 8) {
                if (cm.haveItem(5150040) == 1) {
                    cm.gainItem(5150040, -1);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的#v5150040#皇家理发券,我恐怕不能给你进行理发,我很抱歉.请你先购买吧.");
                }

            }
        }
    }
}