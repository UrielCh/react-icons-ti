import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ImageOutline icon from Typicons
 * @module
 */
export function TiImageOutline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.5 7.999c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m0-1c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zM16 11.999c.45.051 1.27 1.804 1.779 4.001h-11.392c.434-1.034 1.055-2.001 1.612-2.001.806 0 1.125.185 1.53.42.447.258 1.006.58 1.97.58 1.138 0 1.942-.885 2.653-1.666.627-.687 1.218-1.334 1.848-1.334m0-1c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4h14.001s-1-6-3-6zM22 6c0-1.104-.896-2-2-2h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12zm-2 12h-16v-12h16.003l-.003 12z"}}]})(props);
}
export default TiImageOutline;
