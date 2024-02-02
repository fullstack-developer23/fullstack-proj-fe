import React from "react";

const UserOrders = ({ loggedIn }) => {
  const { Orders } = loggedIn;

  return (
    <div>
      <h1>User Orders</h1>
      {Orders.length > 0 ? (
        Orders.map((order) => (
          <div key={order.id} className="order">
            <p>Orderid: {order.id}</p>
            <p>Total Price: {order.totalPrice}</p>
          </div>
        ))
      ) : (
        <p>No orders</p>
      )}
    </div>
  );
};

export default UserOrders;
