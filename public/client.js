document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
});

function fetchBooks() {
    fetch('/user')
        .then(response => response.json())
        .then(data => {
            const booksContainer = document.getElementById('books-container');
            data.data.forEach(book => {
                const bookCard = createBookCard(book);
                booksContainer.appendChild(bookCard);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'p-4 bg-white rounded shadow';

    const title = document.createElement('h3');
    title.className = 'text-xl font-bold';
    title.textContent = book.title;

    const isbn = document.createElement('p');
    isbn.textContent = `ISBN: ${book.ISBN}`;

    const details = document.createElement('p');
    details.textContent = `Pages: ${book.totalpages}, Published: ${book.publishDate}, Language: ${book.language.join(', ')}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.authorName.join(', ')}`;

    const publication = document.createElement('p');
    publication.textContent = `Publication: ${book.publicationName}`;

    const category = document.createElement('p');
    category.textContent = `Category: ${book.category.join(', ')}`;

    card.appendChild(title);
    card.appendChild(isbn);
    card.appendChild(details);
    card.appendChild(author);
    card.appendChild(publication);
    card.appendChild(category);

    return card;
}