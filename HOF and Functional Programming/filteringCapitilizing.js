// Function to capitalize author names
function capitalizeAuthorName(author) {
    return author.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Function to filter and capitalize books published after 2010
  function filterAndCapitalizeBooks(books) {
    const filteredBooks = books.filter(book => book.publicationYear > 2010);
  
    const booksWithCapitalizedAuthors = filteredBooks.map(book => {
      return {
        title: book.title,
        author: capitalizeAuthorName(book.author),
        publicationYear: book.publicationYear
      };
    });
  
    return booksWithCapitalizedAuthors;
  }
  
  // Sample list of books with authors and publication years
  const books = [
    { title: "Book1", author: "john doe", publicationYear: 2005 },
    { title: "Book2", author: "jane smith", publicationYear: 2015 },
    { title: "Book3", author: "alice wonderland", publicationYear: 2011 },
    { title: "Book4", author: "bob builder", publicationYear: 2008 },
    { title: "Book5", author: "emma stone", publicationYear: 2012 },
  ];
  
  // Filter and capitalize books
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  
  // print the result
  console.log("Filtered and Capitalized Books:");
  console.log(filteredAndCapitalizedBooks);
  