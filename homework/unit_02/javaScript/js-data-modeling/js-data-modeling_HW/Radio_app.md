##Radio on the Internet app
####This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.

###Data Modeling:

#####Radio Stations:
	- id
	- name
	- channel

#####Genres:
	- id
	- name
	- playlist
	- songs

#####Popularity:
	- id
	- name
	- chart status
	- playlist
	- songs

###Data as JavaScript Objects:

#####var radioStations = {
	id: Number,
	name: String,
	channel: String,
}

#####var genres = {
	id: Number,
	name: String,
	playlist: [ ],
	songs: [ ],
}

#####var popularity = {
	id: Number,
	name: String,
	chart status: Number,
	playlist: [ ],
	songs: [ ],
}

###Setting up Relationships:
#####var exmapleRadioStation = {
	id: 008,
	name: "99x",
	channel: "FM 99.7",
	Genre: [{
		id: 0667
		name: "Rock and Pop Radio",
		playlist: [30 Seconds to Mars, Rancid, Queen],
		songs [example list of songs],
		popularity: [{
			id: 011,
			name: "Top 100",
			chart status: 001,
			playlist [Blink 182, The Verve, Steve Miller]
			songs: [example set of songs],
			
			}]
		}]	
		
		
}


	

