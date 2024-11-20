import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useState } from "react";
import { groupBy } from "underscore";
import { useAppContext } from "../AppContext";
import AddEmployeeDialog from "../components/AddEmployeeDialog";
import Manager from "../components/Manager";

const Home = () => {
  const { employees } = useAppContext();
  const [openDialog, setOpenDialog] = useState(false);

  const groupedByManager = groupBy(employees, (item) =>
    item["manager"].toLowerCase()
  );
  const managerKeys: (keyof typeof groupedByManager)[] =
    Object.keys(groupedByManager);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" textAlign="center">
        Zawadi App
      </Typography>
      <Box justifyContent="center" display="flex" marginY={3}>
        <Button
          startIcon={<AddOutlinedIcon />}
          variant="contained"
          onClick={() => setOpenDialog(true)}
        >
          Add Employee
        </Button>
      </Box>

      <AddEmployeeDialog open={openDialog} handleClose={handleCloseDialog} />
      {!employees.length && (
        <Typography
          variant="h5"
          sx={{ color: "lightgrey", textAlign: "center" }}
        >
          No employees found!
        </Typography>
      )}
      {managerKeys.map((item) => (
        <Card key={item} style={{ marginBottom: 5 }}>
          <Manager groupedByManager={groupedByManager} item={item} />
        </Card>
      ))}
    </Container>
  );
};

export default Home;
