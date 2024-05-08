const userLogged = {
  id: "12f6392f-e45f-4936-990c-5d180205cd0a",
  username: "Test",
  email: "test@test.com",
  password: "1234",
  phone: "+34963954109",
  userType: "admin",
  addresses: [
    { id: 0, country: "Spain", city: "Valencia", address: "c/ test1 1,2" },
    { id: 1, country: "Spain", city: "Barcelona", address: "c/ test2 3,4" },
  ],
  payments: [
    { id: 0, type: "Visa", number: "1231-1231-1231", cvv: "123" },
    {
      id: 1,
      country: "Mastercad",
      number: "1231-4323-1232",
      cvv: "123",
    },
  ],
};

export default userLogged;
