import React, { useEffect } from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { RootState } from "./rootReducer";
import {fetchUsers} from "./counter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users } = useSelector(
    (state: RootState) => state.users
  );

  return (
    <div className="App">
      <header className="App-header">
        {
          users.map(user => <p>{user.name}, {user.surname}</p>)
        }
      </header>
    </div>
  );
}

export default App;
