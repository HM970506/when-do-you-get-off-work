import axios from "axios";
import busIdMap from "../data/busIdData";
import { BusData, SubwayData } from "../types/types";

const BUS_LOCATION_URL = "http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid";
const BUS_DATA_URL =
  "http://ws.bus.go.kr/api/rest/busRouteInfo/getStaionByRoute";
const SUBWAY_URL = "";
const SECRET_KEY = "";

const fetchBusLocationData = async (inputData: BusData) => {
  axios
    .get(BUS_LOCATION_URL, {
      params: {
        ServiceKey: SECRET_KEY,
        busRoutedId: inputData.id,
      },
    })
    .then((response) => console.log("buslocation: ", response))
    .catch((err) => console.log("error: ", err));
};

const fetchBusData = async (inputData: BusData) => {
  axios
    .get(BUS_DATA_URL, {
      params: {
        ServiceKey: SECRET_KEY,
        busRoutedId: inputData.id,
      },
    })
    .then((response) => console.log("busdata: ", response))
    .catch((err) => console.log("error: ", err));
};

const fetchSubwayData = async (inputData: SubwayData) => {};

export { fetchBusLocationData, fetchBusData, fetchSubwayData };
