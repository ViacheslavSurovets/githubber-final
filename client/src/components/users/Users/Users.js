import React, {useContext} from "react";
import UserItem from "../UserItem/UserItem";
import GitContext from "../../../context/git/gitContext";
import {Spin} from 'antd';
import './Users.css'

const Users = () => {
    const gitContext = useContext(GitContext);

    const {loading, users} = gitContext;
    if (loading) {
        return <Spin tip="loading..." size="large" style={{  display: 'block', margin: "3em" }}/>;
    } else {
        return (
            <div className="grid-3 m-1">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>

        );
    }
};


export default Users;
