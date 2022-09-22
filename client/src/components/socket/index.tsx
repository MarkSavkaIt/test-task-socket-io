import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "redux/useSelector";
import { io } from "socket.io-client";
import { setData } from "../../redux/data/dataSlice";

const socket = io("http://localhost:4000/");

interface IProps {}

const Socket: React.FC<IProps> = () => {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [data, setDataState] = useState<any[]>([]);
  const dispatch = useDispatch();

  const stateee = useTypedSelector((state) => state);
  console.log("stateee", stateee);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("start");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("ticker", (res) => {
      dispatch(setData(res));
      setDataState(res);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return !isConnected ? (
    <p>Can`t connect to the server</p>
  ) : (
    <div className='flex flex-wrap gap-2 my-5 justify-evenly'>
      {data.length === 0 ? (
        <p>Can`t load carda</p>
      ) : (
        data.map((ticket, index) => {
          // great case to separate card
          // but not enough code line
          return (
            <div
              key={index}
              className='my-3 cursor-pointer select-none shrink-0 border-2 p-2 rounded-md'
            >
              <p>Name : {ticket.ticker}</p>
              <p>Price : {ticket.price}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Socket;
