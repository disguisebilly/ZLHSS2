/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：远征任务：希拉 - 170 级困难模式
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Hillah_170");
    var map = eim.setInstanceMap(262031300); //设置活动脚本的地图
    map.resetFully(false); //重置地图
    map.setSpawns(false);
    var mob = em.getMonster(8870100); //希拉 - 190级
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(16101050000);
    mob.setHp(16101050000);
    //var modified = em.newMonsterStats();
    //modified.setOMp(mob.getMobMaxMp());
    //modified.setOHp(mob.getMobMaxHp() * 6.0);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(134, 196));
    eim.startEventTimer(3600000); //60分钟
    return eim;
}

function playerEntry(eim, player) {
    player.restReviveCount();
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.setReviveCount(reviveCount);
    player.sendDathCount();
}

function changedMap(eim, player, mapid) {
    if (mapid < 262031300 || mapid > 262031310) {
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
    eim.disposeIfPlayerBelow(100, 262010000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
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
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.changeMap(map, map.getPortal(0));
        player.eventRevive();
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(262010000);
    player.changeMap(map, map.getPortal(0));
    return true;
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
