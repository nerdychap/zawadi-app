import { nanoid } from "nanoid";
import { ReactNode, createContext, useContext, useState } from "react";
import { AppContextType, EmployeeType } from "./types/types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context value is undefined");
  }
  return context;
};

const AppContextWrapper = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);

  const handleDelete = (id: string) => {
    const newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);
  };

  const handleAddEmployee = (newEmployee: EmployeeType) => {
    setEmployees((prevState) => [
      ...prevState,
      { ...newEmployee, id: nanoid() },
    ]);
  };

  const value = {
    employees,
    setEmployees,
    handleDelete,
    handleAddEmployee,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextWrapper;
