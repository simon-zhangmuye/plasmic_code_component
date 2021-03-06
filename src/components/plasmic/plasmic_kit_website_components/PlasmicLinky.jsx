// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: EDH0JqEGKc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { ThemeContext } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicLinky.module.css"; // plasmic-import: EDH0JqEGKc/css

export const PlasmicLinky__VariantProps = new Array("style", "leftAligned");

export const PlasmicLinky__ArgProps = new Array("children", "link");

function PlasmicLinky__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext)
  });

  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        ),

        [sty.root__leftAligned]: hasVariant(
          variants,
          "leftAligned",
          "leftAligned"
        ),

        [sty.root__style_lightCyan]: hasVariant(variants, "style", "lightCyan"),
        [sty.root__style_lightGray]: hasVariant(variants, "style", "lightGray"),
        [sty.root__style_noPadding]: hasVariant(variants, "style", "noPadding"),
        [sty.root__style_purpleSolid]: hasVariant(
          variants,
          "style",
          "purpleSolid"
        ),

        [sty.root__style_small]: hasVariant(variants, "style", "small"),
        [sty.root__style_small_style_lightGray]:
          hasVariant(variants, "style", "small") &&
          hasVariant(variants, "style", "lightGray"),
        [sty.root__style_solidCyan]: hasVariant(variants, "style", "solidCyan")
      })}
      href={args.link !== undefined ? args.link : "#"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Link",
        value: args.children,
        className: classNames(sty.slotChildren, {
          [sty.slotChildren__global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),

          [sty.slotChildren__style_lightCyan]: hasVariant(
            variants,
            "style",
            "lightCyan"
          ),

          [sty.slotChildren__style_noPadding]: hasVariant(
            variants,
            "style",
            "noPadding"
          ),

          [sty.slotChildren__style_purpleSolid]: hasVariant(
            variants,
            "style",
            "purpleSolid"
          ),

          [sty.slotChildren__style_solidCyan]: hasVariant(
            variants,
            "style",
            "solidCyan"
          )
        })
      })}
    </a>
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
      internalArgPropNames: PlasmicLinky__ArgProps,
      internalVariantPropNames: PlasmicLinky__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicLinky__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinky";
  } else {
    func.displayName = `PlasmicLinky.${nodeName}`;
  }
  return func;
}

export const PlasmicLinky = Object.assign(
  // Top-level PlasmicLinky renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLinky
    internalVariantProps: PlasmicLinky__VariantProps,
    internalArgProps: PlasmicLinky__ArgProps
  }
);

export default PlasmicLinky;
/* prettier-ignore-end */
