import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import dayjs from "dayjs";

export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("site");
    eleventyConfig.setOutputDirectory("_build");
    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "all",
            limit: 50,
        },
        metadata: {
            language: "en",
            title: "Peter Briggs",
            subtitle: "Peter thinks about technology, humanity, the small web, etc., and might write some of it down.",
            base: "https://peter.briggs.seattle.wa.us/",
            author: {
                name: "Peter Briggs",
                email: "contact@email.peter.briggs.seattle.wa.us",
            }
        }
    });
    eleventyConfig.addFilter("monthYear", (date) => dayjs(date).format("MMMM YYYY"));
};
