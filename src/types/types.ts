const BUS = "BUS";
const SUBWAY = "SUBWAY";

type BUS_TYPE = "BUS";
type SUBWAY_TYPE = "SUBWAY";

interface InputData {
  direction: number;
  station: string;
  id: number;
}

interface BusData extends Partial<InputData> {
  state: BUS_TYPE;
}

interface SubwayData extends Partial<InputData> {
  state: SUBWAY_TYPE;
}

export type { BUS_TYPE, SUBWAY_TYPE, BusData, SubwayData };
export { BUS, SUBWAY };
