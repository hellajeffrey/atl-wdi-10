----------------------------------------------------------------------------
### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.


A To-Do list app is going to store individual tasks and task data as well
as storing full projects folders and tasks.

// Tasks:
Name
Start time of task
End time of task

// Projects:
Name of project
Scope of project or description
Listed tasks in project

var task = {
  Name: 'wash car',
  Start-time: 'noon',
  End-time: 'midnight'
}

var projects = {
  Name: 'tree house'
  Details: 'fort built with hands',
  Asks: [array of tasks]
}

----------------------------------------------------------------------------

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

A photo sharing app is going to store user accounts, photo albums and individual photos.


// Photos:
Name
Date photo taken/added
URL or link to photo

// Albums:
Name
Photos

// User names/accounts:
Name
Albums
Photos

var photos = {
  Name: 'photo1',
  Date of photo: 'May 4th 2017',
  Link: www.sampleURL
}

var albums = {
  Name: 'trip to spain',
  Folder of photos: [array of photos]
}

var username = {
  Name: 'jeff ffej',
  Images downloaded: [array of images],

}

----------------------------------------------------------------------------


### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

// Lights:
Brightness Level
Location in House
Name of Light

// Home:
Temp
Lights

var lights = {
  Brightness: 'lumens',
  Locations: 'hallway',
  Name of Light: 'steve'
}

var home = {
  Temp: '70 degrees',
  Lights: 'On, Off'
}

This app will track and monitor


----------------------------------------------------------------------------
### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.



A To-Do list app is going to store individual tasks and task data as well
as storing full projects folders and tasks.

// Products:
Shoes-Types

// Checkout:
Orders
Shopping Cart

// Past Orders:
Order History
Order Delivery Status


var products = {
  Shoe Type: 'Nike Air's,
}

var checkout = {
  Orders:'product ID 2872387',
  Shopping Cart: '3 items waiting to be ordered'
}

var pastOrders = {
  Order History:'Date order placed, 10/15/16',
  Order Status:'Delivery date'
};


----------------------------------------------------------------------------
## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

// Station has:
Station Name
Description

// Rail Lines:
Rail Name
List of stations that it stops at

var station = {
  name: 'Green Street',
  description: 'Marijuana advocacy part of town, south of braves stadium'
};

var rail_lines  = {
  name of station: 'Blue Line',
  description: 'Blue line passes through the red and yellow lines.'
  list of lines: [Red line, Green line, Purple line]
};


----------------------------------------------------------------------------
### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

// A doctor has:
  A name:
  A location:
  A specialty:

// A patient has:
  A name:
  A birth date:

// An appointment has:
  A date:
  A time:

var doctor = {
  name: 'John West',
  location: 'Dekalb co.',
  specialty: 'heart disease'
};

var patient = {
  name: 'John Stevenson',
  birthday: 'August 26, 1984'
};

var appointment = {
  date: '08/26/1984',
  time: '10:30am'
};




Q:  What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

A:  I think that exmaple 1 makes sense but is a bit verbose and tricky to read, potentially.
I believe the 2nd exmaple is easiest to understand and least amount of typing.



----------------------------------------------------------------------------

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  A:  Player, Game, Moves(you can make)

b.  How might those entities be represented in JavaScript code?

var player = {
  name: 'John Leeds',
  avatar: 'loaded photo'
};

var game = {
  Player1: 'Sam',
  Player2: 'Sarah'
  Moves: 'Box 9'
};

var moves = {
  Which Player: 'Sam',
  Position: 'Box 1'
};

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > Those are the only features to the game and the only values that would be represented or input.


