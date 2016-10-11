var pandoc = require("js-pandoc.js");
module.exports = {
    blocks:{},
    filters:{},
    hooks:{
        "page:before": function(page) {
            page.content = pandoc.Pandoc(page.content);
        }
    }
}

