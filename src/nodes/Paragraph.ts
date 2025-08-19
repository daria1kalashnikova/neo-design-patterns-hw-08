import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class Paragraph implements DocNode {
  constructor(private text: string, private renderer: DocRenderer) {}
  render(): string {
    const now = Date.now();

    const content = this.renderer.renderParagraph(this.text);
    RenderEventPublisher.notify({
      type: "Paragraph",
      content,
      renderTime: Date.now() - now,
    });

    return content;
  }
}
