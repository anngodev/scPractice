$(document).ready(function() {
	
	SC.initialize({
		client_id: '8ce0fdd82bd55bad9d7d68acb86d9fda'
	});

	var jukebox = new Jukebox();


	$(".playButton").click(function() {
		jukebox.play();
	})


	$(".pauseButton").click(function() {
		jukebox.pause();
	})

	$(".nextButton").click(function() {
		jukebox.next();
	})

	// $(".load-button").click(function() {
	// 	myAudio.load();
	// })
})

currentSong = 0;
songs = ["/tracks/293", "/tracks/216847995"];

// SC.stream("/tracks/293").then(function(sound) {
// 		myAudio = sound;
// 	})

// function scStream(track){
// 	SC.stream(track).then(function(sound) {
// 		myAudio = sound;
// 	})
// }
	function Jukebox() {

		var myAudio

	SC.stream(songs[currentSong]).then(function(sound) {
		myAudio = sound;
	})
		
		this.play = function() {SC.stream(songs[currentSong]).then(function(sound) {
		myAudio = sound; myAudio.play();
	})


		}

		this.next = function() {
			
			myAudio.pause()

			currentSong = (currentSong+1)%2


	SC.stream(songs[currentSong]).then(function(sound) {
		myAudio = sound;


		myAudio.play();
	})

}




	// 		if(currentSong >= songs.length - 1) {
	// 			currentSong = 0;
	// 			SC.stream(songs[currentSong]).then(function(sound) {
	// 	myAudio = sound; myAudio.play();
	// })
			
	// 		}	else {
	// 			currentSong = (currentSong + 1);
	// 			SC.stream(songs[currentSong]).then(function(sound) {
	// 	myAudio = sound;
	// })
	// 			myAudio.play();
	// 		}
	// 	}


		// this.load = function() {
		// 		var songUrl = $("#song-url").val();
		// 		songs.push(songUrl);
		// 		console.log(songs);
		// 	}

		this.pause = function() {
			myAudio.pause();
		}
	}