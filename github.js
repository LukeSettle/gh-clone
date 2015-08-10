$.getJSON("https://api.github.com/users/LukeSettle", function(data){
	console.log(data);
	$.getJSON(data.repos_url, repoCallback);
	$.getJSON(data.followers_url, followersCallback)
	$("<h1/>", {
		text: data.name
	}).appendTo("body");

	$("<h3/>", {
		text: "location:" + data.location
	}).appendTo("body");
	
	$.getJSON(data.avatar_url)
	$("<img>", {
		src: data.avatar_url
	}).appendTo("body");
});

var repoCallback = function(data){
	console.log(data);
	var listTag = $("<ol/>").addClass("repos");
	$("<h3/>", {
		text: "Reopsitories"
	}).appendTo("body");
	$.each(data, function(key, val){
		$("<li/>", {
			text: val.name
		}).appendTo(listTag);
	});
	listTag.appendTo("body");
};

var followersCallback = function(data){
	var followersList = $("<ol/>");
	$("<h3/>", {
		text: "Followers"
	}).appendTo("body");
	$.each(data, function(key, val){
		$("<li/>", {
			text: val.login
		}).addClass("followers").appendTo(followersList);
	});
	followersList.appendTo("body");
};