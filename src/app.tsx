import React, { useEffect, useState } from "react";
import { IResponseAPI } from "./interfaces";
import clientAxios from "./api";

const App = () => {
  const [data, setData] = useState<IResponseAPI>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await clientAxios.get<IResponseAPI>("");
      setData(result.data);
    };

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>UK Energy Generation Data</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {data.data.generationmix.map((item) => (
          <div
            style={{
              display: "flex",
              padding: "1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "200px",
              textAlign: "center",
              flexDirection: "column",
            }}
            key={item.fuel}
          >
            <h2>{item.fuel}</h2>
            <p>{item.perc}%</p>
          </div>
        ))}
      </div>
    </>
  );
};

export { App };
