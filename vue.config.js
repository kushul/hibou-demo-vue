var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
            @import "@/scss/style/base/_variables.scss";
          `
            }
        }
    },
};
