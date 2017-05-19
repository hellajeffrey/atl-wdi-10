# Diagnostic Unit 2.1



### Question 1: What is the Request/Response Cycle?  How does it work?
It's the back and forth communication between the client and the server.

### Question 2: What are the differences between a GET request and a POST request?
Get is asking for information to read. Post is requesting to write or create new information/data.

### Question 3: What does `npm init` do?
NPM INIT install set's up and installs the JSON file.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
Create, Read, Update, Delete

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?
Post method.

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?
I believe it is calling the 'myScript.js' file and updating some information.
```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
route.post('/menus: function(req, res)
  res.redirect('/homepage)

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```


### Question 9: What is MVC? How have we been using it so far?
MODELS, VIEWS, CONTROLLERS

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
