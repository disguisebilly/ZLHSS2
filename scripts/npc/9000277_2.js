﻿/*
 * 菜菜制作 奇幻冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 * OX问答副本  问题检查NPC
 */

var status = 0;
var questions = new Array(
"机动车驾驶证被吊销的 公安交通管理部门除按照规定罚款外 还可以并??\r\nO:15 日以下拘留\r\nX:5 年不准领取驾驶证",
"尚未登记的机动车 需要临时上道路行驶 应当\r\nO:在车窗上张贴合格证\r\nX:取得临时通行牌证",
"申请机动车登记 机动车所有人不需要提交的证明或凭证是\r\nO:身份证明和机动车来历证明\r\nX:驾驶证",
"机动车在以下哪种情形不需要办理相应的登记\r\nO:用作抵押的\r\nX:进行大修的",
"允许收缴 扣留机动车驾驶证的机构是\r\nO:道路运输管理部门\r\nX:公安机关交通管理部门",
"机动车驾驶人??车辆\r\nO:应当依法、安全和文明驾驶\r\nX:可按照自己的习惯驾驶",
"驾驶人在??可以驾驶机动车。\r\nO:抽烟时\r\nX:饮茶后",
"下列不属于道路交通信号的是\r\nO:交通警察的指挥\r\nX:交通信息板",
"以下不属于道路交通信号是\r\nO:警灯\r\nX:交通警察的指挥",
"北京驾驶机动车，必须遵守??的原则。\r\nO:内侧通行\r\nX:右侧通行",
"没有划分机动车道 非机动车道和人行道的道路 机动车()\r\nO:在道路中间通行\r\nX:在道路两侧通行",
"机动车在没有限速标志的路段??\r\nO:应当保持安全车速\r\nX:应当以最高设计车速行驶",
"2000年夏季奥运会是在哪个城市举办的?\r\nO:悉尼\r\nX:东京",
"经常用来庆祝胜利的香槟酒起源于哪个国家?\r\nO:英国\r\nX:法国",
"卡拉OK是哪国人发明的?\r\nO:小日本\r\nX:美国",
"空调的发明者是哪国人?\r\nO:美国\r\nX:瑞典",
"一张20元人民币破损了2分之1 到银行可以兑换到多少钱?\r\nO:5元\r\nX:10元",
"肯德基的创始人是什么军衔?\r\nO:上尉\r\nX:上校",
"歌手刀郎的歌曲是形容哪一年的第一场雪?\r\nO:2002\r\nX:2012",
"人们常说花季的年纪指多少岁?\r\nO:14岁\r\nX:16岁",
"劳动法规定 劳动者试用期不能超过几个月?\r\nO:3个月\r\nX:6个月",
"壁虎在遇到敌人攻击 很危险的情况下会舍弃身体的什么部分逃走?\r\nO:狗头\r\nX:尾巴",
"变脸是我国哪个表演戏剧的绝活?\r\nO:川剧\r\nX:京剧",
"夜盲症缺呐喊总维生素所导致?\r\nO:维生素A\r\nX:维生素E",
"曾饰演许文强 小马哥 赌神 等景点角色的香港男影星是谁?\r\nO:周星驰\r\nX:周润发",
"陈凯歌导演的无极又被网友戏称一个什么引发的血案?\r\nO:包子\r\nX:馒头",
"麻婆豆腐是我国哪个菜系的传统名菜?\r\nO:川菜\r\nX:湘菜",
"鱼翅是哪种动物的鳍所制成的?\r\nO:鲸鱼\r\nX:鲨鱼",
"挥一挥衣袖不带走一片云彩是哪位著名诗人的诗句?\r\nO:徐志摩\r\nX:徐达摩",
"我国大陆家庭电路的电压统一使用为多少伏?\r\nO:220\r\nX:110",
"著名卡通形象米老鼠有几根手指?\r\nO:四根\r\nX:五根",
"中国法定节假日安排劳动者工作的 报酬不得低于普通工资的几倍?\r\nO:两倍\r\nX:三倍",
"自称9岁起博览群书 智商前三百年 后三百年无人能及的网络红人俗称什么?\r\nO:凤姐\r\nX:犀利哥",
"007系列电影中 特工男主角的名字叫什么?\r\nO:詹姆斯\r\nX:邦德",
"中国和朝鲜两国的界河叫做什么江?\r\nO:鸭绿江\r\nX:猴子江",
"被誉为绿色林海的大兴安岭位于我国哪个省份?\r\nO:黑龙江\r\nX:哈尔滨",
"羽毛球界被称为超级丹的运动员是谁?\r\nO:乔丹\r\nX:林丹",
"明月几时有，把酒问青天出自宋朝哪位词人之手?\r\nO:李清照\r\nX:苏轼",
"古书中男子手里常握有三尺，请问它指什么?\r\nO:书籍\r\nX:剑",
"义勇军进行曲是哪部电影的主题歌?\r\nO:风云儿女\r\nX:毛泽东",
"每一个少数民族都有自己喜爱的颜色 生长在大草原的蒙古族喜爱?\r\nO:白色\r\nX:绿色",
"唐代人可以称父亲为\r\nO:爹爹\r\nX:哥哥",
"人体如果失水多少就会危及生命? \r\nO:20%\r\nX:30%",
"最高级的爬行动物是\r\nO:鳄龟\r\nX:鳄鱼",
"无轨电车上的电动机用的是什么电?\r\nO:交流电\r\nX:直流电",
"被称为雷电法王的是?\r\nO:特斯拉\r\nX:杨永信",
"奥运会旗是:五色环旗,其中黄色环代表?\r\nO:亚洲\r\nX:非洲",
"下列国家哪个素有足球王国之称?\r\nO:葡萄牙\r\nX:巴西",
"职业拳击运动员争夺世界拳王必须多少周岁?\r\nO:21\r\nX:25",
"中华人民共和国这一国名最早是由谁提出的?\r\nO:任弼时\r\nX:张奚若",
"啄木鸟是害虫吗?\r\nO:是\r\nX:不是",
"WTO是哪个组织的称呼?\r\nO:世界贸易组织\r\nX:世界卫生组织",
"人体最大的器官是?\r\nO:脾脏\r\nX:皮肤",
"鸟类中最小的是?\r\nO:蜜蜂\r\nX:蜂鸟",
"一公斤铁和一公斤棉花哪一个轻?\r\nO:棉花\r\nX:一样重",
"被称作法国号的乐器是\r\nO:圆号\r\nX:贝斯",
"博士后是学位吗?\r\nO:yes\r\nX:no",
"我国高速公路对车辆最低时速有限制，一般不得低于\r\nO:60\r\nX:80",
"人的泪水里的咸味是从哪里来的?\r\nO:汗液\r\nX:血液",
"大豆蛋白属于优质蛋白吗?\r\nO:是的\r\nX:不是",
"太阳金字塔坐落在哪里?\r\nO:埃及\r\nX:墨西哥",
"光头,头上有头发吗?\r\nO:那必须有\r\nX:当然没有",
"黄瓜不宜与下列哪种食物搭配？\r\nO:番茄\r\nX:鸡蛋", 
"GTO麻辣教师是哪种类型的？\r\nO:动漫\r\nX动漫和电视剧", 
"泷泽萝拉是？\r\nO:模特\r\nX:日本女优", 
"中国死海位于哪里？\r\nO:四川\r\nX:重庆",
"世界上跑得最快的是什么？\r\nO:金钱豹\r\nX:鸵鸟", 
"蓝比基尼是跑车还是人名？\r\nO:人名\r\nX:跑车", 
"夜间行车远光会造成什么影响？\r\nO:短暂性致盲\r\nX:毫无影响", 
"铁观音是哪里出产的名茶？\r\nO:安徽\r\nX:福建", 
"蜂蜜用那种水冲泡更好？\r\nO:温水\r\nX:冰水", 
"以下哪种菜系不属于中国八大菜系之列？\r\nO:鄂菜\r\nX:皖", 
"黄鹤楼在什么地方？\r\nO:武汉\r\nX:广州", 
"东方明珠是世界第几高塔？\r\nO:第四\r\nX:第六", 
"火影忍者疾风传主角名字\r\nO:漩涡鸣人\r\nX:大蛇丸", 
"兔兔可爱吗？\r\nO:可爱\r\nX:非常可爱", 
"和谐号高铁最高时速能达到多少？\r\nO:500\r\nX:600", 
"冒险岛里只有冒险家一种法师吗？\r\nO:是\r\nX:不是", 
"时速100码的汽车紧急制动需要多久能停？\r\nO:40-45秒\r\nX:50-60秒", 
"LOL里的堕落天使叫什么？\r\nO:妖姬\r\nX:莫甘娜", 
"老虎属于什么类动物？\r\nO:猫科动物\r\nX:爬行动物", 
"花儿为什么是香的？\r\nO:那是因为我\r\nX:那是因为你", 
"一直被模范从未被超越是为啥？\r\nO:太给力\r\nX:哥是你模仿不了的",
"蒙奇?D?路飞的爷爷叫什么？\r\nO:蒙奇?D?卡普\r\nX:蒙奇?D?多拉格", 
"蒙奇?D?路飞跟谁学会的霸气？\r\nO:博雅汉库克\r\nX:冥王雷利", 
"灭霸一个响指我们就GG了吗?\r\nO:是的\r\nX:不存在",
"飞段是怎么死的\r\nO:饿死的\r\nX:漩涡鸣人杀死的",
"蔡徐坤为什么那么努力?\r\nO:他想进入NBA\r\nX:他想进入中国有嘻哈",
"鹿晗现在为什么不被喷了?\r\nO:因为他很努力\r\nX:因为有蔡徐坤"
        );
