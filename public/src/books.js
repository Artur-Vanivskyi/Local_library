function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const booksOut = books.filter((book) =>
    book.borrows.some((trans) => !trans.returned)
  );
  const booksIn = books.filter((book) =>
    book.borrows.every((trans) => trans.returned)
  );
  const booksStatus = [booksOut, booksIn];
  return booksStatus;
}

function getBorrowersForBook(book, accounts) {
  const allBookBorrowers = book.borrows.map((trans => {
    const account = accounts.find(account => account.id === trans.id);
const newTrans = {...trans,...account};
return newTrans;
  }));
allBookBorrowers.splice(10);
return allBookBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
