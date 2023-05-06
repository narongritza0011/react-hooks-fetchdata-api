import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState({});

  async function fetchData() {
    const res = await fetch("https://randomuser.me/api/");
    res
      .json()
      .then((res) => setUsers(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <span>{JSON.stringify(users)}</span>
      <hr />
      <p>Has error : {JSON.stringify(hasError)}</p>
    </>
  );
}

export default App;
