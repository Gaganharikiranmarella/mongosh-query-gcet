//assgn1
db.orders.insertMany([
  {
    empid: 101,
    items: ["Laptop", "Mouse"],
    orderValue: 1500,
    status: "pending"
  },
  {
    empid: 102,
    items: ["Keyboard", "Monitor"],
    orderValue: 800,
    status: "shipped"
  },
  {
    empid: 103,
    items: ["Phone", "Earbuds"],
    orderValue: 1200,
    status: "delivered"
  }
]);
//assgn2
db.orders.find({});
