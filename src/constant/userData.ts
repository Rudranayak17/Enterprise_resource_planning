import { AllStudent, Parent, Teacher, UserData } from "@/types/utils";

export const userData: UserData = {
  photo:
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY2twYV81YzlkNmU4Yy04NTNhLTQ2ZDktYmExYS0yNmIzZTI2ZDUyMGQucG5n.png",
  address: "Ramgaarh,Sector 50, gurgoan,Haryana",
  admission: {
    date: "05/02/2008",
    id: "20EE09",
  },
  class: "9th-c",
  DOB: "25/08/2024",
  guardian: {
    name: "Mr Manish Dubey",
    phone: "985365896",
  },
  name: "Ravi Dubey",
  status: "approved",
};

export const allStudent: AllStudent = {
  photo:
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY2twYV81YzlkNmU4Yy04NTNhLTQ2ZDktYmExYS0yNmIzZTI2ZDUyMGQucG5n.png",
  address: "Ramgaarh,Sector 50, gurgoan,Haryana",
  admission: {
    date: "05/02/2008",
    id: "20EE09",
  },
  class: "9th-c",

  guardian: {
    fatherName: "Mr Manish Dubey",
    motherName: "Ruhi Dubey",
    phone: "985365896",
  },
  name: "Ravi Dubey",
};

export const parent: Parent = {
  address: "Ramgaarh,Sector 50, gurgoan,Haryana",
  children: ["ravi dubey", "Lucky Dubey"],
  email: "xyz@gmail.com",
  status: false,
  class: ["9th C", "10th C"],
  guardian: {
    fatherName: "Mr Manish Dubey",
    motherName: "Ruhi Dubey",
  },
  phone: 1234567890,
};

export const teacher: Teacher = {
  photo:
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY2twYV81YzlkNmU4Yy04NTNhLTQ2ZDktYmExYS0yNmIzZTI2ZDUyMGQucG5n.png",
  Date: "14/01//25",
  userName: "Ravi Dubey",
  Role: "Teacher",
  Type: "PGT",
  Status: "Present",
};
