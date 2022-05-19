import { GroupType } from "./types";

export interface ContentType {
    type: string,
    maxLen: number | GroupType,
    required: boolean | GroupType
}