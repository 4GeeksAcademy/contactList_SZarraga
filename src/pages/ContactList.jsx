import {React, useState} from "react";

import rigoImageUrl from "../assets/img/rigo-baby.jpg";

import SingleContact from "../components/SingleContact"

export const ContactList = () => {
    const [contacts, setContacts] = useState([
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21", avatar:rigoImageUrl },
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21", avatar:rigoImageUrl },
        { name: "Sergio", last_name: "Zarraga", phone: "600 600 600", email: "a@a.com", address: "Calle Petunia 21", avatar:rigoImageUrl },
    ]);


    return (
        <div className="container contactList">
            <div className="text-center"><h1>Contact List</h1></div>
            <div className="d-flex justify-content-end"><button className="btn btn-primary addContact">Add Contact</button></div>
            <ul className="list-group mt-3">
                {contacts.map((contact, index) => (
                   <SingleContact contact={contact} key={index} />
                ))}
            </ul>
        </div>
    );

}