The github link for this project is shown below
https://github.com/keneboy/tutoringapp.git

The heroku hosted link is the link below
https://powerful-cove-37501.herokuapp.com

 <!-- 
 The Heroku link will be provided  -->

 <!-- THE ROUTES DOCUMENTATION -->

the main folder containing the route is the controller folder
which contain the various routes namely the get,put,push and delete method.
the routes within the controller folder is exported to the bootcamp.js file within the route folder,
and later it was exported to the entry point (server.js) where it was consumed using the app.use() middleware.

NOTE:
to access the various end point
1.TO get all data from the database you go through this end point using the get method
https://powerful-cove-37501.herokuapp.com/api/bootcamps

2.To get single data from the database you go through this end point using the get method
https://powerful-cove-37501.herokuapp.com/api/bootcamps/609ba9e96af571258836884f

3.TO update a single data on the database you go through this endpoint using the put method
https://powerful-cove-37501.herokuapp.com/api/bootcamps/609ba9e96af571258836884f

4.To delete a single data from the database you go through this endpoint using the delete method
https://powerful-cove-37501.herokuapp.com/api/bootcamps/609ba9e96af571258836884f

5.To create a single data into the database you go through this endpoint
https://powerful-cove-37501.herokuapp.com/api/bootcamps

<!-- THE UTILS FOLDER -->

this folder hold one of the third party package used for validation which was exported to the bootcamp.js file within the controller folder..
the configuration of the database was included in the utils folder

//catching others exception within the route
instead of using the try and catch approach to handle exception i install an express package
to handle it express-async-errors and require it at the top of the server.js
and create an error.js(this is found within the middleware function) middleware that will throw the error
