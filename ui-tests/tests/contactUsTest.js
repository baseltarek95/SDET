module.exports = {
    'Contact Us Form Submission': (browser) => {
      let contactPage = browser.page.contactPage();
  
      contactPage.navigate()
      .waitForElementVisible('@emailInput',5000);
      // Test INvalid form submission
      contactPage.fillContactForm('2', '', '')
        .submitContactForm()
        .waitForElementVisible('#center_column > div',2000)
        .assert.containsText("#center_column > div", "Invalid email address.");
  
      // Test valid form submission (e.g., missing required fields)
      contactPage.fillContactForm('2', 'Basel_tarek@hotmail.com', 'This order is absolutely stunning')
      .setValue("#fileUpload", require('path').resolve(__dirname + '/Basel.txt'))
      .submitContactForm()
      .waitForElementVisible("#center_column > p", 3000)
      .assert.containsText("#center_column > p", "Your message has been successfully sent to our team.");
      browser.end();
    },
  };
  