import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class RenderLoggerSubscriber implements RenderEventSubscriber {
  update(context: RenderContext): void {
    let output = `[Log] Rendered ${context.type}`;
    switch (context.type) {
      case "Paragraph":
        output += ` (${context.content.length} chars)`;
        break;
      case "Section":
        output += ` ("${context.content}", level ${context.level})`;
        break;
      case "List":
        output += ` (${context.items?.length} items)`;
        break;

      default:
        break;
    }
    console.log(output);
  }
}