//o=true
//x=false

var answers = new Array(
true,false,false,false,false,true,false,false,true,false,true,true,true,false,true,true,false,false,true,false,false,false,true,true,false,false,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,true,false,false,false,true,false,true,true,true,true,false,false,true,true,false,true,false,true,false,false,true,false,false,true,false,true,true,false,true,true,true,false,true,false,true,false,true,false,true,true,false,true,false,false,true,true,false);


var em;

function start() {
    em = cm.getEventManager("OXEvent");
    if (em == null) {
        cm.sendOk("出现错误，请重新进入副本。");
    } else {
        var QuestionIndex = em.getProperty("question");
        if (QuestionIndex == null) {
            cm.sendOk("取回数据失败。");
        } else {
            CheckPlayerPosition(answers[parseInt(QuestionIndex)]);
        }
    }
}


function CheckPlayerPosition(answers) {//通过答案查看玩家的所站的位置是否正确
    var Xpos = cm.getPlayer().getTruePosition().getX();
    if (Xpos >= -562 && Xpos <= 150) {
        if (answers) {
            if (em.getProperty("OXEventState") > 500) {
                cm.warp(101050000, 0);//
                cm.sendOk("嗯……。回答错误，罚你出去！");
                cm.getNpcNotice(1540205, "真遗憾呢……！下次再接再厉吧！！", 10);//显示10秒
            } else {
                cm.showEffect(false, "quest/party/wrong_kor");
                cm.playSound(false, "Party1/Failed");
            cm.gainItem(2614068,1);
            cm.getPlayer().dropMessage(-1, "回答错误，获得安慰奖3000万破攻石！");
            }

            cm.dispose();
        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(2614069,1);
            cm.getPlayer().dropMessage(-1, "回答正确，获得优胜奖5000万破攻石！");
            cm.dispose();
        }
    } else if (Xpos >= -1500 && Xpos <= -802) {//O部分
        if (answers) {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(2614069,1);
            cm.getPlayer().dropMessage(-1, "回答正确，获得优胜奖5000万破攻石！");
            cm.dispose();
        } else {
            if (em.getProperty("OXEventState") > 500) {
                cm.warp(101050000, 0);//
                cm.sendOk("嗯……。回答错误，罚你出去！");
                cm.getNpcNotice(1540205, "真遗憾呢……！下次再接再厉吧！！", 10);//显示10秒
            } else {
                cm.showEffect(false, "quest/party/wrong_kor");
                cm.playSound(false, "Party1/Failed");
            cm.gainItem(2614068,1);
            cm.getPlayer().dropMessage(-1, "回答错误，获得安慰奖3000万破攻石！");
            }

            cm.dispose();
        }
    } else {//如果是咱在中立部分，就踢他出去这个
        if (em.getProperty("OXEventState") > 500) {
            cm.warp(101050000, 0);//
            cm.sendOk("嗯……。这是一个对或错的问题，你站中间是几个意思？");
            cm.getNpcNotice(1540205, "真遗憾呢……！下次再接再厉吧！！", 10);//显示10
        } else {
            cm.showEffect(false, "quest/party/wrong_kor");
            cm.playSound(false, "Party1/Failed");
            cm.gainItem(4000019,1);
            cm.getPlayer().dropMessage(-1, "放弃作答，还想要奖励？给你个蜗牛壳！");
        }
        cm.dispose();
    }
}



