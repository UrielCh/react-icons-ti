import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Backspace icon from Typicons
 * @module
 */
export function TiBackspace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 5h-10c-1.266 0-2.834.807-3.57 1.837l-2.61 3.653-1.199 1.679c-.121.175-.122.492.003.664l1.188 1.664 2.619 3.667c.735 1.029 2.302 1.836 3.569 1.836h10c1.379 0 2.5-1.122 2.5-2.5v-10c0-1.378-1.121-2.5-2.5-2.5zm-2.293 9.793c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"}}]})(props);
}
export default TiBackspace;
