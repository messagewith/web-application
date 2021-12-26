# `@messagewith/server`

Messagewith server written in [Nest.js](https://nestjs.com/) with [MongoDB](https://www.mongodb.com/) database and [GraphQL](https://graphql.org/).

## Running development server

### Requirements
- [Node.js 16](https://nodejs.org/en/)
- [MongoDB Server](https://www.mongodb.com/try/download/community)

For first install dependencies using yarn in root directory:

``
yarn install
``

Then inside ``packages/server`` folder, create .env file containing:
```
    MESSAGEWITH_JWT_SECRET=<random_long_text_for_jwt_sign>
    MESSAGEWITH_DOMAIN=<server_domain>
    MESSAGEWITH_MOCKUP_IP_ADDRESS=<mockup_ip_address_in_dev_env>
    MESSAGEWITH_DATABASE_URI=<mongodb_connection_uri>
```
Finally you can run ```yarn start:dev```

## API Endpoints

### Authentication (REST API)

#### Login

**Request:**
```
POST /auth/login
{
  email: "email@email.com",
  password: "strongPassword"
}
```

**Successful Response:**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
  "statusCode": 200,
  "message": ""
}
```

**Failed Response:**
```
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
{
  "statusCode": 401,
  "message": "Invalid user data"
}
```

#### Logout
**Request:**
```
GET /auth/logout
```
**Successful Response:**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
  "statusCode": 200,
  "message": ""
}
```
**Failed Response:**
```
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

#### Profile
**Request:**
```
GET /auth/logout
```
**Successful Response:**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
	"id": "61c8a0ad2bfc16dae6c5f1fa",
	"nickname": "joe_average",
	"firstName": "Joe",
	"lastName": "Average",
	"middleName": "",
	"bio": "",
	"coverPhoto": "",
	"profilePicture": "",
	"fullName": "Joe Average",
	"email": "email@email.com"
}
```
**Failed Response:**
```
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### GraphQL 
GraphQL server listens on ``/graphql`` endpoint.

#### Users
```graphql
type UserEntity {
    id: String!
    nickname: String!
    firstName: String!
    middleName: String!
    lastName: String!
    email: String!
    fullName: String!
    profilePicture: String!
    coverPhoto: String!
    bio: String!
}

type Query {
    user(email: String, nickname: String, id: String): UserEntity
    allUsers: [UserEntity!]!
}

type Mutation {
    createUser(userData: CreateUserInput!): UserEntity!
}

input CreateUserInput {
    firstName: String!
    lastName: String!
    middleName: String
    email: String!
    password: String!
    nickname: String
    bio: String
}

```

## License
This package is distributed under the [GPL-3.0 License](https://github.com/messagewith/messagewith/blob/main/LICENSE).