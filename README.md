# Diary Web Application
This is a simple diary web application where users can create, view, and delete posts. It consists of three pages: Posts, Create New Post, and Post Details. The application is built with a front-end (HTML, CSS, JavaScript) and a back-end (Node.js, Express, PostgreSQL).
## Features
- Create New Post: Users can add new posts with a title, content, and optional image URL.
- View All Posts: The application displays a list of all posts with titles, dates, and images.
- View Post Details: Clicking on a post will take users to a page displaying the full details of the post.
- Delete Post: Users can delete individual posts from the post detail page.

## Tech Stack
- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js, Express.js
- Database: PostgreSQL

## Prerequisites
Before running the project, ensure you have the following installed:
- Node.js
- PostgreSQL

## Setup
### 1. Clone the repository
Clone this repository to your local machine using the following command:
`git clone git@github.com:MaryPetrichenko/diary.git`
### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:
`npm install`
### 3. Set Up the Database
Create the .env file in the root directory and specify the following variables:  
`PORT = <prefered port>`  
`DB_URL = <url to the database>`  
After that navigate to the root directory and setup the database by running command:
`npm run setup-db`  
## Run the Application
Once everything is set up, you can start the server:  `npm run dev`
This will start the server on `http://localhost:<preferred port from .env>`,   
and you can access the application in your browser.
## Usage
- View All Posts: Go to posts.html to see a list of all posts. Each post is clickable and will take you to a detailed view.
- Create a New Post: Go to new.html to create a new post. Enter a title, content, and optional image URL, then click "Create Post."
- View Post Details: Clicking on a post from the posts list will open postid.html, displaying the full content of the post.
- Delete Post: On the post details page, you can delete the post by clicking the "Delete the post" button. A confirmation prompt will appear before deletion.
## API Endpoints
The application communicates with the following API endpoints:

GET /posts: Retrieves all posts.  
POST /posts/new: Creates a new post.  
GET /posts/:id: Retrieves a single post by ID.  
DELETE /posts/:id: Deletes a post by ID.

