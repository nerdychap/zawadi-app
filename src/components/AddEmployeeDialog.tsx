import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppContext } from "../AppContext";
import { EmployeeType } from "../types/types";

const AddEmployeeDialog = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
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
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        sx: { width: 500 },
      }}
      maxWidth="md"
    >
      <DialogTitle>Add employee</DialogTitle>
      <DialogContent style={{ paddingTop: 5 }}>
        <Stack spacing={2}>
          <TextField
            label="name"
            onChange={handleFormInputChange}
            name="name"
            value={newEmployee.name}
            required
          />
          <TextField
            label="role"
            onChange={handleFormInputChange}
            name="role"
            value={newEmployee.role}
            required
          />
          <TextField
            label="manager"
            onChange={handleFormInputChange}
            name="manager"
            value={newEmployee.manager}
            required
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeDialog;
