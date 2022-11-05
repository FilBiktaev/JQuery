$("#goLeft").click(function (e) 
		{ 
	    	$("#slime").animate({"marginLeft":"-=100px"}, "slow");
		});
		$("#goRight").click(function (e) 
		{ 
	    	$("#slime").animate({"marginLeft":"+=100px"}, "slow");   
		});