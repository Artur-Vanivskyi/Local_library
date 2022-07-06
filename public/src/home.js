function getTotalBooksCount(books) {
  let totalBooksCount = 0;
  for (let newTotalBooksCount in books) {
    totalBooksCount++;
  }
  return totalBooksCount;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  for (let newTotal in accounts) {
    total++;
  }
  return total;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    !book.borrows[0].returned ? acc++ : null;
    return acc;
  }, 0);
}


function _wayToSortBooks(beSorted){
  beSorted.sort((itemA, itemB) => itemB.count - itemA.count);
  return beSorted;
}





function getMostCommonGenres(books) {
  const mostCommonGenre = books.reduce((genres, book) => {
    const genreObject = genres.find(
      (currentGenre) => currentGenre.name === book.genre
    );
    !genreObject
      ? genres.push({ name: book.genre, count: 1 })
      : genreObject.count++;
    return genres;
  }, []);
  _wayToSortBooks(mostCommonGenre);
  mostCommonGenre.splice(5);
  return mostCommonGenre;
}

function getMostPopularBooks(books) {
  const mostPopularBook = books.map(book => {
    return {name:book.title, count: book.borrows.length}});
    _wayToSortBooks(mostPopularBook);
    mostPopularBook.splice(5);
    return mostPopularBook;
}

function getMostPopularAuthors(books, authors) {
  const mostPopularAuthor = authors.map(author => {
    const authorName = `${author.name.first} ${author.name.last}`;
    const booksBy = books.filter(book => book.authorId === author.id);
    const borrows = booksBy.reduce((total, book) => total + book.borrows.length, 0);
    const authorInfo = {name: authorName, count: borrows};
    return authorInfo;
  });
  mostPopularAuthor.sort((authA, authB) => authB.count - authA.count);
  mostPopularAuthor.splice(5);
  return mostPopularAuthor;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
