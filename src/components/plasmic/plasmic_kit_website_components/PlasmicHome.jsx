// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 5-ThUEPfFc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CommonLandingPage from "../../CommonLandingPage"; // plasmic-import: HzhMCW_ztWQ/component
import ValuePropListItem from "../../ValuePropListItem"; // plasmic-import: lJppbKgSOw/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import Divider from "../../Divider"; // plasmic-import: SQHouqji3_/component
import { ThemeContext } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: 5-ThUEPfFc/css
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: rP3WBmFG-e/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: YhhYiXTtXT/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: 5amV9exkN9/icon

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext)
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <CommonLandingPage
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames("__wab_instance", sty.root, {
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
          slot={"The visual builder for your tech stack."}
          slot2={
            "Build visual content and pages, seamlessly integrated with your codebase. Plasmic is used by some of the world's largest sites to unblock their teams, eliminate development cycles, and ship incredibly fast."
          }
          slot4={
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__uCOm1)}
            >
              <ValuePropListItem
                slot={
                  <GraphicIcon
                    className={classNames(
                      "__wab_instance",
                      sty.graphicIcon__xfjnb
                    )}
                    colors={"lightBlueSolid"}
                  >
                    <Icon23Icon
                      className={classNames(defaultcss.all, sty.svg__ehMb0)}
                      role={"img"}
                    />
                  </GraphicIcon>
                }
                slot2={"No-code autonomy."}
              >
                {
                  "Enable content owners and designers to publish pages and free-form content incredibly fast. For when CMS schemas and templates can't keep up."
                }
              </ValuePropListItem>

              <Divider
                className={classNames("__wab_instance", sty.divider__ceuHd)}
              />

              <ValuePropListItem
                slot={
                  <GraphicIcon
                    className={classNames(
                      "__wab_instance",
                      sty.graphicIcon__qqWr1
                    )}
                    colors={"lightBlueSolid"}
                  >
                    <Icon20Icon
                      className={classNames(defaultcss.all, sty.svg__ci36Q)}
                      role={"img"}
                    />
                  </GraphicIcon>
                }
                slot2={"Free up developers."}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__xMNn2
                  )}
                >
                  {
                    "Let developers focus on code, not pixel-pushing. Or use Plasmic to accelerate frontend development."
                  }
                </div>
              </ValuePropListItem>

              <Divider
                className={classNames("__wab_instance", sty.divider___6U1RW)}
              />

              <ValuePropListItem
                slot={
                  <GraphicIcon
                    className={classNames(
                      "__wab_instance",
                      sty.graphicIcon__nhLz
                    )}
                    colors={"lightBlueSolid"}
                  >
                    <Icon22Icon
                      className={classNames(defaultcss.all, sty.svg__ip2Iy)}
                      role={"img"}
                    />
                  </GraphicIcon>
                }
                slot2={"Eliminate handoffs."}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___1L40Y
                  )}
                >
                  {
                    "Keep everyone on the same page, with a single source of truth for design and production."
                  }
                </div>
              </ValuePropListItem>
            </p.Stack>
          }
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__xByYr
            )}
          >
            {"Make your website editable to the whole team."}
          </div>
        </CommonLandingPage>
      </div>
    </React.Fragment>
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
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */