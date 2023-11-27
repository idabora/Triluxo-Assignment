# Triluxo-Assignment

Its a Library Management Rest API Express Application.The Database i have used to store Books is MongoDB with a collection name as Books.
The 4 Methods i have used are GET, POST , PUT , DELETE to get book/books , add a new Book , Update the Fields of a book or add New one in the Existing Document and to Delete a 
Existing Book from the Collection.

# Library Management API

This API provides basic functionality for managing books in a library.

## Get Book

### Endpoint:
`GET /api/getbook`

### Description:
Retrieves information about books based on the provided parameters.

### Input:
- `bookId` (optional): The unique identifier of the book.

### Use Cases:
1. Retrieve information about a specific book by providing the `bookId`.
2. Retrieve information about all books in the library by not providing a `bookId`.

### Response:
- 200 OK: Returns information about the requested book(s).
- 400 Bad Request: Indicates that the book(s) don't exist.

## Add Book

### Endpoint:
`POST /api/addbooks`

### Description:
Adds a new book to the library.

### Input:
- `title` (required): The title of the book.
- `author` (optional): The author of the book.
- `genre` (optional): The genre of the book.
- `pageCount` (optional): The page count of the book.

### Use Cases:
1. Add a book with only the required `title`.
2. Add a book with additional information such as `author`, `genre`, and `pageCount`.

### Response:
- 201 Created: Returns the newly added book.
- 400 Bad Request: Indicates missing required fields.

## Update Book

### Endpoint:
`PUT /api/updatebooks`

### Description:
Updates information about a book in the library.

### Input:
- `bookId` (required): The unique identifier of the book.
- `title` (optional): The new title of the book.
- `author` (optional): The new author of the book.
- `genre` (optional): The new genre of the book.
- `pageCount` (optional): The new page count of the book.

### Use Cases:
1. Update the `title` of a book.
2. Update multiple fields of a book such as `author`, `genre`, and `pageCount`.

### Response:
- 200 OK: Returns the updated information about the book.
- 400 Bad Request: Indicates missing required `bookId`.

## Remove Book

### Endpoint:
`DELETE /api/deletebooks`

### Description:
Removes a book from the library.

### Input:
- `bookId` (optional): The unique identifier of the book.
- `title` (optional): The title of the book.

### Use Cases:
1. Remove a book by providing its unique `bookId`.
2. Remove a book by providing its `title`.

### Response:
- 200 OK: Returns the removed book.
- 400 Bad Request: Indicates missing both `bookId` and `title`.
