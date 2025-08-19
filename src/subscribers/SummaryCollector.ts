import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class SummaryCollector implements RenderEventSubscriber {
  readonly elements: { [key: string]: number } = {};
  update(context: RenderContext): void {
    if (!this.elements[context.type]) this.elements[context.type] = 1;
    else this.elements[context.type] += 1;
  }

  getState() {
    return this.elements;
  }

  logState() {
    const output = Object.entries(this.elements)
      .map(([key, value]) => `${value} ${key.toLowerCase()}s`)
      .join(", ");
    console.log(`[Summary] Rendered ${output}`);
  }
}
