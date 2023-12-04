module.exports = {
    'Search on Homepage': (browser) => {
      const homePage = browser.page.Home_page();
  
      homePage.navigate()
        .waitForElementVisible('@search');
  
      homePage.performSearch("dress");
      browser.elements('css selector', '.product-container', function (result) {
      const numberOfResults = result.value.length;
        for (let i = 1; i <= numberOfResults; i++) {
            const selector = `#product_list > li:nth-child(${i})`; 
            browser.verify.containsText(selector,'Dress');}
        });
        
      browser.end();
    },
  };