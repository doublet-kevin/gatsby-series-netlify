import { Platform } from "./platform";

export type Show = {
    id: number,
    slug: string,
    title: string,
    description: string,
    seasons: number,
    genres: string[],
    platforms: Platform,
}