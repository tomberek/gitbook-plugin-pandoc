var pandoc = require("./js-pandoc.js");
p = pandoc.Pandoc;
module.exports = {
    blocks:{},
    filters:{},
    hooks:{
        "page:before": function(page) {
            debug=false;
            pandoc=true;
            options = {pandoc:true,debug:false};
            window={}
            console.groupEnd = function(){};
            page.content = p(page.content,options);
            return page;
        }
    }
}

