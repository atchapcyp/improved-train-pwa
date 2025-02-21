import { useEffect, useState } from "react";
import { Link } from "react-router";

const Module1 = () => {
  const [dateStr, setDateStr] = useState(new Date().toString());

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setDateStr(new Date().toString());
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [dateStr]);

  return (
    <div>
      Module 1 {dateStr}
      <Link to='/'>Go to Home</Link>
    </div>
  );
};
export default Module1;
