export interface userType {
  id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  userType: "admin" | "user";
  addreses: [{ id: number; country: string; city: string; address: string }];
  payments: [{ id: number; type: string; number: string; cvv: string }];
}
