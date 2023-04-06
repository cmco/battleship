import { Dispatch, SetStateAction } from 'react';

type ShipNames =
  | 'carrier'
  | 'cruiser'
  | 'battleship'
  | 'destroyer'
  | 'submarine';

export interface ShipInfo {
  size: number;
  count: number;
}

interface ShipTypes {
  carrier: ShipInfo;
  cruiser: ShipInfo;
  battleship: ShipInfo;
  destroyer: ShipInfo;
  submarine: ShipInfo;
}

type Coordinates = [number, number];

export interface Layout {
  ship: ShipNames;
  positions: Coordinates[];
}

export interface apiData {
  shipTypes: ShipTypes;
  layout: Layout[];
}

export interface ShipStateObject {
  ship: string;
  count: number;
  size: number;
}

export type ShipsState = Record<string, ShipStateObject>;

export interface CellProps {
  hasShip: boolean;
  id?: string;
  setShipsState?: Dispatch<SetStateAction<ShipsState>>;
  setTotalHits?: Dispatch<SetStateAction<number>>;
}

export interface StyledCellProps {
  isMarked: boolean;
}

export interface ShipTracker {
  size: number;
  hits: number;
}

export interface ShipsTrackerObject {
  carrier: ShipTracker;
  battleship: ShipTracker;
  cruiser: ShipTracker;
  submarine: ShipTracker;
  destroyer: ShipTracker;
}

export interface StyledPlayerPoints {
  playerOne?: boolean;
}

export interface StyledTrackerContainerProps {
  columns: number;
}

export interface PlayerPointsProps {
  totalHits: number;
  playerOne?: boolean;
}

export interface TrackerProps {
  ship: string;
  size: number;
  count: number;
}
