module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./googlee63a08eca478391c.html");
    eleventyConfig.addPassthroughCopy("./404.html");
    eleventyConfig.addPassthroughCopy("./static/**/*");
    return {
        dir: {
            input: "src",
            output: "build"
        }
    }
};