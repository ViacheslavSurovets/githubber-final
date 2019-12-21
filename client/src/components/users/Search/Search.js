import React, { useState, useContext, Fragment } from "react";
import GitContext from "../../../context/git/gitContext";
import AlertContext from "../../../context/alert/alertContext";
import {  Form, Input, Button } from 'antd';

const Search = () => {
  const gitContext = useContext(GitContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please write something...", "light");
    } else {
      gitContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="text"
          placeholder="Search for ViacheslavSurovets or someone else..."
          value={text}
          onChange={onChange}
          style={{margin:" 0 0 1em 0"}}
        />
        <Button type="primary"
          htmlType="submit"
          block>
          Search
        </Button>
      </Form>
      {gitContext.users.length > 0  && (
        <Button  onClick={gitContext.clearUsers} block>
          Clear
        </Button>
      )}
    </Fragment>
  );
};

export default Search;

