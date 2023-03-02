// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IProjectFields {
  /** Title */
  title: string;

  /** Main Image */
  mainImage: Asset;

  /** Body */
  body?: Document | undefined;
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

export type LOCALE_CODE = "en-GB";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-GB";
