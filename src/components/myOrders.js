import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { getOrderByUser, getOrderById, requestOrderDetail } from "../actions";
import { StoreContext } from "../store";

export default function myOrder(){
  return(
    <h2 style={{ color: 'white' }}>My Orders</h2>
  );
};
