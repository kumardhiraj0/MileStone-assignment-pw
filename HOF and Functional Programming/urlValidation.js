function validateURL(input) {
    const urlRegex = /^(https?:\/\/)[a-zA-Z0-9\-.]+[.][a-zA-Z]+$/;
  
    if (urlRegex.test(input)) {
      console.log("Valid URL!");
    } else {
      console.log("Invalid URL!");
    }
  }
  
  //checking with diff inputs
  validateURL("http://www.example.com");
  validateURL("https://dhiraj.example.com");
  validateURL("http://123.45.67.89");
  validateURL("https://www.example.com?query=parameter");
  validateURL("ftp://example.com");
  