import React, { useEffect, useState } from "react";
import axios from "axios"; // Đảm bảo thêm dòng này

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra!", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from SQL Server</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;
