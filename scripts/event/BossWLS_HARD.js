/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：BOSS 希纳斯
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 5;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    em.setProperty("summon", "0");
    var eim = em.newInstance("BossWLS_HARD");
    eim.setProperty("knightsummon", "0");
    eim.setProperty("mapEffect", "0");
    var map1 = eim.setInstanceMap(970072000);
    //eim.setInstanceMap(271040210);//退出
    eim.setInstanceMap(970072100);
    var map2 = eim.setInstanceMap(970072400);
    map1.resetFully();
    map2.resetFully();
    map1.killAllMonsters(false);
    map2.killAllMonsters(false);
    eim.startEventTimer(3600000); // 1 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        player.addHP(50);
        var map = eim.getMapFactoryMap(970072100);
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(970072100);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 970072200);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    var mob;
    switch (mapid) {
        case 271040100:
        {
            if (em.getProperty("state").equals("1") && em.getProperty("summon").equals("0")) {
                em.setProperty("summon", "1");
                mob = em.getMonster(8881000);
                //mob.getStats().setChange(true);
                mob.changeLevel(200);
                mob.getChangedStats().setOHp(850000000000);
                mob.setHp(850000000000);
                eim.registerMonster(mob);
                eim.getMapInstance(0).spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 85));
            }
            break;
        }
    }
    if (mapid != 970072000 && mapid != 970072400 && mapid != 970072100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 970072200)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}