﻿status = -1;
var itemList = Array(
        Array(2022216, 600, 1, 0), //菇菇宝贝的御守
        Array(2022217, 600, 1, 0), //残暴炎魔的御守
        Array(2022218, 600, 1, 0), //巴洛古的御守
        Array(2022219, 600, 1, 0), //海怒斯的御守
        Array(2022220, 600, 1, 0), //拉图斯的御守
        Array(2022223, 600, 1, 0), //企鹅王的御守
        Array(2022565, 600, 1, 0), //一片巧克力蛋糕
        Array(2022566, 600, 1, 0), //一片草莓蛋糕
        Array(2022567, 600, 1, 0), //一片鲜奶油蛋糕
        Array(1002509, 600, 1, 0), //真‧枫叶头盔
        Array(1002510, 600, 1, 0), //真‧枫叶头盔
        Array(1002511, 600, 1, 0), //真‧枫叶头盔
        Array(1002600, 600, 1, 0), //红色枫叶头带
        Array(1002601, 600, 1, 0), //黄色枫叶头带
        Array(1002603, 600, 1, 0), //白色枫叶头带
        Array(1032040, 600, 1, 0), //枫叶赤光耳环
        Array(1032041, 600, 1, 0), //枫叶赤光耳环
        Array(1032042, 600, 1, 0), //枫叶赤光耳环
        Array(1102071, 400, 1, 0), //真‧枫叶披风
        Array(4001197, 100, 1, 0), //水蓝色矿石
        Array(1122002, 600, 1, 0), //红色蝶形领结
        Array(1122003, 600, 1, 0), //黄色蝶形领结
        Array(1122004, 600, 1, 0), //粉红蝶形领结
        Array(1122005, 600, 1, 0), //黑色蝶形领结
        Array(1122006, 600, 1, 0), //蓝色蝶形领结
        Array(1082146, 600, 1, 0), //红色工作手套
        Array(1082147, 600, 1, 0), //蓝色工作手套
        Array(1082148, 600, 1, 0), //紫色工作手套
        Array(1082150, 600, 1, 0), //灰色工作手套
        Array(1002418, 600, 1, 0), //纸制头盔
        Array(1002391, 600, 1, 0), //绿色头巾
        Array(1002392, 600, 1, 0), //褐色头巾
        Array(1002393, 600, 1, 0), //粉红头巾
        Array(1002394, 600, 1, 0), //灰色头巾
        Array(1002395, 600, 1, 0), //紫色头巾
        Array(1002083, 600, 1, 0), //黑头巾
        Array(1102000, 600, 1, 0), //绿色冒险家披风
        Array(1102001, 600, 1, 0), //蓝色冒险家披风
        Array(1102002, 600, 1, 0), //红色冒险家披风
        Array(1102003, 600, 1, 0), //白色冒险家披风
        Array(1102004, 600, 1, 0), //黑色冒险家披风
        Array(1332053, 600, 1, 0), //野外烧烤串
        Array(1332020, 600, 1, 0), //太极扇
        Array(1372008, 600, 1, 0), //日本扇
        Array(1312013, 600, 1, 0), //绿画笔
        Array(1312014, 600, 1, 0), //黑画笔
        Array(1032055, 600, 1, 0), //干员C的老旧耳机
        Array(1032056, 600, 1, 0), //干员C的老旧耳机
        Array(1032057, 600, 1, 0), //干员C的老旧耳机
        Array(1032058, 300, 1, 0), //干员C的超合金耳机
        Array(1032007, 600, 1, 0), //祖母绿耳环
        Array(1032000, 600, 1, 0), //锤珠耳环
        Array(1102040, 400, 1, 0), //黄色冒险家披风
        Array(1102015, 600, 1, 0), //蓝色魔法披风
        Array(1102016, 600, 1, 0), //红色魔法披风
        Array(1102017, 600, 1, 0), //白色魔法披风
        Array(1102018, 600, 1, 0), //黑色魔法披风
        Array(1002602, 400, 1, 0), //蓝色枫叶头带
        Array(2041113, 600, 1, 0), //戒子力量诅咒卷轴30%
        Array(2041115, 600, 1, 0), //戒子敏捷诅咒卷轴30%
        Array(2041117, 600, 1, 0), //戒子智力诅咒卷轴30%
        Array(2041119, 600, 1, 0), //戒子幸运诅咒卷轴30%
        Array(1082145, 600, 1, 0), //黄色工作手套
        Array(1302085, 160, 1, 0), //叉子
        Array(1302067, 400, 1, 0), //枫之谷纪念旗
        Array(1302049, 300, 1, 0), //光线鞭子
        Array(1402014, 360, 1, 0), //温度计
        Array(1442025, 600, 1, 0), //青龙偃月刀
        Array(1302267, 8, 1, 1), //觉醒的狮子心型弯刀
        Array(1332223, 8, 1, 1), //觉醒的雷本魂巴塞拉德
        Array(1372175, 8, 1, 1), //觉醒的龙尾巴短仗
        Array(1382210, 8, 1, 1), //觉醒的龙尾巴法仗
        Array(1402192, 8, 1, 1), //觉醒的狮子心型炼狱弯刀
        Array(1432165, 8, 1, 1), //觉醒的狮子心型普斯齐纳
        Array(1442220, 8, 1, 1), //觉醒的狮子心型帕尔提残
        Array(1452203, 8, 1, 1), //觉醒的帕尔困混合弓
        Array(1462191, 8, 1, 1), //觉醒的帕尔困赫比克洛斯弓
        Array(1472212, 8, 1, 1), //觉醒的雷本魂金属拳
        Array(1482166, 8, 1, 1), //觉醒的侠客图斯白毛抓
        Array(1492177, 8, 1, 1), //觉醒的侠客图会心射手
        Array(1113072, 28, 1, 1), //初级培罗德戒指
        Array(1132243, 28, 1, 1), //初级培罗德皮带
        Array(3010939, 12, 1, 1), //异界的匈奴比椅子
        Array(3010866, 36, 1, 1), //匈奴族长在身边
        Array(3010718, 16, 1, 1), //欢乐云朵椅子
        Array(3010854, 20, 1, 1), //集合!祕密的怪物们
        Array(3010513, 28, 1, 1), //开心得比艾勒
        Array(3010600, 36, 1, 1), //福宝月妙椅子
        Array(3010281, 36, 1, 1), //动物栏椅子
        Array(3010737, 16, 1, 1), //动物英雄团椅子
        Array(3015043, 24, 1, 1), //枫之谷宝石椅子
        Array(3015124, 16, 1, 1), //绿宝石热爱者椅子
        Array(3010705, 16, 1, 1), //月妙和绿水玲椅
        Array(3010212, 28, 1, 1), //藏獒守护椅
        Array(3010038, 28, 1, 1), //透明椅
        Array(3010735, 28, 1, 1), //关于浪漫
        Array(3010459, 24, 1, 1), //美丽可爱天使
        Array(3010512, 24, 1, 1), //与斑斑一起
        Array(3010515, 16, 1, 1), //奇岩矿石之椅
        Array(3010663, 12, 1, 1), //没名超帅看板
        Array(3010806, 12, 1, 1), //没名樱花
        Array(3012024, 12, 1, 1), //没名度假椅子
        Array(3010876, 12, 1, 1), //枫之谷世界椅子
        Array(3010660, 12, 1, 1), //童话中宫殿
        Array(3010659, 20, 1, 1), //公车站椅子
        Array(3010946, 20, 1, 1), //树林朋友露营椅子
        Array(3010714, 20, 1, 1), //堆叠王冠椅子
        Array(3010716, 20, 1, 1), //超级菇菇椅子
        Array(3015089, 20, 1, 1), //马戏团的训兽师
        Array(3015092, 16, 1, 1), //?????????
        Array(3010795, 16, 1, 1), //森林休闲处的椅子
        Array(3010744, 20, 1, 1), //枫之谷积木
        Array(3010722, 20, 1, 1), //僵尸狩猎者
        Array(3010643, 20, 1, 1), //10周年祝贺蛋糕
        Array(3010623, 28, 1, 1), //我的好友纳奥椅
        Array(3010622, 28, 1, 1), //我的好友丹金椅
        Array(3010781, 28, 1, 1), //我的好友木马椅
        Array(3010518, 24, 1, 1), //印地安的兄弟姊妹
        Array(3010589, 16, 1, 1), //需要充电
        Array(1142249, 12, 1, 0), //我是幸运儿
        Array(1002671, 16, 1, 0), //德国香肠
        Array(1302146, 50, 1, 1), //Last 不速之客 单手剑
        Array(1332119, 50, 1, 1), //Last 不速之客 短剑(LUK)
        Array(1372077, 50, 1, 1), //Last 不速之客 杖
        Array(1382098, 50, 1, 1), //Last 不速之客 长杖
        Array(1402089, 50, 1, 1), //Last 不速之客 双手剑
        Array(1432080, 50, 1, 1), //Last 不速之客 枪
        Array(1442110, 50, 1, 1), //Last 不速之客 矛
        Array(1452105, 50, 1, 1), //Last 不速之客 弓
        Array(1462090, 50, 1, 1), //Last 不速之客 弩
        Array(1472116, 50, 1, 1), //Last 不速之客 拳套
        Array(1482078, 50, 1, 1), //Last 不速之客 指虎
        Array(1302147, 24, 1, 1), //VIP 单手剑
        Array(1332120, 24, 1, 1), //VIP 短剑(LUK)
        Array(1372078, 24, 1, 1), //VIP 杖
        Array(1382099, 24, 1, 1), //VIP 长杖
        Array(1402090, 24, 1, 1), //VIP 双手剑
        Array(1432081, 24, 1, 1), //VIP 枪
        Array(1442111, 24, 1, 1), //VIP 矛
        Array(1452106, 24, 1, 1), //VIP 弓
        Array(1462091, 24, 1, 1), //VIP 弩
        Array(1472117, 24, 1, 1), //VIP 拳套
        Array(1482079, 24, 1, 1), //VIP 指虎
        Array(1352703, 24, 1, 1), //穿甲连发枪
        Array(1352702, 50, 1, 1), //高等连发枪
        Array(1012259, 48, 1, 1), //高级黑绿色标记
        Array(1113036, 20, 1, 1), //高级枫叶紫色戒指
        Array(1032177, 40, 1, 1), //无限的黑龙耳环
        Array(1072844, 120, 1, 1), //枫之谷竞赛者鞋
        Array(1052187, 220, 1, 1), //热狗套服(力量)
        Array(1052188, 220, 1, 1), //热狗套服(敏捷)
        Array(1052189, 220, 1, 1), //热狗套服(智力)
        Array(1052190, 220, 1, 1), //热狗套服(幸运)
        Array(1032026, 120, 1, 1), //金祖母绿耳环
        Array(1082149, 40, 1, 1), //褐色工作手套
        Array(1012070, 32, 1, 1), //草莓冰棒
        Array(1022067, 40, 1, 1), //黑狐狸猴
        Array(1112915, 160, 1, 1), //欢乐指环
        Array(1102042, 80, 1, 1), //紫色冒险家披风
        Array(1102041, 60, 1, 1), //粉红冒险家披风
        Array(1122019, 60, 1, 1), //枫叶之心
        Array(1122017, 60, 1, 1), //精灵坠饰
        Array(1012056, 80, 1, 1), //狗鼻
        Array(1022047, 80, 1, 1), //猫头鹰
        Array(1022060, 60, 1, 1), //狐猴眼部装饰
        Array(1112401, 120, 1, 1), //休菲凯曼的戒指
        Array(1302063, 20, 1, 1), //烈焰刃
        Array(1402044, 20, 1, 1), //南瓜灯笼
        Array(1322051, 52, 1, 1), //七夕彩竹
        Array(1302067, 52, 1, 1), //枫之谷纪念旗
        Array(1302021, 52, 1, 1), //橡皮榔头
        Array(1302024, 52, 1, 1), //纸剑
        Array(1142719, 48, 1, 1), //非自发性的单身主义者
        Array(1142207, 48, 1, 1), //春花胸针
        Array(3010032, 40, 1, 1), //黄色五环椅
        Array(3010033, 40, 1, 1), //绿色五环椅
        Array(3010036, 32, 1, 1), //荡秋千
        Array(3020002, 28, 1, 1), //受诅咒的椅子
        Array(3010450, 28, 1, 1), //艾利缇椅子
        Array(3010760, 28, 1, 1), //古代洗澡堂椅子
        Array(1012421, 28, 1, 1), //进化冰结晶
        Array(3010138, 36, 1, 1), //躺椅
        Array(3012001, 36, 1, 1), //营火
        Array(3010085, 32, 1, 1), //Olivia's Chair
        Array(3010021, 32, 1, 1), //暖暖桌
        Array(3010096, 32, 1, 1), //恐龙化石宝座
        Array(3010222, 32, 1, 1), //兔子伴读椅
        Array(3010186, 28, 1, 1), //兔子椅子
        Array(3010223, 28, 1, 1), //柯基犬椅子
        Array(3010282, 28, 1, 1), //送子鹳椅
        Array(3010025, 28, 1, 1), //枫树下
        Array(3010028, 28, 1, 1), //俘虏我吧！椅子
        Array(3010049, 28, 1, 1), //冰窖椅
        Array(3010056, 28, 1, 1), //充电器椅
        Array(3010072, 28, 1, 1), //酋长椅
        Array(3010083, 28, 1, 1), //扇子月妙抱枕椅
        Array(3010084, 28, 1, 1), //太平萧月妙抱枕椅
        Array(3010107, 24, 1, 1), //龙蛋
        Array(3010108, 24, 1, 1), //秋千
        Array(3010119, 24, 1, 1), //羊椅子
        Array(3010144, 28, 1, 1), //七夕椅
        Array(3010169, 28, 1, 1), //小猫椅
        Array(3010183, 28, 1, 1), //红萝卜椅子
        Array(3010184, 28, 1, 1), //冰钓椅
        Array(3010320, 28, 1, 1), //老奶奶的童话书椅子
        Array(3010208, 28, 1, 1), //黑猫椅
        Array(3010288, 28, 1, 1), //珍珠蚌椅子
        Array(3010404, 28, 1, 1), //希拉的最美时尚
        Array(3010433, 28, 1, 1), //魔法皮卡啾
        Array(3010457, 28, 1, 1), //和拉尼亚一起去野餐
        Array(3010446, 28, 1, 1), //皮肤女王椅子
        Array(3010494, 32, 1, 1), //TV椅子
        Array(3010043, 32, 1, 1), //女巫扫把
        Array(3010045, 32, 1, 1), //冰椅
        Array(3010046, 28, 1, 1), //赤龙椅
        Array(3010047, 28, 1, 1), //蓝龙椅
        Array(3010051, 24, 1, 1), //公砂兔椅
        Array(3010052, 24, 1, 1), //母砂兔椅
        Array(3010053, 32, 1, 1), //兔子沙发
        Array(3010123, 36, 1, 1), //花漾彩蝶椅
        Array(3010139, 32, 1, 1), //我的王座
        Array(3010140, 36, 1, 1), //病床
        Array(3010149, 36, 1, 1), //凉夏猫咪椅
        Array(3010071, 36, 1, 1), //迷你神兽椅
        Array(3010099, 36, 1, 1), //北极熊椅
        Array(3010173, 36, 1, 1), //塔罗牌椅子
        Array(3010196, 36, 1, 1), //泡泡浴缸椅
        Array(3010296, 36, 1, 1), //圣诞节糖果椅
        Array(3010298, 36, 1, 1), //北极熊椅子
        Array(3010375, 32, 1, 1), //奥妙的超级药水椅子
        Array(3010376, 32, 1, 1), //热情红色药水椅子
        Array(3010377, 32, 1, 1), //新鲜蓝色药水椅子
        Array(3010403, 32, 1, 1), //樱花处的小型音乐会
        Array(3010435, 32, 1, 1), //太阳雨椅子
        Array(3010442, 32, 1, 1), //小喵的拥抱
        Array(3010510, 32, 1, 1), //喵咪篮椅子
        Array(3010531, 36, 1, 1), //小企鹅合唱团
        Array(3012002, 28, 1, 1), //桧木泡澡桶
        Array(3010073, 16, 1, 1), //皮卡啾椅
        Array(3010120, 28, 1, 1), //兔子篮子椅子
        Array(3010170, 28, 1, 1), //飘雪的夜晚
        Array(3010172, 24, 1, 1), //星空夜晚
        Array(3010453, 28, 1, 1), //乘著暴风的兔子椅
        Array(3010454, 28, 1, 1), //爱心云朵椅
        Array(3010014, 16, 1, 1)//弯弯月亮
        );

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用了吗？");
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        if (cm.getPlayer().getLevel() < 50) {
            cm.sendOk("必须达到50级才能使用。");
            cm.dispose();
        } else if (cm.haveItem(5220000)) {
            cm.sendYesNo("你持有#b转蛋券#k你要试试手气吗?");
        } else {
            cm.sendOk("你没有转蛋券，请收集完成再来转蛋哦.");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if (cm.haveItem(5220000) && cm.canHold()) {
                cm.gainItem(5220000, -1);
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "潮流转蛋机");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.getItemLog("潮流转蛋机", " 抽到 " + itemId + "(" + cm.getItemName(itemId) + ") " + quantity + "个。");
                cm.sendOk("你得到了 #b#t" + itemId + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请确认背包是否已经满了以及是否有转蛋卷唷。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。");
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}
