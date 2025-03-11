// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector1Svg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.934.5a3.008 3.008 0 00-3.01 3v15c0 1.655 1.35 3 3.01 3h4.619v-6.834H6.069V11h2.484V9.42c0-4.082 1.853-5.976 5.88-5.976.761 0 2.079.15 2.62.3v3.318a15.922 15.922 0 00-1.393-.046c-1.975 0-2.738.745-2.738 2.68V11h3.933l-.677 3.666h-3.26V21.5h6.068c1.66 0 3.01-1.345 3.01-3v-15c0-1.655-1.35-3-3.01-3H3.934z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector1Svg2Icon;
/* prettier-ignore-end */
