type BUS = "BUS";
type SUBWAY = "SUBWAY";

interface InputData {
  direction: number;
  station: string;
  id: number;
}

interface BusData extends Partial<InputData> {
  state: BUS;
}

interface SubwayData extends Partial<InputData> {
  state: SUBWAY;
}

export type { BusData, SubwayData };
