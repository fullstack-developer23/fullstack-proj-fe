import React from "react";

const UserOrders = ({ loggedIn }) => {
  return (
    <div>
      <h1>User Orders</h1>
      {loggedIn && loggedIn.Orders && loggedIn.Orders.length > 0 ? (
        loggedIn.Orders.map((order) => (
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
