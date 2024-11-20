import { SetStateAction } from "react";

export type EmployeeType = {
  name: string;
  role: string;
  manager: string;
  id: string;
};

export type AppContextType = {
    employees: EmployeeType[];
    setEmployees: React.Dispatch<SetStateAction<EmployeeType[]>>;
    handleDelete: (id: string) => void;
    handleAddEmployee: (employee: EmployeeType) => void;
  };