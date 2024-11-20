import { useAppContext } from "../AppContext";
import { EmployeeType } from "../types/types";

const Employee = ({ item: { role, name, id } }: { item: EmployeeType }) => {
  const { handleDelete } = useAppContext();
  return (
    <div>
      {name} - {role}
      <button onClick={() => handleDelete(id)}>X</button>
    </div>
  );
};

export default Employee;
