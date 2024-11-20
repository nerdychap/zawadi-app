import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { EmployeeType } from "../types/types";
import Employee from "./Employee";

const Manager = ({
  item,
  groupedByManager,
}: {
  item: string | number;
  groupedByManager: _.Dictionary<EmployeeType[]>;
}) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText>
          <Typography variant="h5" fontWeight="400">
            {item.toLocaleString().toUpperCase()}
          </Typography>
        </ListItemText>
        {open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {groupedByManager[item].map((item) => (
            <Employee item={item} key={item.id} />
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default Manager;
