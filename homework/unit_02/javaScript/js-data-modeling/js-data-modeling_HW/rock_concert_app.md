#Rock Concert App
####This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

###Data Modeling:

#####Favortite Bands:
	- id
	- name

#####Tour Dates:
	- id
	- date
	- city
	- venue

#####Ticket Purchasing:
	- id
	- price
	- ticket provider
		 - ex.stub hub (String)
		 - ex.ticketmaster (String)

###Data as JavaScript Objects:

#####var favoriteBands = {
	id: Number,
	name: String,
}

#####var tourDates = {
	id: Number,
	date: String,
	city: String,
	venue: String,
}

#####var ticketPurchasing = {
	id: Number,
	price: Number,
	ticket provider: String,
}


###Setting up Relationships:

#####var exampleFavBandList =  {
	id: 00118
	name: Soundgarden
	tour dates: [{
		id: 349762347,
		date: "03/07/17",
		city: Atlanta,
		venue: tabernacle,
		ticket purchasing: [{
			id: 983469846,
			price: $priceless,
			ticket merchant: ["stubhub", "tickmaster"],
			}]
		}]
}










