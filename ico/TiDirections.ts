import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Directions icon from Typicons
 * @module
 */
export function TiDirections(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.908 9.5l-2.754-2.607c-.568-.541-1.447-.893-2.237-.893h-2.917v-.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v.5h-3.5c-1.93 0-3.5 1.57-3.5 3.5 0 1.396.828 2.596 2.016 3.157l-1.844 1.843 2.561 2.561c.57.57 1.46.939 2.268.939h2.2l.8 4h1l.8-4h2.7c1.931 0 3.5-1.57 3.5-3.5 0-.902-.353-1.718-.915-2.339l.072-.056 2.75-2.605zm-5.408 6.5h-7.5c-.275 0-.658-.158-.854-.354l-1.146-1.146 1.146-1.146c.195-.195.577-.354.854-.354h7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm1.279-5.344c-.199.19-.586.344-.862.344h-9.417c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h9.417c.276 0 .663.154.862.344l1.221 1.156-1.221 1.156z"}}]})(props);
}
export default TiDirections;
