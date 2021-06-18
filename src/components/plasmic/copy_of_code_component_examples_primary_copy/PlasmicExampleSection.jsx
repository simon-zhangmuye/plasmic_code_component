// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: HxsWCzVvbgXkQCjLyd31a
// Component: lppfw42O7vO3bL
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ListItem from "../../ListItem"; // plasmic-import: J4ZNq7WgHUkyU/component
import YouTube from "react-youtube"; // plasmic-import: cKFZpge-rl5Qb/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_code_component_examples_primary_copy.module.css"; // plasmic-import: HxsWCzVvbgXkQCjLyd31a/projectcss
import * as sty from "./PlasmicExampleSection.module.css"; // plasmic-import: lppfw42O7vO3bL/css

export const PlasmicExampleSection__VariantProps = new Array();

export const PlasmicExampleSection__ArgProps = new Array("children", "slot");

function PlasmicExampleSection__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Use off-the-shelf components.",
        value: args.children,
        className: classNames(sty.slotChildren)
      })}

      <p.Stack
        as={"div"}
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <ListItem
              _package={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__my5D4
                  )}
                >
                  {"react-youtube"}
                </div>
              }
              className={classNames("__wab_instance", sty.listItem__lk6Ec)}
              title={"Youtube"}
            >
              <YouTube
                className={classNames("__wab_instance", sty.youTube__uehjK)}
                videoId={"R6MeLqRQzYw"}
              />
            </ListItem>
          ),

          value: args.slot
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicExampleSection__ArgProps,
      internalVariantPropNames: PlasmicExampleSection__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicExampleSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExampleSection";
  } else {
    func.displayName = `PlasmicExampleSection.${nodeName}`;
  }
  return func;
}

export const PlasmicExampleSection = Object.assign(
  // Top-level PlasmicExampleSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicExampleSection
    internalVariantProps: PlasmicExampleSection__VariantProps,
    internalArgProps: PlasmicExampleSection__ArgProps
  }
);

export default PlasmicExampleSection;
/* prettier-ignore-end */