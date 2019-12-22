import React, { useContext } from "react";
import AlertContext from "../../../context/alert/alertContext";
import {Alert as AntAlert} from 'antd';

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map( alert => (
      <AntAlert key={alert.id} message={" " + alert.msg} type={alert.type}>

      </AntAlert>
    ))
  );
}

export default Alert;
