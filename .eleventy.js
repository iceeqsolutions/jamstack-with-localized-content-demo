module.exports = function(config) {
    config.addPassthroughCopy("src/js"); // We add all the content from the folder
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };
};