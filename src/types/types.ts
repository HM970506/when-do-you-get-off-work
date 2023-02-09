const BUS = "BUS";
const SUBWAY = "SUBWAY";

type BUS_TYPE = "BUS";
type SUBWAY_TYPE = "SUBWAY";

type transportType = BUS_TYPE | SUBWAY_TYPE | null;

interface transportState {
  state: transportType;
  id: number | null;
  direction: number | null;
  stations: string[];
}

export type { BUS_TYPE, SUBWAY_TYPE, transportState, transportType };
export { BUS, SUBWAY };
