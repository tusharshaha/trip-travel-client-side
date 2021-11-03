import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import swal from 'sweetalert';
const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([])
    useEffect(() => {
        fetch('https://gentle-cove-60812.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [allOrder])

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover the order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://gentle-cove-60812.herokuapp.com/places/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                swal("Good job!", "Successfuly deleted Your order", "success");
                                const remaining = allOrder.filter(order => order._id !== id)
                                setAllOrder(remaining)
                            }
                        });
                } else {
                    swal("Opps!", "Order isn't deleted!", "warning");
                }
            });
    }
    const handleApprove = (id) => {
        axios.put(`https://gentle-cove-60812.herokuapp.com/places/${id}`)
            .then(res => {
                if(res.data.modifiedCount>0){
                    swal("Good job!", "Successfuly Approved", "success");
                }
                else{
                    swal("Opps!", "Order isn't Approved", "warning");
                }
            })

    }
    return (
        <>
            <Header></Header>
            <div className='pt-5'>
                <Container>
                    <h3 className='mb-4 text-center'>Manage All Order</h3>
                    <Table responsive striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Order Date</th>
                                <th>Address</th>
                                <th>Place Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        {
                            allOrder?.map((order, index) =>
                                <tbody key={index}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order.userName}</td>
                                        <td>{order.email}</td>
                                        <td>{order.date}</td>
                                        <td>{order.address}</td>
                                        <td>{order.orderName}</td>


                                        {order.status === 'Pending' ? <td className='text-danger'>
                                            {order.status}
                                            <Button onClick={() => handleApprove(order._id)} variant="success" size="sm" className='ms-2'>
                                               Approve
                                            </Button>
                                            <Button onClick={() => handleDelete(order._id)} variant="danger" size="sm" className='ms-2'>
                                                Delete
                                            </Button>
                                        </td>

                                            : <td className='text-success'>
                                                {order.status}
                                                <Button onClick={() => handleDelete(order._id)} variant="danger" size="sm" className='ms-2'>
                                                    Delete
                                                </Button>
                                            </td>}
                                    </tr>
                                </tbody>
                            )
                        }

                    </Table>
                </Container>
            </div>
        </>
    );
};

export default ManageOrder;