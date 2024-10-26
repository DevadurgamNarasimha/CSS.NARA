let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
};
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(key, book[key]);
    }
}