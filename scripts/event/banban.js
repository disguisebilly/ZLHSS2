/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：麦格纳斯 Magnus Hard
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 3;
var TimeA = 11000 * 60 * 60;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("banban");//改------
    var map = eim.setInstanceMap(105200110);//改------
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(8910000);//改------
    mob.getStats().setChange(true);
    mob.changeLevel(190);//改------
    mob.getChangedStats().setOHp(68262000000);//改------
    mob.setHp(68262000000);//改------
    /*var modified = em.newMonsterStats();
     modified.setOHp(mob.getMobMaxHp() * 300);
     modified.setOMp(mob.getMobMaxMp() * 9000);
     mob.setOverrideStats(modified);*/
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-125, 455));//改------
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    eim.schedule("checkChrHP", 2000);
    eim.schedule("summonFall", 5000);
    return eim;
}

function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ 困 难 ] 戴米安");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }

    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(105300303);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function changedMap(eim, player, mapid) {
    if (mapid != 105200110) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 105200110);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 8910000:
            eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (1120 * 1000)));
            eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (1120 * 1000) / 1000));
 //           openNpc(eim, 1540008, "TimCareU");
            for (i = 0; i < eim.getPlayers().size() ; i++) {
                eim.getPlayers().get(i).setPQLog("戴米安[困难]");
            }
            break;
    }
    return 1;
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 105200110);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function clearPQ(eim) {
    scheduledTimeout(eim);
}


function allMonstersDead(eim) {
    //em.broadcastServerMsg(5120027, "麦格纳斯已被消灭，请在1分钟内点击NPC获得奖励。" ,true);
    //eim.startEventTimer(1000 * 60); //10 min
    //eim.getMapInstance(0).spawnNpc(9390123, new java.awt.Point(599, -1386));
    eim.setProperty("HPstate", "-1");
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function summonFall(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 24500;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(5 * state + 1, 1, 8);
        eim.schedule("summonFall", time);
    }
}

function checkChrHP(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(8910000);
        if (mob != null) {
            for (i = 0; i < eim.getPlayers().size() ; i++) {
                mob.checkMobZone(eim.getPlayers().get(i), true);
            }
            eim.schedule("checkChrHP", 2000);
        }
    }
}
function pickUpItem(eim, player, itemID) {
}