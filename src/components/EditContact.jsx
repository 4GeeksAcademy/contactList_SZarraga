import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const { contacts } = store;
    const { id } = useParams();

     const [newContactData, setNewContactData] = useState({
         name: "",
         phone: "",
         address: "",
         email: ""
     });


    useEffect(() => {
        
        const contactFound = contacts.find(c => c.id === parseInt(id));
        if (contactFound) {
            setNewContactData(contactFound);
        }
    }, [contacts, id]);
    
    const navigate = useNavigate();

    const handleChanges = (event) => {
        const { name, value } = event.target;
        setNewContactData(contactData => ({
            ...contactData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const fetchUrl = `https://playground.4geeks.com/contact/agendas/szarraga/contacts/${id}`;
            const resp = await fetch(fetchUrl,
                {
                    method: "PUT",
                    body: JSON.stringify(newContactData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            if (!resp.ok) {
                throw new Error(`Error - HTTP Status: ${resp.status}`);
            }
            const data = await resp.json();
            dispatch({ type: "edit_contact", payload: data })
            navigate("/");

        } catch (error) {
            console.error("Error adding contact: ", error);
            dispatch({ type: "set_error", payload: error.message })
        }
    }

    return (
        <div className="container mt-4">

            <div className="text-center mb-4"><h1>Contact List | Edit Contact</h1></div>
            <form className="form-control" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input className="form-control" type="text" name="name" value={newContactData.name} onChange={handleChanges} id="name" placeholder="Contact full name" />

                <label htmlFor="phone">Phone</label>
                <input className="form-control" type="tel" name="phone" value={newContactData.phone} onChange={handleChanges} id="phone" placeholder="Contact phone" />

                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" name="email" value={newContactData.email} onChange={handleChanges} id="email" placeholder="Contact email" />

                <label htmlFor="address">Address</label>
                <input className="form-control" type="text" name="address" value={newContactData.address} onChange={handleChanges} id="address" placeholder="Contact address" />

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary mt-2">Edit Contact</button>
                </div>

            </form>
        </div>
    )

}