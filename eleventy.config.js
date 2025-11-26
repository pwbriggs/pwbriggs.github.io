import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("site");
    eleventyConfig.setOutputDirectory("_build");
    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "content",
            limit: 50,
        },
        metadata: {
            language: "en",
            title: "Peter Briggs",
            subtitle: "Peter thinks about digital gardening, humanity, technology, etc., and might write it down.",
            base: "https://peter.briggs.seattle.wa.us/",
            author: {
                name: "Peter Briggs",
                email: "contact@email.peter.briggs.seattle.wa.us",
            }
        }
    });
};
