The github link for this project is shown below
https://github.com/keneboy/tutoringapp.git

The heroku hosted link is the link below
https://stormy-castle-29498.herokuapp.com

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
https://stormy-castle-29498.herokuapp.com/api/bootcamps

2.To get single data from the database you go through this end point using the get method
https://stormy-castle-29498.herokuapp.com/api/bootcamps/609ba9e96af571258836884f

3.TO update a single data on the database you go through this endpoint using the put method
https://stormy-castle-29498.herokuapp.com/api/bootcamps/609ba9e96af571258836884f

4.To delete a single data from the database you go through this endpoint using the delete method
https://stormy-castle-29498.herokuapp.com/api/bootcamps/609ba9e96af571258836884f

5.To create a single data into the database you go through this endpoint
https://stormy-castle-29498.herokuapp.com/api/bootcamps

<!-- THE UTILS FOLDER -->

this folder hold one of the third party package used for validation which was exported to the bootcamp.js file within the controller folder..
the configuration of the database was included in the utils folder
