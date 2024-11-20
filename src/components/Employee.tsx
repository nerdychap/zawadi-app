import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { useAppContext } from "../AppContext";
import { EmployeeType } from "../types/types";

const Employee = ({ item: { role, name, id } }: { item: EmployeeType }) => {
  const { handleDelete } = useAppContext();
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => handleDelete(id)} aria-label="delete">
          <DeleteOutlineOutlinedIcon color="error" />
        </IconButton>
      }
    >
      <ListItemText>
        {name} - {role}
      </ListItemText>
    </ListItem>
  );
};

export default Employee;
