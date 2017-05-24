##Team Tracker App
####This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

###Data Modeling:

#####Favorite Sports Teams:
	- id
	- name
	- sport

#####Team Roster:
	- id
	- name(team)
	- players
	- stats(team)

#####Players:
	- id
	- name
	- position
	- stats(individual)

###Data as JavaScript Objects

#####var favoriteSportsTeams = {
	id: Number,
	name: String,
	sport: String,
}

#####var teamRoster = {
	id: Number,
	name: String,
	players: [ array ],
	stats(team): String, 
}

#####var players = {
	id: Number,
	name: String,
	position: String,
	stats: String,
}

####var exampleFavTeams = {
	id: 38974938247,
	name: "Toronto Blue Jays",
	sport: "Baseball",
	team roster: [{
		id: 938463294,
		name: "Toronto Blue Jays",
		players(team): ["Otis Nixon, "Ron Gant", "Greg Maddox"],
		stats(team): "69 and 50",
		player(individual): [{
			id: 090909
			name: "Frank Thomas",
			position: "Left Field",
			stats: ["450 homeruns", "800 RBI's", ".326 batting av."],
			}]
		}]	
		
}







