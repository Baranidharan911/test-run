// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ciGKDfqapgtMVQBmmP938S
// Component: yquhKvB_EpEe
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdRate } from "@plasmicpkgs/antd5/skinny/registerRate";
import ArrowButton from "../../ArrowButton"; // plasmic-import: wf_E_SfK4Mns/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ciGKDfqapgtMVQBmmP938S/projectcss
import sty from "./PlasmicHeadingCardDetails.module.css"; // plasmic-import: yquhKvB_EpEe/css

createPlasmicElementProxy;

export const PlasmicHeadingCardDetails__VariantProps = new Array();

export const PlasmicHeadingCardDetails__ArgProps = new Array(
  "name",
  "location",
  "rating",
  "price"
);

const $$ = {};

function PlasmicHeadingCardDetails__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          name: "Perfect Day Planners",
          location: "Ahemdabad, Gujrat",
          rating: 4,
          price: 70000
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "rate.value",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.rating;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__xqzW2)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__i6VWm
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.name;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__atNN
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.location;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__oIdt8)}
        >
          <AntdRate
            data-plasmic-name={"rate"}
            data-plasmic-override={overrides.rate}
            className={classNames("__wab_instance", sty.rate)}
            defaultValue={(() => {
              try {
                return $props.rating;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            onChange={async (...eventArgs) => {
              generateStateOnChangeProp($state, ["rate", "value"]).apply(
                null,
                eventArgs
              );
            }}
            symbols={
              <React.Fragment>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nmMiM
                  )}
                >
                  {"1"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9UXxO
                  )}
                >
                  {"2"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9DmC6
                  )}
                >
                  {"3"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__j2Zn0
                  )}
                >
                  {"4"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__c4GCr
                  )}
                >
                  {"5"}
                </div>
              </React.Fragment>
            }
            value={generateStateValueProp($state, ["rate", "value"])}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___52Lz
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return "(" + $props.rating.toFixed(1) + ")";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__bxgzf)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__nj2Wl
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return (
                  "Starts from INR " +
                  $props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <ArrowButton
          data-plasmic-name={"arrowButton"}
          data-plasmic-override={overrides.arrowButton}
          className={classNames("__wab_instance", sty.arrowButton)}
        />
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "rate", "arrowButton"],
  rate: ["rate"],
  arrowButton: ["arrowButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeadingCardDetails__ArgProps,
          internalVariantPropNames: PlasmicHeadingCardDetails__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeadingCardDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeadingCardDetails";
  } else {
    func.displayName = `PlasmicHeadingCardDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicHeadingCardDetails = Object.assign(
  // Top-level PlasmicHeadingCardDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    rate: makeNodeComponent("rate"),
    arrowButton: makeNodeComponent("arrowButton"),
    // Metadata about props expected for PlasmicHeadingCardDetails
    internalVariantProps: PlasmicHeadingCardDetails__VariantProps,
    internalArgProps: PlasmicHeadingCardDetails__ArgProps
  }
);

export default PlasmicHeadingCardDetails;
/* prettier-ignore-end */
