var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


var newSongs =
songs.push("Happy by The Rolling Stones on the album Exile on Main Street")
songs.pop("London Calling by The Clash on the alumm London Calling")
songs.filter(function(removeChar){
	return removeChar - ("*", "@", "(", "!");
});

console.log("newSongs", newSongs);

var nowPlaying = document.getElementById("now-playing");
