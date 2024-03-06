# RESTful API with PostgreSQL and Node.js

This project shows how to build a RESTful API using Node.js and PostgreSQL. Users can do CRUD operations using HTTP requests.

## Technologies Used

- **Node.js**
- **PostgreSQL**

## Features

### CRUD operations with users

- `POST --> /user`  
  Create a new user

- `GET --> /users`  
  Get all users
  
- `GET --> /user/:id`
  Get one user

- `PUT --> /user`  
  Update user

- `DELETE --> /users`  
  Delete all users

- `DELETE --> /user/:id`  
  Delete one user by id

### CRUD operations with posts

- `POST --> /post`  
  Create a new post with optional userId (to assign this post to an user)

- `GET --> /posts/user?id=number`  
  Get the posts assigned to this user
  
- `GET --> /posts`
  Get all posts

- `GET --> /post/:id`
  Get one post by id

- `PUT --> /post`  
  Update post

- `DELETE --> /posts`  
  Delete all posts

- `DELETE --> /post/:id`  
  Delete one post by id

## Installation

1. Clone the repository:
   - git clone https://github.com/VitaliyV444/RESTful-API-PostgreSQL.git
   
2. Install dependencies:
   - cd RESTful-API-PostgreSQL
   - npm install
   
3. Configure PostgreSQL:
   - Set up your PostgreSQL database and configure the connection in the `db.js` file

4. Start the server:
   - npm start
   - npm run dev (with nodemon usage)
  
## Usage

- Use an HTTP client like Postman or cURL to send requests to the API endpoints.
