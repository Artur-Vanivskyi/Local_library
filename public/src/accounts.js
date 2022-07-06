function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last < nameB.name.last ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach((book) =>
    book.borrows.forEach((trans) => (account.id === trans.id ? total++ : null))
  );
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = [];
  function _findAuthor(authors, id){ 
    return authors.find((author) => author.id === id);}
  booksCheckedOut = books.filter((book) =>
    book.borrows.some((borrower) => borrower.id === account.id && !borrower.returned));
  booksCheckedOut = booksCheckedOut.map((book) => {
    const authorInfo = _findAuthor(authors, book.authorId);
    const possesedBook = {...book, author: authorInfo };
    return possesedBook;
  });
  return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
