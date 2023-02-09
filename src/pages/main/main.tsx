import React, {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { fetchBusData, fetchSubwayData } from "../../api/axios";
import busIdMap from "../../data/busIdData";
import { BUS, SUBWAY } from "../../types/types";

const BUSID_MAP = busIdMap();

const Main = () => {
  const [state, setState] = useState<string | null>(null);
  const [stations, setStations] = useState([]);
  const idRef = useRef<HTMLInputElement>(null);

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
    setStations([]);
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
        {state != null && (
          <>
            {state == BUS ? (
              <input type="text" placeholder="버스 번호" ref={idRef} />
            ) : (
              <select>
                <option value="null">호선 선택</option>
                <option value="1">1호선</option>
                <option value="2">2호선</option>
                <option value="3">3호선</option>
                <option value="4">4호선</option>
                <option value="5">5호선</option>
                <option value="6">6호선</option>
                <option value="7">7호선</option>
                <option value="8">8호선</option>
                <option value="9">9호선</option>
              </select>
            )}
            <select>
              <option value="null">정류장 선택</option>
              {stations.map((station, key) => {
                return (
                  <option value={station} key={key}>
                    {station}
                  </option>
                );
              })}
            </select>
          </>
        )}
        {stations.length > 0 && <button>확인하기</button>}
      </form>
    </>
  );
};

export default Main;
