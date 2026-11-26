"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
} from "@/sanity/env";
import { SETTINGS_DOCUMENT_ID } from "@/sanity/constants";
import { schemaTypes } from "@/sanity/schemaTypes";
import { settingsType } from "@/sanity/schemaTypes/settings";

export default defineConfig({
  basePath: "/studio",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  schema: { types: schemaTypes },
  plugins: [
    // Site settings is a singleton: one fixed document, no "create new".
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title(settingsType.title ?? "Site settings")
              .id(SETTINGS_DOCUMENT_ID)
              .child(
                S.document()
                  .schemaType(settingsType.name)
                  .documentId(SETTINGS_DOCUMENT_ID),
              ),
          ]),
    }),
  ],
  document: {
    newDocumentOptions: (templates) =>
      templates.filter(({ templateId }) => templateId !== settingsType.name),
  },
});
