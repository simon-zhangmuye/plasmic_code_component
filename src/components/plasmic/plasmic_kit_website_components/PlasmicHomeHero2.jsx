// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: JWaK283jnQd
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonLink from "../../ButtonLink"; // plasmic-import: jzdXOPDUzV/component
import { ThemeContext } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicHomeHero2.module.css"; // plasmic-import: JWaK283jnQd/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon
import websiteHeroImageTinypngMdyXn0Auz from "./images/websiteHeroImageTinypng.png"; // plasmic-import: MdyXN0Auz/picture

export const PlasmicHomeHero2__VariantProps = new Array();

export const PlasmicHomeHero2__ArgProps = new Array("children", "slot");

function PlasmicHomeHero2__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext)
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__global_theme_altHeadlineFont]: hasVariant(
          globalVariants,
          "theme",
          "altHeadlineFont"
        ),

        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        )
      })}
    >
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(defaultcss.all, sty.container)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ld5Xo)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__hXsHa)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__oTKn)}
            >
              <div
                className={classNames(defaultcss.all, sty.box__i24L, {
                  [sty.box__global_theme_altHeadlineFont__i24LFQkvX]:
                    hasVariant(globalVariants, "theme", "altHeadlineFont"),
                  [sty.box__global_theme_dark__i24LH5AZc]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                })}
              >
                <div
                  className={classNames(defaultcss.all, sty.box__jWzwi, {
                    [sty.box__global_theme_altHeadlineFont__jWzwifQkvX]:
                      hasVariant(globalVariants, "theme", "altHeadlineFont"),
                    [sty.box__global_theme_dark__jWzwih5AZc]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <span>
                        <React.Fragment>
                          {"Build front-ends ⚡️ "}
                        </React.Fragment>
                        <span style={{ fontStyle: "italic" }}>{"fast"}</span>
                        <React.Fragment>
                          {".\nFor your own codebase."}
                        </React.Fragment>
                      </span>
                    ),

                    value: args.children,
                    className: classNames(sty.slotChildren, {
                      [sty.slotChildren__global_theme_altHeadlineFont]:
                        hasVariant(globalVariants, "theme", "altHeadlineFont"),
                      [sty.slotChildren__global_theme_dark]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    })
                  })}
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__hR0M9)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <span>
                      <React.Fragment>
                        {
                          "Visually create everything from responsive pages to complex components. Integrate with any React stack, and "
                        }
                      </React.Fragment>
                      <span style={{ fontWeight: 700 }}>
                        {"empower anyone to ship"}
                      </span>
                      <React.Fragment>{"."}</React.Fragment>
                    </span>
                  ),

                  value: args.slot,
                  className: classNames(sty.slotSlot)
                })}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__hr56W)}
            >
              <a
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(defaultcss.all, sty.link)}
                href={"https://studio.plasmic.app/"}
              >
                <ButtonLink
                  data-plasmic-name={"buttonLink"}
                  data-plasmic-override={overrides.buttonLink}
                  href={"https://plasmic.app/signup"}
                  icon={
                    <IconIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(defaultcss.all, sty.svg)}
                      role={"img"}
                    />
                  }
                  label={"Try Plasmic for free"}
                  type={["purpleSolid"]}
                />
              </a>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </div>

      <div
        className={classNames(defaultcss.all, sty.box__hbiPc, {
          [sty.box__global_theme_dark__hbiPch5AZc]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        })}
      >
        <div className={classNames(defaultcss.all, sty.box__opfV)}>
          <div className={classNames(defaultcss.all, sty.box___5YW42)}>
            <img
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(defaultcss.img, sty.img)}
              role={"img"}
              src={websiteHeroImageTinypngMdyXn0Auz}
            />

            {false ? (
              <div
                data-plasmic-name={"dock"}
                data-plasmic-override={overrides.dock}
                className={classNames(defaultcss.all, sty.dock)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "container", "link", "buttonLink", "svg", "img", "dock"],
  container: ["container", "link", "buttonLink", "svg"],
  link: ["link", "buttonLink", "svg"],
  buttonLink: ["buttonLink", "svg"],
  svg: ["svg"],
  img: ["img"],
  dock: ["dock"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeHero2__ArgProps,
      internalVariantPropNames: PlasmicHomeHero2__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomeHero2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeHero2";
  } else {
    func.displayName = `PlasmicHomeHero2.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeHero2 = Object.assign(
  // Top-level PlasmicHomeHero2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    link: makeNodeComponent("link"),
    buttonLink: makeNodeComponent("buttonLink"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    dock: makeNodeComponent("dock"),
    // Metadata about props expected for PlasmicHomeHero2
    internalVariantProps: PlasmicHomeHero2__VariantProps,
    internalArgProps: PlasmicHomeHero2__ArgProps
  }
);

export default PlasmicHomeHero2;
/* prettier-ignore-end */
