import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class List implements DocNode {
  constructor(private items: string[], private renderer: DocRenderer) {}
  render(): string {
    const now = Date.now();

    const content = this.renderer.renderList(this.items);
    RenderEventPublisher.notify({
      type: "List",
      content,
      items: this.items,
      renderTime: Date.now() - now,
    });
    return content;
  }
}
