import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Map icon from Typicons
 * @module
 */
export function TiMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.383 3.076c-.373-.155-.804-.069-1.09.217l-3.867 3.867-4.301-3.441c-.396-.316-.973-.287-1.332.074l-4.5 4.5c-.188.187-.293.441-.293.707v10c0 .404.243.77.617.924.124.053.254.076.383.076.26 0 .516-.102.707-.293l3.867-3.867 4.301 3.441c.396.316.971.285 1.332-.074l4.5-4.5c.188-.187.293-.441.293-.707v-10c0-.404-.243-.77-.617-.924zm-13.383 13.51v-7.172l3-3v7.24c-.07.043-3 2.932-3 2.932zm4.125-2.867l-.125-.068v-7.469s3.959 3.143 4 3.166v7.473l-3.875-3.102zm7.875-.133l-3 3v-7.236c.07-.043 3-2.936 3-2.936v7.172z"}}]})(props);
}
export default TiMap;
