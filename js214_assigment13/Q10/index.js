// Book class definition
class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year}. Genre: ${this.genre}`;
    }
  }
  
  // Library class definition
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      if (book instanceof Book) {
        this.books.push(book);
      } else {
        console.error('Invalid book');
      }
    }
  
    filterBooksByYear(year) {
      return this.books.filter(book => book.year > year);
    }
  
    getAllTitles() {
      return this.books.map(book => book.title);
    }
  
    getTotalBooks() {
      return this.books.reduce((total) => total + 1, 0);
    }
  
    getAveragePublicationYear() {
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return this.books.length ? totalYears / this.books.length : 0;
    }
  }
  
  // Factory function to create a new book
  function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
  }
  
  // Example usage
  const myLibrary = new Library();
  
  const book1 = createBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction');
  const book2 = createBook('1984', 'George Orwell', 1949, 'Dystopian');
  const book3 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction');
  const book4 = createBook('Brave New World', 'Aldous Huxley', 1932, 'Dystopian');
  
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  myLibrary.addBook(book3);
  myLibrary.addBook(book4);
  
  console.log('Books published after 1930:', myLibrary.filterBooksByYear(1930));
  console.log('All book titles:', myLibrary.getAllTitles());
  console.log('Total number of books:', myLibrary.getTotalBooks());
  console.log('Average publication year:', myLibrary.getAveragePublicationYear());
  