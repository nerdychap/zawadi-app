import { ChangeEvent, FormEvent, useState } from "react";
import { useAppContext } from "../AppContext";
import { EmployeeType } from "../types/types";

const AddEmployee = () => {
  const { handleAddEmployee } = useAppContext();
  const [newEmployee, setNewEmployee] = useState<EmployeeType>({
    name: "",
    manager: "",
    role: "",
    id: "",
  });

  const handleFormInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewEmployee((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAddEmployee(newEmployee);
    setNewEmployee({ manager: "", role: "", name: "", id: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add employee</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={handleFormInputChange}
          name="name"
          value={newEmployee.name}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <input
          id="role"
          onChange={handleFormInputChange}
          name="role"
          value={newEmployee.role}
        />
      </div>
      <div>
        <label htmlFor="manager">Manager</label>
        <input
          id="manager"
          onChange={handleFormInputChange}
          name="manager"
          value={newEmployee.manager}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AddEmployee;
