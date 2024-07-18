import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Watch icon from Typicons
 * @module
 */
export function TiWatch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 13h2c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zM17 7.105v-2.105c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v2.105c-1.236 1.263-2 2.989-2 4.895s.764 3.632 2 4.895v2.105c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-2.105c1.236-1.262 2-2.988 2-4.895s-.764-3.632-2-4.895zm-8-2.105c0-.551.449-1 1-1h4c.551 0 1 .449 1 1v1.809c-.883-.512-1.906-.809-3-.809s-2.117.297-3 .809v-1.809zm6 14c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1v-1.811c.883.513 1.906.811 3 .811s2.117-.298 3-.811v1.811zm-3-2c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}}]})(props);
}
export default TiWatch;
