import axios from "axios";
import busIdMap from "../data/busIdData";
import { transportState } from "../types/types";
const BUS_LOCATION_URL = "http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid";
const BUS_DATA_URL =
  "http://ws.bus.go.kr/api/rest/busRouteInfo/getStaionByRoute";
const SUBWAY_URL = "";
const SECRET_KEY = "";

const fetchBusLocationData = async (inputData: transportState) => {
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

const fetchBusData = async (busid: number) => {
  axios
    .get(BUS_DATA_URL, {
      params: {
        ServiceKey: SECRET_KEY,
        busRoutedId: busid,
      },
    })
    .then((response) => console.log("busdata: ", response))
    .catch((err) => console.log("error: ", err));
};

const fetchSubwayLocationData = async (inputData: transportState) => {};
const fetchSubwayData = async (subwayid: number) => {};

export {
  fetchBusLocationData,
  fetchBusData,
  fetchSubwayLocationData,
  fetchSubwayData,
};
