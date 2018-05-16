$(function() {
	$.getJSON(
		'http://api.flickr.com/services/feeds/photos_public.gne?id=163654994@N04&format=json&jsoncallback=?',
		function(data){
			for(i=6; i > 0; i--){
				$("<img />").attr("src", data.items[i].media.m).appendTo("#flickr").wrap("<a href='" + data.items[i].link + "' title='" + data.items[i].title + "' target='_blank'><\/a>");
			}
		}
	);
});