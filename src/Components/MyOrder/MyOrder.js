import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import "./MyOrder.css";
import useAuth from "../../hooks/useAuth";
import Header from "../Home/Header/Header";
import swal from "sweetalert";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://trip-travel.vercel.app/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://trip-travel.vercel.app/places/${id}`)
          .then((res) => {
            swal("Good job!", "Successfuly deleted Your order", "success");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          });
      } else {
        swal("Opps!", "Your Order isn't deleted!", "warning");
      }
    });
  };
  return (
    <>
      <Header></Header>
      <div className="myOrder">
        <Container>
          <h3 className="mb-4">My Orders</h3>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Order Date</th>
                <th>Address</th>
                <th>Place Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            {orders?.map((order, index) => (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.date}</td>
                  <td>{order.address}</td>
                  <td>{order.orderName}</td>
                  <td>{order.price}</td>
                  {order.status === "Pending" ? (
                    <td className="text-danger">
                      {order.status}{" "}
                      <Button
                        onClick={() => handleDelete(order._id)}
                        variant="danger"
                        size="sm"
                        className="ms-3"
                      >
                        Delete
                      </Button>
                    </td>
                  ) : (
                    <td className="text-success">
                      {order.status}{" "}
                      <Button
                        onClick={() => handleDelete(order._id)}
                        variant="danger"
                        size="sm"
                        className="ms-3"
                      >
                        Delete
                      </Button>
                    </td>
                  )}
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
      </div>
    </>
  );
};

export default MyOrder;
