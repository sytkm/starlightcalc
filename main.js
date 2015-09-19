$(function(){
	function CalcLevel(level){
		var exp,stam,coll;
		exp = level * 20 + 10;
		stam = 40;
		if(level < 20){
			stam += parseInt(level / 2);
		}else if(level < 50){
			stam += parseInt((level - 20) / 3);
		}else if(level < 90){
			stam += parseInt((level - 50) / 4);
		}else if(level < 130){
			stam += parseInt((level - 90) / 5);
		}else{
			stam += parseInt((level - 130) / 6);
		}
		coll = ((level>5) ? (21 + parseInt(level / 10)) : 20);
		return {"exp":exp,"stamina":stam,"colleague":coll};
	}

	$("div#calc").click(function(){
		var level = parseInt($('#level').val());
		var result = CalcLevel(level);
		$('#resexp').append(result.exp);
		$('#resstam').append(result.stamina);
		$('#rescoll').append(result.colleague);
	});
});
