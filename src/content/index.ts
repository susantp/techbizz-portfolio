import { aboutPage } from "./about/page";
import { layout } from "./layout";
import { page } from "./page";

export const content = { layout, page, about: { page: aboutPage } } as const;
