import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

import customRichText from "../customRichText";

export default defineSection({
  name: "section.copy",
  title: "Copy",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "style",
      title: "Style",
    },
  ],
  options: {
    variants: [
      {
        assetUrl: "/images/copy.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "text",
      type: customRichText.name,
      group: "content",
    }),
    defineField({
      name: "theme",
      type: "string",
      group: "style",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
  ],
  preview: {
    select: {
      text: "text.text",
    },
    prepare(value) {
      const block = (value.text || []).find(
        (block: { _type: string }) => block._type === "block",
      );
      return {
        title: block
          ? block.children
              .filter((child: { _type: string }) => child._type === "span")
              .map((span: { text: any }) => span.text)
              .join("")
          : "No text",
      };
    },
  },
});
