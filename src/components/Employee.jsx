import { useState } from "react";


const Employee = (props) => {
    const [showMore, setShowMore] = useState(false);
    const [buttonText, setButtonText] = useState("Show More");

    const toggleShowMore = () => {
        setShowMore(!showMore);
        (buttonText === "Show More") ? (setButtonText("Show Less")) : (setButtonText("Show More"));
            }
    
    
    return (
        <div className="employee-block">
            <img className="avatar" src={props.employee.avatar} />
            <br />Name: {props.employee.firstName} {props.employee.lastName}
            <br />ID: {props.employee.id}
            <br />Email: {props.employee.email}
            <br />Phone: {props.employee.phone}
            <br /><button onClick={toggleShowMore}>{buttonText}</button>
            <br />{showMore ? (<div className="more-info">
                Address: {props.employee.address.streetAddress}
                <br />City: {props.employee.address.city}
                <br />State: {props.employee.address.state}
                <br />Zip Code: {props.employee.address.zipCode}
                <br />Bio: {props.employee.bio}
            </div>) : <div></div>}
        </div>
    )
}

export default Employee;