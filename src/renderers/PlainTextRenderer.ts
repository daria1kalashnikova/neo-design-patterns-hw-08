import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return ">".repeat(level) + ` ${text} ` + "<".repeat(level);
  }

  renderParagraph(text: string): string {
    return text;
  }

  renderList(items: string[]): string {
    return items.map((item) => `● ${item}`).join("\n");
  }

  wrapDocument(content: string): string {
    return content.trim();
  }
}
