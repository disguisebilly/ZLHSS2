/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：反抗者二转任务
 *  
 *  @Author Jackson 
 */

/* global em */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(chrID) {
    //em.setProperty("state", "1");
    em.setProperty("leader", "true");
    // Setup the instance when invoked, EG : start PQ
    var eim = em.newInstance("DemonSecJobQuest" + chrID);
    var map = eim.createInstanceMap(931050100);
    map.resetFully(); //重置地图
    var mob = em.getMonster(9001036);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(873, -14));
    eim.startEventTimer(10 * 60 * 1000);
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    var map = eim.getMapInstance(0);
    if (mapid != map.getMapID()) {
        playerExit(eim, player);
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
    end(eim);
}

function allMonstersDead(eim) {
    eim.schedule("clearPQ", 2000);
}



function playerDead(eim, player) {
    // Happens when player dies
}

function playerRevive(eim, player) {
    // Happens when player's revived.
    // @Param : returns true/false
    return false;
}

function playerDisconnected(eim, player) {
    return 0;
    // return 0 - Deregister player normally Dispose instance if there are zero player left
    // return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
    // return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
}

function monsterValue(eim, mobid) {
    // Invoked when a monster that's registered has been killed
    // return x amount for this player - "Saved Points"
    return 1;
}

function leftParty(eim, player) {
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // Happens when the party is disbanded by the leader.
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 310020100);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    em.setProperty("balrogState", "0");
}

function clearPQ(eim) {
    eim.changedMap(931050110);
}

function removePlayer(eim, player) {
    // Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function cancelSchedule() {
}

function pickupItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, player, mobID) {
}