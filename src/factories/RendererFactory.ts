import { DocRenderer } from "../interfaces/DocRenderer";
import { HTMLRenderer } from "../renderers/HTMLRenderer";
import { MarkdownRenderer } from "../renderers/MarkdownRenderer";
import { PlainTextRenderer } from "../renderers/PlainTextRenderer";

export type RendererType = "html" | "markdown" | "plain";

export class RendererFactory {
  static create(type: RendererType): DocRenderer {
    let docRender;
    switch (type) {
      case "html":
        docRender = new HTMLRenderer();
        break;
      case "plain":
        docRender = new PlainTextRenderer();
        break;
      default:
        docRender = new MarkdownRenderer();
        break;
    }
    return docRender;
  }

  static getSupportedFormats(): RendererType[] {
    return ["html", "markdown", "plain"];
  }
}
