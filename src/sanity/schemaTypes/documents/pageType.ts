import { defineField, defineType } from "sanity";

export const pagesType = defineType({
    name: "pages",
    title: "Pages",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});