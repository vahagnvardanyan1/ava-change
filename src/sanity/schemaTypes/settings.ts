import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "feePercentage",
      title: "Exchange fee (%)",
      description:
        "Deducted from every USDT quote in the calculator, e.g. 2.5 for 2.5%.",
      type: "number",
      validation: (rule) => rule.required().min(0).max(100),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
