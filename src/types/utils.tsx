export type AttendanceProps = {
  total: number;
  present: number;
  absent: number;
  onLeave: number;
  halfDay?:number
};

export type UserData = {
  photo: string;
  name: string;
  admission: {
    date: string;
    id: string;
  };
  class: string;
  guardian: {
    name: string;
    phone: string;
  };
  DOB: string;
  status: string;
  address: string;
};

export type AllStudent = {
  photo: string;
  name: string;
  admission: {
    date: string;
    id: string;
  };
  class: string;
  guardian: {
    fatherName: string;
    motherName: string;
    phone: string;
  };

  address: string;
};

export type Parent = {
  class: Array<string>;
  email: string;
  children: Array<string>;
  status: boolean;
  guardian: {
    fatherName: string;
    motherName: string;
  };
  phone: number;

  address: string;
};

export type Teacher = {
  photo: string;
  userName: string;
  Role: string;
  Type: string;
  Date: string;
  Status: string;
};
