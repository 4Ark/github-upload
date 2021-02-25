import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from './rootReducer'

type User = {
    name: string,
    surname: string
};

type UsersState = {
    users: User[]
};

let initialState: UsersState = {
    users: []
};

export const fetchUsers = () : ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    dispatch(addUsers(users));
}

const usersSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        addUsers(state: UsersState, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },
    },
});

export const {
    addUsers
} = usersSlice.actions;

export default usersSlice.reducer;

