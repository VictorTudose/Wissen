var loaded={};

loadKnow();

$(document).ready(function(){
	$("#fact-count").attr("max",facts.length);
});

icons.forEach(element => $("."+element.target).each(function() {
     $(this).html(element.payload);
	}) );

/*
--------------------------------------------------------------------------------------------------------------------------------
																					JUST FUNCTIONS HERE
--------------------------------------------------------------------------------------------------------------------------------
*/

function loadKnow(){
	var randJson=know[rand(know.length)];

	$(".know-title").each(function() {
     $(this).html(randJson.title);
	});

	var knowLanguages=Array.prototype.slice.call(document.getElementsByClassName("know-language"));
	knowLanguages.forEach(element => element.innerHTML=randJson.language);

}

function rand(n)
{
	return Math.floor(Math.random() * n);
}

function getIcon(name)
{

	return (icons.filter(icon => icon.target === name))[0];
}

function initFacts()
{

	var n=Number($("#fact-count").val());

	$("#facts").html("");
	loaded={};

	for(var i=0;i<n;i++){
		$("#facts").append(fact_string);
		loadFact(nextFact())
	}
}

function loadFact(fact)
{
	if(fact.id in loaded)
		return;

	var icon=getIcon(fact.icon);
	
	$("#fact-icon").html(icon.payload);
	$("#fact-icon").attr("id","");
	$("#fact-title").html(fact.title);
	$("#fact-title").attr("id","");
	$("#fact-text").html(fact.description);
	$("#fact-text").attr("id","");

	loaded[fact.id]=true;
}

function nextFact()
{
	while(true)
	{
		var fact=facts[rand(facts.length)];

		if(!(fact.id in loaded))
			return fact;
	}
}