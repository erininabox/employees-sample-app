import { useState } from "react";


const Employee = (props) => {
    const [toggleAll, setToggleAll] = useState(props.expand);
    const [showMore, setShowMore] = useState(toggleAll);
    const [buttonText, setButtonText] = useState("Show More");
    const [status, setStatus] = useState();

    const toggleShowMore = () => {
        setShowMore(!showMore);
        (buttonText === "Show More") ? (setButtonText("Show Less")) : (setButtonText("Show More"));
            }
    
    const deleteHandler = (id) => {
        const idAPI = 'api/employees/'+id
        fetch(idAPI, {method: 'DELETE'}).then(()=> {setStatus('Delete successful: ' + props.employee.firstName + " " + props.employee.lastName + " User ID: " + props.employee.id)})
    }

    return (
        <div className="employee-block">
            {status!=null 
            ? (<div className="delete-status">{status}</div>) 
            : (
                <div className="employee-info">
                    <img className="avatar" src={props.employee.avatar} alt={props.employee.firstName + " " + props.employee.lastName} />
                    <br />Name: {props.employee.firstName} {props.employee.lastName}
                    <br />ID: {props.employee.id}
                    <br />Email: {props.employee.email}
                    <br />Phone: {props.employee.phone}
                    <br /><button onClick={() => {deleteHandler(props.employee.id)}}>DELETE</button>
                    <br /><button onClick={toggleShowMore}>{buttonText}</button>
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