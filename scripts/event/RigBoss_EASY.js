/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：钻机 RigBoss
 *  @Author Kent 
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("RigBoss_EASY");
    var map = eim.setInstanceMap(703020101);
    map.resetFully();
    eim.getMapFactoryMap(703020101).killAllMonsters(false);
    // for(var i = 8900000; i <= 8900002; i++){
    //var mob = em.getMonster(i);
    var mob = em.getMonster(9600086);//召唤怪物
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(663, 227));//坐标x y
    //}
    eim.startEventTimer(15 * 60 * 1000); //30分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 703020101) {
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

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 703020000);//回去入口
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}