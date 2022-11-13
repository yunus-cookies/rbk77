// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IArticleFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description?: string | undefined;

  /** Publish Date */
  publishDate: string;

  /** Content */
  content: Document;
}

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "article";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "article";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";