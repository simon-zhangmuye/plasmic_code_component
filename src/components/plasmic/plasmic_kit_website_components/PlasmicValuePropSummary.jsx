// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 2LcO8okO6S
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ValuePropCard from "../../ValuePropCard"; // plasmic-import: qSazSuRq3D/component
import FirstStepLink from "../../FirstStepLink"; // plasmic-import: ncmAa8DpLu/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k7xdGnvUtPZ_s/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicValuePropSummary.module.css"; // plasmic-import: 2LcO8okO6S/css
import image13CcufmIpOc from "./images/image13.png"; // plasmic-import: ccufmIpOC/picture
import image385XxeDTi2 from "./images/image38.png"; // plasmic-import: 5xxeDTi_2/picture
import image36DHsf7IqGn from "./images/image36.png"; // plasmic-import: dHsf7IqGN/picture

export const PlasmicValuePropSummary__VariantProps = new Array();

export const PlasmicValuePropSummary__ArgProps = new Array();

function PlasmicValuePropSummary__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
      <ValuePropCard
        className={classNames("__wab_instance", sty.valuePropCard___66YFw)}
        descrip={"Visually build pages and components."}
        img={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__eolxh)}
            role={"img"}
            src={image13CcufmIpOc}
          />
        }
      />

      <ValuePropCard
        className={classNames("__wab_instance", sty.valuePropCard__xE1Y3)}
        img={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__mxzx8)}
            role={"img"}
            src={image385XxeDTi2}
          />
        }
        num={"2"}
      />

      <ValuePropCard
        className={classNames("__wab_instance", sty.valuePropCard__nKUw4)}
        descrip={"See it in production."}
        img={
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__qyWyu)}
            role={"img"}
            src={image36DHsf7IqGn}
          />
        }
        num={"3"}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(defaultcss.all, sty.columns)}
      >
        <div className={classNames(defaultcss.all, sty.column__mU2T)}>
          <FirstStepLink
            className={classNames("__wab_instance", sty.firstStepLink__dxCen)}
            destination={"/learn/intro"}
          >
            {"Intro to Plasmic ???"}
          </FirstStepLink>
        </div>

        <div className={classNames(defaultcss.all, sty.column__ywcKg)}>
          <FirstStepLink
            className={classNames("__wab_instance", sty.firstStepLink__dqNhe)}
            destination={"/learn/quickstart"}
            slot={
              "Integrate Plasmic into a React codebase in a couple minutes."
            }
          >
            {"Developer Quickstart ???"}
          </FirstStepLink>
        </div>

        <div className={classNames(defaultcss.all, sty.column__vyV8M)}>
          <FirstStepLink
            className={classNames("__wab_instance", sty.firstStepLink__xXlC)}
            destination={"https://studio.plasmic.app/starters/game"}
            slot={"Play Plasmic Levels to learn the basics."}
          >
            {"Learn Plasmic Studio ???"}
          </FirstStepLink>
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicValuePropSummary__ArgProps,
      internalVariantPropNames: PlasmicValuePropSummary__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicValuePropSummary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuePropSummary";
  } else {
    func.displayName = `PlasmicValuePropSummary.${nodeName}`;
  }
  return func;
}

export const PlasmicValuePropSummary = Object.assign(
  // Top-level PlasmicValuePropSummary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    // Metadata about props expected for PlasmicValuePropSummary
    internalVariantProps: PlasmicValuePropSummary__VariantProps,
    internalArgProps: PlasmicValuePropSummary__ArgProps
  }
);

export default PlasmicValuePropSummary;
/* prettier-ignore-end */
