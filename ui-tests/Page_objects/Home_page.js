module.exports={
    url:"http://automationpractice.multiformis.com/index.php",
    elements:{
        search:"#search_query_top",
        search_button:"#searchbox > button",

    },

    commands:[
        {
            performSearch(query) {
              return this.setValue('@search', query)
                .click('@search_button');
            },

    }],

}