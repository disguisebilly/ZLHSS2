/*
	Zakum Altar - Summons Zakum.
*/

function act() {
    rm.changeMusic("Bgm06/FinalFight");
    rm.getMap().spawnZakum( -38, -230);
    rm.mapMessage("扎昆出现了，请击败它。");
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
	rm.全服公告("[BOSS公告] 随着火焰的眼的消失，祭台产生了一道刺眼的血色光芒，地狱的使者<扎昆>出现了。");
}