function DelEventPoints(Eventid, charid) {
    return cm.sql_Select("delete from EventTimes where eventid = ? and cid = ?;", Eventid, charid);
}

function getEventTimes(Eventid, charid) {//通过eventid来得到参与这个活动的次数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查询数据
    if (Times.length > 0) {
        i = Times[0].get("times");//得到次数
    }
    return parseInt(i);
}

function getEventPoints(Eventid, charid) {//通过eventid来得到参与这个活动的点数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查询数据
    if (Times.length > 0) {
        i = Times[0].get("points");//得到点数
    }
    return parseInt(i);
}

function setEventPoints(Eventid, charid, points) {//通过eventid来给予参与这个活动的点数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查询数据
    if (Times.length > 0) {
        return cm.sql_Insert("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)", null, Eventid, cm.getPlayer().getId(), cm.getPlayer().getName(), getEventTimes(1, charid), points, null); // 载入数据
    } else {//update
        return cm.sql_Update("update EventTimes set points = ? where eventid = " + Eventid + " and cid = " + charid + "", getEventPoints(Eventid, charid) + points);//更新为已使用
    }
}

function setEventTimes(Eventid, charid, times) {//通过eventid来设置参与这个活动的次数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查询数据
    if (Times.length > 0) {
        return cm.sql_Insert("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)", null, Eventid, cm.getPlayer().getId(), cm.getPlayer().getName(), getEventPoints(1, charid), times, null); // 载入数据
    } else {//update
        return cm.sql_Update("update EventTimes set times = ? where eventid = " + Eventid + " and cid = " + charid + "", getEventTimes(Eventid, charid) + times);//更新为已使用
    }
}