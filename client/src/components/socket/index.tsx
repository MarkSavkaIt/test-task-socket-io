import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000/");

const Socket = () => {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [lastPong, setLastPong] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // @ts-ignore
    socket.on("connect", () => {
      socket.emit("start");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("ticker", (res) => {
      console.log("res2 : ", res);
      setData(res);
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  return (
    <div>
      <p>Connected: {"" + isConnected}</p>
      <p>Last pong: {lastPong || "-"}</p>
      {!isConnected ? (
        <p>Can`t connect to the server</p>
      ) : (
        <div className='flex flex-wrap gap-2 justify-evenly'>
          {data.length === 0 ? (
            <p>Can`t load carda</p>
          ) : (
            data.map((ticket, index) => {
              console.log("ticket : ", ticket);
              return (
                <div
                  key={index}
                  className='my-3 shrink-0 border-2 p-2 rounded-md'
                >
                  <p>Name : {ticket.ticker}</p>
                  <p>Price : {ticket.price}</p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Socket;
