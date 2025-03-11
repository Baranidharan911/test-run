// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorSvg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.996.5c-1.654 0-3 1.345-3 3v15c0 1.655 1.346 3 3 3h15c1.655 0 3-1.345 3-3v-15c0-1.655-1.345-3-3-3h-15zm13.927 3.938l-4.866 5.559 5.724 7.566h-4.482l-3.506-4.59-4.017 4.59H3.549l5.204-5.949-5.49-7.177h4.594l3.174 4.196 3.665-4.195h2.227zM15.15 16.23L7.187 5.698H5.86l8.053 10.533h1.238z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorSvg2Icon;
/* prettier-ignore-end */
