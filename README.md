# Library Management System API

Welcome to the Library Management System API documentation. This API allows users to interact with a library's database, providing functionalities for both clients and administrators.

## Endpoints

### 1. Get all books

Retrieve information about all books available in the library.

```http
GET /
```

**Parameters**

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-`       | `-`      | `-`                        |

**Response**

The response will contain a list of books with various details.

Example Response:

```json
{
  "total": 3,
  "data": [
    {
      "ISBN": "978-0-123456-78-9",
      "title": "Sample Book 1",
      // ... (other book details)
    },
    // Additional book entries...
  ]
}
```

### 2. Get specific book according to ISBN

Retrieve information about a specific book based on its ISBN.

```http
GET /:ISBN
```

**Parameters**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ISBN`    | `string` | **Required**. ISBN of the book to fetch |

**Response**

The response will contain details about the requested book.

Example Response:

```json
{
  "ISBN": "978-0-123456-78-9",
  "title": "Sample Book 1",
  // ... (other book details)
}
```

### 3. Get books according to category

Retrieve books based on a specified category.

```http
GET /category/:category
```

**Parameters**

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `category` | `string` | **Required**. Category to filter books |

**Response**

The response will contain a list of books within the specified category.

Example Response:

```json
{
  "total": 2,
  "data": [
    {
      "ISBN": "978-0-987654-32-1",
      "title": "Adventure Book",
      // ... (other book details)
    },
    // Additional book entries...
  ]
}
```

### 4. Get books according to author

Retrieve books written by a specific author.

```http
GET /author/:author
```

**Parameters**

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `author`  | `string` | **Required**. Author's name to filter books |

**Response**

The response will contain a list of books authored by the specified author.

Example Response:

```json
{
  "total": 1,
  "data": [
    {
      "ISBN": "978-0-567890-12-3",
      "title": "Mystery Novel",
      // ... (other book details)
    }
  ]
}
```

### 5. Get books according to publication

Retrieve books published by a specific publication.

```http
GET /publication/:publication
```

**Parameters**

| Parameter      | Type     | Description                                  |
| :------------- | :------- | :------------------------------------------- |
| `publication`  | `string` | **Required**. Publication's name to filter books |

**Response**

The response will contain a list of books published by the specified publication.

Example Response:

```json
{
  "total": 1,
  "data": [
    {
      "ISBN": "978-0-112233-44-5",
      "title": "Scientific Journal",
      // ... (other book details)
    }
  ]
}
```

### 6. Post a new book entry (Admin)

Allow an admin to post a new book entry.

```http
POST /admin
```

**Request Body**

The request body should contain the details of the new book.

Example Request Body:

```json
{
  "ISBN": "978-0-999999-99-9",
  "title": "New Book",
  // ... (other book details)
}
```

**Response**

The response will contain details about the newly added book.

Example Response:

```json
{
  "ISBN": "978-0-999999-99-9",
  "title": "New Book",
  // ... (other book details)
}
```

### 7. Update an existing book entry (Admin)

Allow an admin to update an existing book entry.

```http
PATCH /admin
```

**Request Body**

The request body should contain the ISBN of the book to update and the new details.

Example Request Body:

```json
{
  "ISBN": "978-0-999999-99-9",
  "title": "Updated Book Title",
  // ... (other updated book details)
}
```

**Response**

The response will contain details about the updated book.

Example Response:

```json
{
  "ISBN": "978-0-999999-99-9",
  "title": "Updated Book Title",
  // ... (other updated book details)
}
```

### 8. Post multiple author entries (Admin)

Allow an admin to post multiple author entries.

```http
POST /admin/author
```

**Request Body**

The request body should contain details of one or more authors.

Example Request Body:

```json
{
  "authorName": ["Author 1", "Author 2"],
  // ... (other author details)
}
```

**Response**

The response will contain details about the newly added authors.

Example Response:

```json
[
  {
    "authorName": "Author 1",
    // ... (other author details)
  },
  {
    "authorName": "Author 2",
    // ... (other author details)
  }
]
```

### 9. Post multiple publication entries (Admin)

Allow an admin to post multiple publication entries.

```http
POST /admin/publication
```

**Request Body**

The request body should contain details of one or more publications.

Example Request Body:

```json
{
  "publicationName": ["Publication 1", "Publication 2"],
  // ... (other publication details)
}
```

**Response**

The response will contain details about the newly added publications.

Example Response:

```json
[
  {
    "publicationName": "Publication 1",
    // ... (other publication details)
  },
  {
    "publicationName": "Publication 2",
    // ... (other publication details)
  }
]
```

### 10. Post multiple category entries (Admin)

Allow an admin to post multiple category entries.

```http
POST /admin/category
```

**Request Body**

The request body should contain details of one or more categories.

Example Request Body:

```json
{
  "categoryName": ["Category 1", "Category 2"],
  // ... (other category details)
}
```

**Response**

The response will contain details about the newly added categories.

Example Response:

```json
[
  {
    "categoryName
