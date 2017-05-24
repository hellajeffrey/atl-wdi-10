#Radio on the Internet app
###This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.

###Data:
#####Users:
	- id
	- name

#####Accounts:
	- id
	- name
	- url

#####Inbox:
	- id
	- name

###Data as JavaScript Objects:
#####var user = {
	id: Number,
	name: String,
}

#####var accounts = {
	id: Number,
	name: String,
}

#####var inbox = {
	id: Number,
	name: String,
}

###Setting up Relationships:

#####var exampleUser = {
		id: 001,
		name: "Jeffrey Henneberg,
		account: [{
			id: 002,
			name: "GMAIL"
			inbox: [{
				id: 003
				name: "GMAIL INBOX",
					}]
				}]
}



