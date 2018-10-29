function readData()
{
	
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	
    if (this.readyState == 4 && this.status == 200) {
		
        var obj = JSON.parse(this.responseText);
        var images = [];
        for(var i = 0; i < obj.pokemon.length; i++){
            images.push(obj.pokemon[i].img);
            
        }
        postMessage(images);
    }
	/*else
	{
		alert(this.status);
	}*/
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", true);
xmlhttp.send();
	
}

readData();