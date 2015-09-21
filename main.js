$(function(){
	function CalcLevel(level){
		var exp,stam,coll,i,count;
		exp = (level > 50) ? ((level-50) * 20 + 1500):(level * 20 + 10);
		for(stam=40,i=1,count=0;level-count>0;count=count+(i+1)*10,i++){
			stam += (level < (count + (i+1)*10))?parseInt((level - count)/(i+1)):10;
		}
		coll = (level>5) ? (21 + parseInt(level / 10)) : 20;
		return {"exp":exp,"stamina":stam,"colleague":coll};
	}

	$("#calc").click(function(){
		var level = parseInt($('#level').val());
		var nowexp = parseInt($('#nowexp').val());
		var result = CalcLevel(level?level:0);
		$('#resexp').html(result.exp-(nowexp?nowexp:0));
		$('#resstam').html(result.stamina);
		$('#rescoll').html(result.colleague);
	});
});
