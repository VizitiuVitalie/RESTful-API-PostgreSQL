# RESTful API with PostgreSQL and Node.js

This project shows how to build a RESTful API using Node.js and PostgreSQL. Users can do CRUD operations using HTTP requests.

## Technologies Used

- **Node.js**
- **PostgreSQL**

## Features

### CRUD operations with users

- `POST --> /users`  
  Create a new user

- `GET --> /users`  
  Get all users
  
- `GET --> /users/:id`  
  Get one user

- `PUT --> /users`  
  Update user

- `DELETE --> /users`  
  Delete all users

- `DELETE --> /users/:id`  
  Delete one user by id

### CRUD operations with posts

- `POST --> /posts`  
  Create a new post with optional userId (to assign this post to an user)

- `GET --> /posts/users?id=number`  
  Get the posts assigned to this user
  
- `GET --> /posts`
  Get all posts

- `GET --> /posts/:id`
  Get one post by id

- `PUT --> /posts`  
  Update post

- `DELETE --> /posts`  
  Delete all posts

- `DELETE --> /posts/:id`  
  Delete one post by id

## Installation

1. Clone the repository:
   - git clone https://github.com/VizitiuVitalie/RESTful-API-PostgreSQL.git
   
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
