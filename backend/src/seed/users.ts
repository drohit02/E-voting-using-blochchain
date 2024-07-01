type UserType = {
  name: string;
  email: string;
  password: string;
  citizenshipNumber: string;
  admin: boolean;
  verified: boolean;
};

const users: UserType[] = [
  {
    name: "Rohit Deshmukh",
    citizenshipNumber: "413334048800",
    email: "drohit045@gmail.com",
    password: "$2b$10$6sdkothEwAguhA0FytsGF.gcWPmTDB5hosif6rGX5FFJK8PdBgRHu",
    admin: true,
    verified: true,
  },
  {
    name: "Tejas Desale",
    citizenshipNumber: "911213553400",
    email: "tejas@gmail.com",
    password: "$2b$10$70yLw0dPhAD0py/iiGUInO7kklGUmbMfa5BmXKGCXEID1ufTsqSQ6",
    admin: false,
    verified: true,
  },
  {
    name: "Rohit Ugile",
    citizenshipNumber: "987654321000",
    email: "rohit@gmail.com",
    password: "$2b$10$1DsQFSqUs3ufyDDRBd9wYuU5i9ihbnYR4GCYJsI3IzGXamwFWnr4S",
    admin: false,
    verified: true,
  },
];

export default users;
