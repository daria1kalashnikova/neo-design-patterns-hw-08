import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class PerformanceSubscriber implements RenderEventSubscriber {
  private renderTime = 0;

  update(context: RenderContext): void {
    this.renderTime += context.renderTime || 0;
  }

  getState() {
    return this.renderTime;
  }

  logState() {
    console.log(`[Performance] Total render time: ${this.renderTime}ms`);
  }
}
