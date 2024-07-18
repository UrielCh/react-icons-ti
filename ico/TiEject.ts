import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Eject icon from Typicons
 * @module
 */
export function TiEject(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13 17.5c-2.481 0-4.5-2.019-4.5-4.5 0-.553-.447-1-1-1s-1 .447-1 1c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5c-.553 0-1 .447-1 1s.447 1 1 1c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM10.656 4c.552 0 1 .448 1 1s-.448 1-1 1h-3.243l1.708 1.707 4.093 4.092c.391.391.391 1.025.001 1.415-.189.188-.44.292-.708.292s-.519-.104-.707-.291l-4.093-4.094-1.707-1.708v3.243c0 .552-.448 1-1 1s-1-.448-1-1v-6.656h6.656"}}]})(props);
}
export default TiEject;
