var trans = require("./transformer.js");
module.exports = {
    blocks:{},
    filters:{},
    hooks:{
        "page:before": function(page) {
            page.content = js_toHTML(page.content);
            return page;
        }
    }
}
