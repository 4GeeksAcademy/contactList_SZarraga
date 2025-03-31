import React from "react";
import { DeleteContact } from "./DeleteContact";
import useGlobalReducer from "../hooks/useGlobalReducer";

const SingleContact = ({ contact }) => {

    const { dispatch } = useGlobalReducer();

    const handleDelete = async () => {
        await DeleteContact(contact.id, dispatch);
    };

    return (
        <div className="card mt-2">
            <div className="card-body">
                <div className="row d-flex">
                    <div className="col-2"><img className="img-thumbnail rounded float-start" src=""></img></div>
                    <div className="col-8">
                        <h5 className="card-title">{contact.name}</h5>
                        <div className="card-text"><i className="fa-solid fa-phone"></i> {contact.phone}</div>
                        <div className="card-text"><i className="fa-solid fa-envelope"></i> {contact.email}</div>
                        <div className="card-text"><i className="fa-solid fa-location-dot"></i> {contact.address}</div>
                    </div>
                    <div className="col-2 d-flex flex-column">                            
                        <button className="btn btn-secondary" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
                        <button className="btn btn-primary mt-2"><i className="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SingleContact;