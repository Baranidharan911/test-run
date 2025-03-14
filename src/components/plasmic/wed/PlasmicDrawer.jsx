// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ciGKDfqapgtMVQBmmP938S
// Component: AG7f8rJF0MyJ
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Dialog } from "@plasmicpkgs/radix-ui";
import Button2 from "../../Button2"; // plasmic-import: FN1xPs_oVPhv/component
import { SheetContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { DialogClose } from "@plasmicpkgs/radix-ui";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ciGKDfqapgtMVQBmmP938S/projectcss
import sty from "./PlasmicDrawer.module.css"; // plasmic-import: AG7f8rJF0MyJ/css

createPlasmicElementProxy;

export const PlasmicDrawer__VariantProps = new Array("noTrigger");

export const PlasmicDrawer__ArgProps = new Array(
  "open",
  "onOpenChange",
  "trigger",
  "children"
);

const $$ = {};

function PlasmicDrawer__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          open: false
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
        path: "dialogCore.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
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
    <Dialog
      data-plasmic-name={"dialogCore"}
      data-plasmic-override={overrides.dialogCore}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.dialogCore
      )}
      noContain={true}
      onOpenChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, ["dialogCore", "open"]).apply(
          null,
          eventArgs
        );
      }}
      open={generateStateValueProp($state, ["dialogCore", "open"])}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <Button2
                  className={classNames("__wab_instance", sty.button2__ntomp)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lm2VQ
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFFE0" }}
                      >
                        {"Show dialog"}
                      </span>
                    </React.Fragment>
                  </div>
                </Button2>
              ),

              value: args.trigger
            })
          : null
      }
    >
      <SheetContent
        data-plasmic-name={"drawerContent"}
        data-plasmic-override={overrides.drawerContent}
        className={classNames("__wab_instance", sty.drawerContent)}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            children={null}
            className={classNames("__wab_instance", sty.dialogTitle)}
          />

          {renderPlasmicSlot({
            defaultContents: (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qj1M9)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e3AqO
                  )}
                >
                  {"You can insert drawer body content here in this slot."}
                </div>
              </Stack__>
            ),

            value: args.children
          })}
        </Stack__>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        />
      </SheetContent>
    </Dialog>
  );
}

const PlasmicDescendants = {
  dialogCore: [
    "dialogCore",
    "drawerContent",
    "freeBox",
    "dialogTitle",
    "dialogClose"
  ],

  drawerContent: ["drawerContent", "freeBox", "dialogTitle", "dialogClose"],
  freeBox: ["freeBox", "dialogTitle"],
  dialogTitle: ["dialogTitle"],
  dialogClose: ["dialogClose"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDrawer__ArgProps,
          internalVariantPropNames: PlasmicDrawer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrawer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialogCore") {
    func.displayName = "PlasmicDrawer";
  } else {
    func.displayName = `PlasmicDrawer.${nodeName}`;
  }
  return func;
}

export const PlasmicDrawer = Object.assign(
  // Top-level PlasmicDrawer renders the root element
  makeNodeComponent("dialogCore"),
  {
    // Helper components rendering sub-elements
    drawerContent: makeNodeComponent("drawerContent"),
    freeBox: makeNodeComponent("freeBox"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    dialogClose: makeNodeComponent("dialogClose"),
    // Metadata about props expected for PlasmicDrawer
    internalVariantProps: PlasmicDrawer__VariantProps,
    internalArgProps: PlasmicDrawer__ArgProps
  }
);

export default PlasmicDrawer;
/* prettier-ignore-end */
