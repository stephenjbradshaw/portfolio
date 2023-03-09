// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import {Document} from "@contentful/rich-text-types";
import {Asset, Entry} from "contentful";

export interface IProjectFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Main Image */
  mainImage: Asset;

  /** Body */
  body: Document;
}

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "project";

export type IEntry = IProject;

export type LOCALE_CODE = "de-DE" | "en-GB";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-GB";
