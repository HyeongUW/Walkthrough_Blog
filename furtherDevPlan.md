# Further Development Plan

## Enhancements

* list of possible enhancements
    - [x] Use a Node and Express Web Server;
    - [x] Be backed by a MySQL Database an ORM (not necessarily Sequelize);
    - [x] Have both GET and POST routes for retrieving and adding new data;
    - [x] Be deployed using Heroku (with Data);
    - [ ] Utilize at least one new library, package, or technology that we haven’t discussed;
    - [ ] Have a polished frontend / UI;
        - Not up to my standard!
    - [x] Have folder structure that meets MVC Paradigm;
    - [x] Meet good quality coding standards (indentation, scoping, naming).
    - [x] Must not expose sensitive API key information on the server

## Version History

* Users are also able to attach photos (with the URL, to avoid setting up the database to store the image files uploaded by users) when they are uploading their posts. 
* Users also can leave a comment on each of the public post by clicking it and navigate into the detailed post page.


* Listed Anticipated Release Plan:
    - [x] 0.1 Basic Posting and Deleting Implementation with association among three different models (`User`, `Post`, `Comment`)
    - [ ] 0.15 Implementing uploading photos on a post and comment
    - [ ] 0.2 Implementing Passpost sign-in and sign-up feature
    - [ ] 0.3 Implementing Google OAuth sign-in feature
    - [ ] 0.4 Creating Category for posts (`Upcoming Games`, `Help Requested`, `Community`)
    - [ ] 0.5 Making sure currently logged-in user session maintains while browsing
    - [ ] 1.0 Initial Release with Full Functionality listed above
