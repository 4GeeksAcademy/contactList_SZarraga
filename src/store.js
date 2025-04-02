export const initialStore = () => {
  return {
    message: null,
    contacts: [],
    loading: false,
    error: null,
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {


    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload,
        loading: false,
        error: null,
      }
    case 'add_contact':
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      }
    case 'edit_contact':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'delete_contact':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'set_loading':
      return {
        ...store,
        loading: action.payload,
      }
    case 'set_error':
      return {
        ...store,
        error: action.payload,
      }
    default:
      throw Error('Unknown action.');
  }
}
