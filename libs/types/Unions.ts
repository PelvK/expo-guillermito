import { Position } from "./Position";
import { Zone } from "./Zone";

export type PositionUnionZone = {
    zone: Zone;
    positions: Position[];
}