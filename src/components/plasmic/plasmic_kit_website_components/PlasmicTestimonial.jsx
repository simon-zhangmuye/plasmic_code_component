// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: E_l1hqcHcA
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
import * as sty from "./PlasmicTestimonial.module.css"; // plasmic-import: E_l1hqcHcA/css
import image32RtBuhLfpe from "./images/image32.png"; // plasmic-import: RtBuhLfpe/picture

export const PlasmicTestimonial__VariantProps = new Array("noLink");

export const PlasmicTestimonial__ArgProps = new Array(
  "quote",
  "name",
  "title",
  "company",
  "dest",
  "children"
);

function PlasmicTestimonial__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__noLink]: hasVariant(variants, "noLink", "noLink")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__mSr9Y)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "This product is amazing.",
          value: args.quote,
          className: classNames(sty.slotQuote)
        })}
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__h7NCt)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__cXRqA)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__u5YiU)}
                role={"img"}
                src={image32RtBuhLfpe}
              />
            ),

            value: args.children
          })}

          <div className={classNames(defaultcss.all, sty.box__u6Jz3)}>
            <div
              className={classNames(defaultcss.all, sty.box__sIeN, {
                [sty.box__noLink__sIeN5TZr6]: hasVariant(
                  variants,
                  "noLink",
                  "noLink"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Jane Doe",
                value: args.name,
                className: classNames(sty.slotName, {
                  [sty.slotName__noLink]: hasVariant(
                    variants,
                    "noLink",
                    "noLink"
                  )
                })
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.box___7Mprr)}>
              {p.renderPlasmicSlot({
                defaultContents: "Product Designer",
                value: args.title,
                className: classNames(sty.slotTitle)
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.box__nkMqq)}>
              {p.renderPlasmicSlot({
                defaultContents: "Some Company",
                value: args.company,
                className: classNames(sty.slotCompany)
              })}
            </div>
          </div>
        </p.Stack>
      </div>
    </p.Stack>
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
      internalArgPropNames: PlasmicTestimonial__ArgProps,
      internalVariantPropNames: PlasmicTestimonial__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */
