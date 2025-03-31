import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

import SingleContact from "../components/SingleContact"



export const ContactList = () => {
    const { dispatch, store } = useGlobalReducer();
    const { contacts, loading, error } = store;

    const getContacts = async () => {
        dispatch({ type: "set_loading", payload: true });

        try {
            const fetchUrl = `https://playground.4geeks.com/contact/agendas/szarraga/contacts`;
            const resp = await fetch(fetchUrl);
            if (!resp.ok) {
                throw new Error(`Error - HTTP Status: ${resp.status}`);
            }
            const data = await resp.json();
            dispatch({ type: "set_contacts", payload: data.contacts });

        } catch (error) {
            console.error("Error al obtener los contactos:", error);
            dispatch({type:"set_error", payload: error.message})
        }
    }

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div className="container contactList">
            <div className="text-center"><h1>Contact List</h1></div>
            <div className="d-flex justify-content-end">
                <Link to="AddContact"><button className="btn btn-primary addContact" >Add Contact</button></Link>
            </div>
            <ul className="list-group mt-3">
                {contacts.map((contact, index) => (
                    <SingleContact contact={contact} onContactDeleted={getContacts} key={index} />
                ))}
            </ul>
        </div>
    );

}