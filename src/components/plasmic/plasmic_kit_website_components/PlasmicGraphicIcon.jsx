// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: TcXkT68Mp6
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicGraphicIcon.module.css"; // plasmic-import: TcXkT68Mp6/css
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: Mj5CsVYcA9/icon

export const PlasmicGraphicIcon__VariantProps = new Array("colors", "shape");

export const PlasmicGraphicIcon__ArgProps = new Array("children");

function PlasmicGraphicIcon__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__colors_blue]: hasVariant(variants, "colors", "blue"),
        [sty.root__colors_coral]: hasVariant(variants, "colors", "coral"),
        [sty.root__colors_cyan]: hasVariant(variants, "colors", "cyan"),
        [sty.root__colors_darkGraySolid]: hasVariant(
          variants,
          "colors",
          "darkGraySolid"
        ),

        [sty.root__colors_gray]: hasVariant(variants, "colors", "gray"),
        [sty.root__colors_green]: hasVariant(variants, "colors", "green"),
        [sty.root__colors_lightBlueSolid]: hasVariant(
          variants,
          "colors",
          "lightBlueSolid"
        ),

        [sty.root__colors_lightCoralSolid]: hasVariant(
          variants,
          "colors",
          "lightCoralSolid"
        ),

        [sty.root__colors_lightCyanSolid]: hasVariant(
          variants,
          "colors",
          "lightCyanSolid"
        ),

        [sty.root__colors_lightGraySolid]: hasVariant(
          variants,
          "colors",
          "lightGraySolid"
        ),

        [sty.root__colors_lightOrangeSolid]: hasVariant(
          variants,
          "colors",
          "lightOrangeSolid"
        ),

        [sty.root__colors_lightPinkSolid]: hasVariant(
          variants,
          "colors",
          "lightPinkSolid"
        ),

        [sty.root__colors_lightPurpleSolid]: hasVariant(
          variants,
          "colors",
          "lightPurpleSolid"
        ),

        [sty.root__colors_lightYellowSolid]: hasVariant(
          variants,
          "colors",
          "lightYellowSolid"
        ),

        [sty.root__colors_orange]: hasVariant(variants, "colors", "orange"),
        [sty.root__colors_pink]: hasVariant(variants, "colors", "pink"),
        [sty.root__colors_purple]: hasVariant(variants, "colors", "purple"),
        [sty.root__colors_red]: hasVariant(variants, "colors", "red"),
        [sty.root__colors_teal]: hasVariant(variants, "colors", "teal"),
        [sty.root__colors_white]: hasVariant(variants, "colors", "white"),
        [sty.root__colors_yellow]: hasVariant(variants, "colors", "yellow"),
        [sty.root__shape_circle]: hasVariant(variants, "shape", "circle")
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Icon5Icon
            className={classNames(defaultcss.all, sty.svg__eHrhH)}
            role={"img"}
          />
        ),

        value: args.children
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicGraphicIcon__ArgProps,
      internalVariantPropNames: PlasmicGraphicIcon__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicGraphicIcon__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGraphicIcon";
  } else {
    func.displayName = `PlasmicGraphicIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicGraphicIcon = Object.assign(
  // Top-level PlasmicGraphicIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicGraphicIcon
    internalVariantProps: PlasmicGraphicIcon__VariantProps,
    internalArgProps: PlasmicGraphicIcon__ArgProps
  }
);

export default PlasmicGraphicIcon;
/* prettier-ignore-end */
