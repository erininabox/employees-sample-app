import { useEffect, useState } from "react";


const Employee = (props) => {
    const [showMore, setShowMore] = useState(false);
    const [buttonText, setButtonText] = useState("Show More");
    const [status, setStatus] = useState();
    const [updateStatus, setUpdateStatus] = useState();
    const [employeeData, setEmployeeData] = useState({ firstName: props.employee.firstName ,lastName: props.employee.lastName });
    const [editStatus, toggleEdit] = useState(false);
    const idAPI = 'api/employees/'+props.employee.id

    // Handles the delete path
    const deleteHandler = () => {
        fetch(idAPI, {
            method: 'DELETE'})
            .then(()=> {setStatus('Delete successful: ' + props.employee.firstName + " " + props.employee.lastName + " User ID: " + props.employee.id)})
    }

    // Step 1 Update: Updates state
    const handleUpdate = (event) => {
        setEmployeeData((employeeData) => ({
            ...employeeData,
            [event.target.name]: event.target.value,
        }));
    };
    
    // Step 2 Update: Prevents reloading whole page, triggers next step
    const handleSubmit = (event) => {
        event.preventDefault();
        updateHandler(employeeData);
    }

    // Step 3 Update: Sends update to server
    const updateHandler = (employeeData) => {
        fetch(idAPI, {
            method: 'PATCH',
            body: JSON.stringify({
                firstName: employeeData.firstName,
                lastName: employeeData.lastName
            })
        }).then(() => {setUpdateStatus('Update successful')})
    }


    // Toggles showMore to expand/collapse the extra info
    const toggleShowMore = () => {
        setShowMore(!showMore);
            }
    
    // Uses the expand state from the parent component to alter the showMore state in this component. Needs props.expand in the dependency array
    useEffect(() => {
        (props.expand===true) ? setShowMore(true) : setShowMore(false);
    }, [props.expand])

    // Uses the showMore state to set the button text for the individual employee toggle button
    useEffect(() => {
        (showMore) ? (setButtonText("Show Less")) : (setButtonText("Show More"));
    }, [])

    // JSX
    return (
        <div className="employee-block">
            
            {/* Ternary to either show status or employee data, not both. Confirmed in console that delete is completing */}
            {status!=null 
            ? (<div className="delete-status">{status}</div>) 
            : (
                <div className="employee-info">
                    <img className="avatar" src={props.employee.avatar} alt={props.employee.firstName + " " + props.employee.lastName} />

                    <br />Name: {props.employee.firstName} {props.employee.lastName}
                    <br /><button onClick={toggleEdit}>Edit Name</button>
                    {!editStatus ? <></>
                        : (
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                value={employeeData.firstName} 
                                name="firstName" 
                                onChange={handleUpdate} 
                                />
                            <input
                                type="text"
                                value={employeeData.lastName}
                                name="lastName"
                                onChange={handleUpdate}
                                />
                            <button type="submit">Update</button>
                            <br />{updateStatus}
                        </form>
                        )
                    }

                    <br />ID: {props.employee.id}
                    <br />Email: {props.employee.email}
                    <br />Phone: {props.employee.phone}
                    <br /><button onClick={() => {deleteHandler(props.employee.id)}}>DELETE</button>
                    <br /><button onClick={toggleShowMore}>{buttonText}</button>
                    {/* Embedding more info under a ternary based on showMore state */}
                    <br />{showMore ? 
                        (<div className="more-info">
                            Address: {props.employee.address.streetAddress}
                            <br />City: {props.employee.address.city}
                            <br />State: {props.employee.address.state}
                            <br />Zip Code: {props.employee.address.zipCode}
                            <br />Bio: {props.employee.bio}
                        </div>) : <></>}
                </div>

                )}
            
        </div>
                ) 
}

export default Employee;