import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBusData, fetchSubwayData } from "../../api/axios";
import busIdMap from "../../data/busIdData";
import { transportActions } from "../../store/transport";
import { BUS, SUBWAY, transportState, transportType } from "../../types/types";

interface reduxStateType {
  transport: transportState;
}

const BUSID_MAP = busIdMap();

const Main = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: reduxStateType) => state.transport);
  const [state, setState] = useState(reduxState);

  const idRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("reduxState:", reduxState);
    setState(reduxState);
  }, [reduxState]);

  useEffect(() => {}, [state]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //라디오버튼 선택할 때마다 리덕스 값 리셋
  const radiobuttonHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const transport = e.target.value as transportType; //타입 단언
    dispatch(transportActions.stateChange({ state: transport }));
  };

  //호선이 선택되면 해당 호선 정류장 리스트를 가져와서 리덕스 값 수정
  const stationDropboxHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;

    if (id) {
      const response = await (state.state === BUS
        ? fetchBusData(parseInt(BUSID_MAP.get(id)))
        : fetchSubwayData(parseInt(id)));
      console.log(response);
    }

    dispatch(transportActions.setStations({ id: id, stations: [] }));
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

        {state.state && (
          <>
            {state.state === BUS && (
              <input type="text" placeholder="버스 번호" ref={idRef} />
            )}
            {state.state === SUBWAY && (
              <select onChange={stationDropboxHandler}>
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
              {state.stations.map((station, key) => {
                return (
                  <option value={station} key={key}>
                    {station}
                  </option>
                );
              })}
            </select>
          </>
        )}
        {state.stations && state.stations.length > 0 && (
          <button>확인하기</button>
        )}
      </form>
    </>
  );
};

export default Main;
