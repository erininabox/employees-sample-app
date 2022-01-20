import Employee from './Employee';
import {setState, useState} from 'react';

const AllEmployees = (props) => {
    const employees = props.employees;
    const [toggleExpand, setToggleExpand] = useState(false)
    const [buttonText, setButtonText] = useState("Expand All")

    const expandHandler = (buttonText) => {
        setToggleExpand(!toggleExpand);
        (buttonText!="Expand All") ? setButtonText("Collapse All") : setButtonText("Expand All");
    }
    return (
        <div>
            <button className='expand-all-toggle' onClick={() => expandHandler()}>{buttonText}</button>
            <br />Expand toggle value: {toggleExpand ? ("True") : ("False")}{console.log(toggleExpand)}
            {employees.map((employee) => {
                return (
                    <Employee employee={employee} key={employee.id} expand={toggleExpand} />
                )
            })}
        </div>
    )
}

export default AllEmployees;