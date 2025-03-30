import {React, useState} from "react";

import SingleContact from "../components/SingleContact"

export const ContactList = () => {
    const [contacts, setContacts] = useState([
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21" },
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21" },
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21" },
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21" },
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21" },
    ]);


    return (
        <div className="container">
            <h1>Contact List</h1>
            <ul className="list-group mt-3">
                {contacts.map((contact, index) => (
                   <SingleContact contact={contact} key={index} />
                ))}
            </ul>
        </div>
    );

}