##Coffee To-Go App
####This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

###Data Modeling:

#####Coffee Shops:
	- id
	- name
	- location
	- hours

#####Menu:
	- drinks
	- prices

#####Purchases:

	- id
	- name
	- total

#####Past Orders:

	- id
	- name
	- date

###Data as JavaScript Objects:

#####var coffeeShops = {
	id: Number,
	name: String,
	location: String,
	hours: String,
}

#####var menu = {
	drinks: [ ],
	prices: Numbers,
}

#####var purchases = {
	id: Number,
	name: String,
	total: Number,
}

#####var pastOrders = {
	id: Number,
	name: String,
	date: String,
}

###Setting up Relationships:

##### var exampleCoffeeShop = {
	id: 62616
	name: "Starbucks",
	location: "Perimeter Mall",
	hours: "9-5pm",
	menu: [{
		drinks: ["Winter drinks", "espresso", "latte"]
		prices: "$1.99 - $5.99",
		purchases: [{
			id: 039847394,
			name: "Jeffrey's order",
			total: "$6.59",
			past orders: [{
				id: 234926498,
				name: "Jeffrey's past orders",
				date: "09/21/15",
			}]
		}]
	}]	
};