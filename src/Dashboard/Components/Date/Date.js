import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-semibold text-[#5e6164]">Dashboard</h1>
      </div>
      <div>
        <p className="text-sm border p-1 text-[#5e6164] border-gray-300">
          {date.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default DateTime;
