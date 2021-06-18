// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: pDZtEWqRzT
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Testimonials from "../../Testimonials"; // plasmic-import: DJbGaLTtKAR/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicQuotesScroller.module.css"; // plasmic-import: pDZtEWqRzT/css

export const PlasmicQuotesScroller__VariantProps = new Array();

export const PlasmicQuotesScroller__ArgProps = new Array("children");

function PlasmicQuotesScroller__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Testimonials
            className={classNames("__wab_instance", sty.testimonials__eU30T)}
          />
        ),

        value: args.children
      })}

      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      />
    </div>
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
      internalArgPropNames: PlasmicQuotesScroller__ArgProps,
      internalVariantPropNames: PlasmicQuotesScroller__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicQuotesScroller__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuotesScroller";
  } else {
    func.displayName = `PlasmicQuotesScroller.${nodeName}`;
  }
  return func;
}

export const PlasmicQuotesScroller = Object.assign(
  // Top-level PlasmicQuotesScroller renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicQuotesScroller
    internalVariantProps: PlasmicQuotesScroller__VariantProps,
    internalArgProps: PlasmicQuotesScroller__ArgProps
  }
);

export default PlasmicQuotesScroller;
/* prettier-ignore-end */
