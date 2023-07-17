function validateLinkedInURL(input) {
    const linkedInURLRegex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    if (linkedInURLRegex.test(input)) {
      console.log("Valid LinkedIn profile URL!");
    } else {
      console.log("Invalid LinkedIn profile URL!");
    }
  }
  
  // Test the program with different inputs
  validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
  validateLinkedInURL("https://www.linkedimm.com/in/invalidurl");
  