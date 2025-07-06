import { Zone } from "./Zone"

export type Category = {
    id: number,
    description: string,
    zones?: Zone[],
    limitCup?: number,
}