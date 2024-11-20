import { Fragment } from "react";
import { groupBy } from "underscore";
import { useAppContext } from "../AppContext";
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";

const Home = () => {
  const { employees } = useAppContext();

  const groupedByManager = groupBy(employees, (item) =>
    item["manager"].toLowerCase()
  );
  const managerKeys: (keyof typeof groupedByManager)[] =
    Object.keys(groupedByManager);

  return (
    <>
    <h1>Zawadi App</h1>
      <AddEmployee />
      {managerKeys.map((item) => (
        <Fragment key={item}>
          <h3>Manager: {item}</h3>
          <div>
            {groupedByManager[item].map((item) => (
              <Employee item={item} key={item.id} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Home;
