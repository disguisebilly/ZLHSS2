/*
 *
 *  此脚本由冒险岛制作完成
 * 
 *
 */


var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(350060180);
	if (mode == -1)
	{
		cm.dispose();
	}

    if (cm.getPlayer().getClient().getChannel() != 4 ) {
        cm.sendOk("斯乌仅可在4频道召唤。");
        cm.dispose();

	}


	else if (mode == 0)
	{
		cm.sendOk("好的如果要挑战随时来找我.");
		cm.dispose();
	} 
	else 
	{
	if (mode == 1)
	status++;
	else
	status--;
		
	if (status == 0)
	{	
			if (cm.getMonsterCount(350060180) > 0){
			cm.sendOk("请击败斯乌1阶段..");
			cm.dispose();
			}else{
				cm.sendYesNo("恭喜进入下一阶段~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();


                }else if (cm.getLevel() < 210){
			cm.sendOk("#r210#k级以下玩家不能挑战!");
			cm.dispose();




 
		}else{
if(cm.getMonsterCount(350060180) <= 999){
		

	
}			
			
                           cm.warpParty(350060600,0);
                          cm.givePartyItems(2432262, 5);
 //cm.喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战钻机！~~");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【未来新叶城】:[" + cm.getChar().getName() + "]带领队挑战钻机！！", 512102, true));
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}