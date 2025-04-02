import React from 'react';

export const DeleteContact = async (id, dispatch) => {
  try {
    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/szarraga/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!resp.ok) {
      console.error("Error eliminando contacto:", resp.status, resp.statusText);
      return false;
    }

    dispatch({ type: "delete_contact", payload: id });

    return true;
  } catch (error) {
    console.error("Error al eliminar contacto:", error);
    return false;
  }
};