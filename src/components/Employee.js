import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext } from "react";

const Employee = ({ employees }) => {

  const {deleteEmployee} = useContext(EmployeeContext);
  return (
    <>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>
            <button className="btn txt-warning btn-act" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Edit">
                &#xE254;
              </i>
            </button>
            <button
              onClick={() => deleteEmployee(employee.id)}
              className="btn txt-danger btn-act"
              data-toggle="modal"
            >
              <i
                className="material-icons"
                data-toggle="tooltip"
                title="Delete"
              >
                &#xE872;
              </i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Employee;
