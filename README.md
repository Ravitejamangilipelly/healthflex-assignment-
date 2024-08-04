# Twitter-Like Backend System

## Assignment Overview
This project is a simplified backend system similar to Twitter, built using Node.js and MongoDB. The objective is to design and implement a scalable backend system focusing on scalability, performance, maintainability, and Domain-Driven Design (DDD) principles.

## How to Run the Application
### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd twitter-backend

### API Endpoints
### User Registration
Endpoint: POST /api/users/register.
Description: Register a new user.
Request Body:
{
  "username": "string",
  "password": "string"
}

### User Login
Endpoint: POST /api/users/login.
Description: Login a user and receive a JWT token.
Request Body:
{
  "username": "string",
  "password": "string"
}

### Post a Tweet
Endpoint: POST /api/tweets.
Description: Post a new tweet.

### Headers
Authorization: Bearer <token>
Request Body:
{
  "text": "string"
}

### Fetch User Timeline
Endpoint: GET /api/users/:userId/timeline.
Description: Fetch the timeline of a user.
### Headers
Authorization: Bearer <token>
