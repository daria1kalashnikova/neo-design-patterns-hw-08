import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    const now = Date.now();

    let output = this.renderer.renderHeader(this.level, this.title) + "\n";
    this.children.forEach((chield) => {
      output += "\n" + chield.render() + "\n";
    });
    RenderEventPublisher.notify({
      type: "Section",
      content: this.title,
      renderTime: Date.now() - now,
      level: this.level,
    });
    return output;
  }
}
