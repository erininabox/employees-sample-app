import Employee from './Employee';

const AllEmployees = (props) => {
    const employees = props.employees;
    
    return (
        <div>
            {employees.map((employee) => {
                return (
                    <Employee employee={employee} key={employee.id} />
                )
            })}
        </div>
    )
}

export default AllEmployees;