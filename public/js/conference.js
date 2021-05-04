function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Participation")
    {
		var optionArray = ["Record Title |","Invited Lectures|invited lectures","Contributory Oral Presentation|contributory oral presentation","Contributory Poster Presentation|contributory poster presentation"];
	} else if(s1.value == "Organized"){
		var optionArray = ["Record Title|","Convenner/Cordinator|convenner/cordinator","Organizing Secretary|organizing secretary","Committee Member|committee member"];
	} else if(s1.value == "member"){
		var optionArray = ["Record Title |","Chairperson/Moderators|chairperson/moderators","Members of Advisory/Organizing/Technical Committee|members of advisory/organizing/technical committee","Development of Modules/Tests|development of modules/tests"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}