function enter(pi) {
    var em = pi.getEventManager("Romeo");
    if (em != null && em.getProperty("stage4").equals("2")) {
	pi.warp(926100300,0);
    } else {
	pi.playerMessage(5, "门户尚未打开。");
    }
}