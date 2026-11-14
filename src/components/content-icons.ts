import type { layout } from "@/content/layout";
import type { page } from "@/content/page";
import { BiAnalyse, BiCartAlt } from "react-icons/bi";
import { CgPerformance, CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdDesignServices, MdEmail, MdOutlineDeveloperMode } from "react-icons/md";
import { SiAndroidstudio, SiGoogleanalytics, SiMaterialdesignicons, SiOctopusdeploy } from "react-icons/si";
import type { IconType } from "react-icons";

type HeaderItem = (typeof layout.navbar.headerInfo)[keyof typeof layout.navbar.headerInfo];
export type ContentIconId =
  | HeaderItem["icon"]
  | (typeof page.workProcess.processes)[number]["icon"]
  | (typeof page.whatWeDo.items)[number]["icon"];

export const contentIcons = {
  whatsapp: IoLogoWhatsapp,
  email: MdEmail,
  analysis: BiAnalyse,
  designing: MdDesignServices,
  development: MdOutlineDeveloperMode,
  testing: CgPerformance,
  launch: SiOctopusdeploy,
  "web-development": CgWebsite,
  "e-commerce-solution": BiCartAlt,
  "android-development": SiAndroidstudio,
  "web-designing": SiMaterialdesignicons,
  "responsive-web-design": DiResponsive,
  seo: SiGoogleanalytics,
} satisfies Record<ContentIconId, IconType>;
