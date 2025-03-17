import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [user, setUser] = useState({});
  const [seconds, setSeconds] = useState(0);

  const fetchUser = async () => {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // cleanup function: clear interval before unmount or re-run
    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <div>
      <h2>UseEffect Hook</h2>
      <p>
        useEffect is a hook in functional components to perform side effects
        after rendering, such as data fetching, subscription or manual DOM
        manipulation.
      </p>

      <br />
      <br />

      <h3>Fetched User</h3>
      <p>
        {user.first_name} {user.last_name}
      </p>

      <br />
      <br />

      <h3>Convert major lifecycle methods to useEffect and Explain.</h3>

      <br />
      <br />

      <h3>How to perform cleanup in useEffect? Explain with example.</h3>
      <p>
        You can return a cleanup function inside useEffect, which runs before
        the effect re-runs or when the component unmounts. This is useful for
        cleaning up subscriptions or event listeners.
      </p>
      {seconds}
    </div>
  );
};

export default UseEffect;
