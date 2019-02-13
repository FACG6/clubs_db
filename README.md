# Clubs App

## We are Club Team

## What?
 Club website, where the user can browse clubs data from the website database, and can add a new club if leader want also the user can view the club members in the database.

## User Story

* As a user I want to view the club name and club description.
* As a user I can add a new club in any club department.

## Database Schema
![](https://drive.google.com/file/d/1SHIc8uWsgReDAYIjzv9Zv5T5nBYQYT00/view?usp=drive_open)

## Architecture

1. public
	* css 
		* styles.css 
	* js
		* dom.js 
		* fetch.js 
    * pages 
		* notFoundPage.html 
		* club.html
    * index.html 

2. src
		* database
			* data.sql
			* db_build.js
			* db_connection.js
		* handlers.js
		* router.js
		* server.js
3. test
	* test.js

4. README

5. .gitignore

6. package-lock.json

7. ackage.json

## Skills We Used:

* Basic back-end services, such as building HTTP server.
* Modularizing our app.
* Testing our Functions and database.
* Our database from heroku.
* Using module.exports and require to break a single large server file into smaller modules.
* Handle Errors.