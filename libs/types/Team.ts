import { Category } from "./Category"
import { Zone } from "./Zone"

export type Team = {
    id: number,
    shield: string,
    name: string,
    category: Category,
    zone: Zone,
}