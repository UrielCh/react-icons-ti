import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Divide icon from Typicons
 * @module
 */
export function TiDivide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"12","cy":"6","r":"2.25"}},{tag:"circle",attr:{"cx":"12","cy":"18","r":"2.25"},child:[]},{tag:"path",attr:{d:"M18 10h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"},child:[]}]})(props);
}
export default TiDivide;
