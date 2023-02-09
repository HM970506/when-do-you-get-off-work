import React, {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { fetchBusData, fetchSubwayData } from "../../api/axios";
import busIdMap from "../../data/busIdData";
import { BUS, BusData, SUBWAY, SubwayData } from "../../types/types";

const BUSID_MAP = busIdMap();

const Main = () => {
  const [state, setState] = useState<string | null>(null);
  const [stations, setStations] = useState(null);
  const busNumberRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputData = {
      state: state,
      direction: 1,
      station: "",
      id: 1,
    };

    console.log();
  };

  const radiobuttonHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const transpor = e.target.value;
    setState(transpor);

    if (transpor == BUS && busNumberRef.current) {
      if (busNumberRef.current.value != null) {
        const data = await fetchBusData(
          BUSID_MAP.get(busNumberRef.current.value)
        );
      } else {
      }
    } else if (transpor == SUBWAY) {
      const data = await fetchSubwayData(1);
    }
  };

  return (
    <>
      <h1>지금 퇴근하면..</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>버스</label>
          <input
            type="radio"
            name="transportation"
            value={BUS}
            onChange={radiobuttonHandler}
          />
          <input type="text" placeholder="버스번호" ref={busNumberRef} />
        </div>
        <div>
          <label>지하철</label>
          <input
            type="radio"
            name="transportation"
            value={SUBWAY}
            onChange={radiobuttonHandler}
          />
        </div>
        {state != null && <div>정거장 목록: {state}</div>}
        {stations != null && <button>확인하기</button>}
      </form>
    </>
  );
};

export default Main;
