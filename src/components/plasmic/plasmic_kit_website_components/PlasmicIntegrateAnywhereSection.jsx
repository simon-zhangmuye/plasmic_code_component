// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: dxALvsaixcT
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ValuePropSection from "../../ValuePropSection"; // plasmic-import: 6Zq5_xjO9F/component
import SmallValuePropCard from "../../SmallValuePropCard"; // plasmic-import: ZsmzGgkZw2/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import Linky from "../../Linky"; // plasmic-import: EDH0JqEGKc/component
import { ThemeContext } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k7xdGnvUtPZ_s/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as sty from "./PlasmicIntegrateAnywhereSection.module.css"; // plasmic-import: dxALvsaixcT/css
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: YhhYiXTtXT/icon
import Icon32Icon from "./icons/PlasmicIcon__Icon32"; // plasmic-import: V9OFkmlcnz/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 7p8MViVJAB/icon
import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: Qm3zx5PVC/icon
import image7RU1GD3ENw from "./images/image7.svg"; // plasmic-import: rU1g-d3eNw/picture

export const PlasmicIntegrateAnywhereSection__VariantProps = new Array(
  "hideModes"
);

export const PlasmicIntegrateAnywhereSection__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicIntegrateAnywhereSection__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext),
    screen: useScreenVariants()
  });

  return (
    <ValuePropSection
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      actionButton={null}
      backgroundColor={"blue2"}
      backgroundImage={
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          role={"img"}
          src={image7RU1GD3ENw}
        />
      }
      className={classNames("__wab_instance", sty.root, {
        [sty.root__hideModes]: hasVariant(variants, "hideModes", "hideModes")
      })}
      description={null}
      extraSlot={
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__wmfmL)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__b1B5L, {
              [sty.box__hideModes__b1B5L8QqyZ]: hasVariant(
                variants,
                "hideModes",
                "hideModes"
              )
            })}
          >
            <SmallValuePropCard
              actionButton={null}
              className={classNames(
                "__wab_instance",
                sty.smallValuePropCard___5OEq2
              )}
              description={
                "JAMstack sites, ecommerce stores, mobile PWAs—bring Plasmic to any app."
              }
              followupLink={
                false ? (
                  <Linky
                    className={classNames("__wab_instance", sty.linky__rrxnW)}
                    link={
                      "https://studio.plasmic.app/?starters=general,site-builder"
                    }
                    style={["noPadding"]}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__npbY
                      )}
                    >
                      {"Browse starter projects ->"}
                    </div>
                  </Linky>
                ) : null
              }
              icon={
                <GraphicIcon
                  className={classNames(
                    "__wab_instance",
                    sty.graphicIcon__aESkc
                  )}
                  colors={"lightPurpleSolid"}
                >
                  <Icon20Icon
                    className={classNames(defaultcss.all, sty.svg__yIpf5)}
                    role={"img"}
                  />
                </GraphicIcon>
              }
              ltr={
                hasVariant(globalVariants, "screen", "mobilePortrait")
                  ? "ltr"
                  : undefined
              }
              showcaseImage={null}
            >
              {"The universal builder."}
            </SmallValuePropCard>

            <SmallValuePropCard
              actionButton={null}
              className={classNames(
                "__wab_instance",
                sty.smallValuePropCard__w9JMy,
                {
                  [sty.smallValuePropCard__hideModes__w9JMy8QqyZ]: hasVariant(
                    variants,
                    "hideModes",
                    "hideModes"
                  )
                }
              )}
              description={p.renderPlasmicSlot({
                defaultContents:
                  "Freedom to pick any hosting, CMS, framework, analytics—the full stack.",
                value: args.children
              })}
              followupLink={
                false ? (
                  <Linky
                    className={classNames("__wab_instance", sty.linky___36ZV)}
                    link={
                      "https://studio.plasmic.app/?starters=general,site-builder"
                    }
                    style={["noPadding"]}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__mKKz0
                      )}
                    >
                      {"Browse starter projects ->"}
                    </div>
                  </Linky>
                ) : null
              }
              icon={
                <GraphicIcon
                  className={classNames(
                    "__wab_instance",
                    sty.graphicIcon__kyAlF
                  )}
                  colors={"lightPurpleSolid"}
                >
                  <Icon32Icon
                    className={classNames(defaultcss.all, sty.svg__hfGeZ)}
                    role={"img"}
                  />
                </GraphicIcon>
              }
              ltr={
                hasVariant(globalVariants, "screen", "mobilePortrait")
                  ? "ltr"
                  : undefined
              }
              showcaseImage={null}
            >
              {"Works seamlessly with your stack."}
            </SmallValuePropCard>

            <SmallValuePropCard
              actionButton={null}
              className={classNames(
                "__wab_instance",
                sty.smallValuePropCard__cDi7
              )}
              description={
                "Start with a single component, section, or page. Simply import and render from your code."
              }
              followupLink={
                false ? (
                  <Linky
                    className={classNames("__wab_instance", sty.linky__mqtUf)}
                    link={
                      "https://studio.plasmic.app/?starters=general,site-builder"
                    }
                    style={["noPadding"]}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__jx66M
                      )}
                    >
                      {"Browse starter projects ->"}
                    </div>
                  </Linky>
                ) : null
              }
              icon={
                <GraphicIcon
                  className={classNames(
                    "__wab_instance",
                    sty.graphicIcon__oDdo2
                  )}
                  colors={"lightPurpleSolid"}
                >
                  <Icon6Icon
                    className={classNames(defaultcss.all, sty.svg__dGIjq)}
                    role={"img"}
                  />
                </GraphicIcon>
              }
              ltr={
                hasVariant(globalVariants, "screen", "mobilePortrait")
                  ? "ltr"
                  : undefined
              }
              showcaseImage={null}
            >
              {"Adopt incrementally."}
            </SmallValuePropCard>

            {(hasVariant(variants, "hideModes", "hideModes") ? false : true) ? (
              <SmallValuePropCard
                actionButton={null}
                className={classNames(
                  "__wab_instance",
                  sty.smallValuePropCard__piE6Y,
                  {
                    [sty.smallValuePropCard__hideModes__piE6Y8QqyZ]: hasVariant(
                      variants,
                      "hideModes",
                      "hideModes"
                    )
                  }
                )}
                description={p.renderPlasmicSlot({
                  defaultContents:
                    "Generate React code, or load content over an API to use Plasmic as a visual CMS.",
                  value: args.slot
                })}
                followupLink={
                  false ? (
                    <Linky
                      className={classNames("__wab_instance", sty.linky__hCj1)}
                      link={
                        "https://studio.plasmic.app/?starters=general,site-builder"
                      }
                      style={["noPadding"]}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__ssfvJ
                        )}
                      >
                        {"Browse starter projects ->"}
                      </div>
                    </Linky>
                  ) : null
                }
                icon={
                  <GraphicIcon
                    className={classNames(
                      "__wab_instance",
                      sty.graphicIcon__wjgud
                    )}
                    colors={"lightPurpleSolid"}
                  >
                    <Icon24Icon
                      className={classNames(defaultcss.all, sty.svg__eqwi9)}
                      role={"img"}
                    />
                  </GraphicIcon>
                }
                ltr={
                  hasVariant(globalVariants, "screen", "mobilePortrait")
                    ? "ltr"
                    : undefined
                }
                showcaseImage={null}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Flexible integration modes.",
                  value: args.slot2
                })}
              </SmallValuePropCard>
            ) : null}
          </p.Stack>
        </p.Stack>
      }
      extras={["withExtraSlot1", "centerAligned", "withExtraSlot2"]}
      header={null}
      icon={null}
      slot62={null}
      title={
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__dq3FL,
            {
              [sty.box__global_theme_altHeadlineFont__dq3FLfQkvX]: hasVariant(
                globalVariants,
                "theme",
                "altHeadlineFont"
              ),

              [sty.box__hideModes__dq3FL8QqyZ]: hasVariant(
                variants,
                "hideModes",
                "hideModes"
              )
            }
          )}
        >
          {"Integrate and deploy anywhere."}
        </div>
      }
    />
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIntegrateAnywhereSection__ArgProps,
      internalVariantPropNames: PlasmicIntegrateAnywhereSection__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicIntegrateAnywhereSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIntegrateAnywhereSection";
  } else {
    func.displayName = `PlasmicIntegrateAnywhereSection.${nodeName}`;
  }
  return func;
}

export const PlasmicIntegrateAnywhereSection = Object.assign(
  // Top-level PlasmicIntegrateAnywhereSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicIntegrateAnywhereSection
    internalVariantProps: PlasmicIntegrateAnywhereSection__VariantProps,
    internalArgProps: PlasmicIntegrateAnywhereSection__ArgProps
  }
);

export default PlasmicIntegrateAnywhereSection;
/* prettier-ignore-end */
