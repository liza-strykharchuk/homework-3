import { useEffect, useState } from 'react';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { nanoid } from 'nanoid'

//  export class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: ''
// }

// componentDidMount = () => {
//   const newStorage = localStorage.getItem('contacts');

//   if (newStorage) {
//     const parseCont = JSON.parse(newStorage);

//     this.setState({contacts: parseCont})
//   }

// }

// componentDidUpdate = (prevProps, prevState) => {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// handleAddContact = (newContact) => {
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   handleDelete = idx => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== idx)
//     }))
//   };

//   handleFilter = (value) => {
//     this.setState({filter: value});
//   };

//   handleContacts = () => {
//     const {filter, contacts} = this.state;

//     const filterContact = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.includes(filter)
//     );

//     return filterContact;
// 	};

//   render() {
//     return (
//       <>
//         <div>
//         <h1>Phonebook</h1>
//           <ContactForm onSubmit={ this.handleAddContact } />

//         <h2>Contacts</h2>
//           <Filter handleFilter={this.handleFilter} handleContacts={this.handleContacts} />
//           <ContactList contacts={this.handleContacts()} handleDelete={ this.handleDelete } />
//         </div>

//       </>

//     );
//   }
// }

export const App = () => {
    const [contacts, setContacts] = useState([
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);

    const [filter, setFilter] = useState('');

  useEffect(() => {
    const newStorage = localStorage.getItem('contacts');

    if (newStorage) {
        setContacts(JSON.parse(newStorage));
      }

      console.log(newStorage);
    }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);

  const handleAddContact = (newContact) => {
       setContacts( [...contacts, newContact]);
    };

    const handleDelete = (idx) => {
      setContacts( contacts.filter((contact) => contact.id !== idx));
    };

    const handleFilter = (value) => {
      setFilter(value)
    };

    const handleContacts = () => {
      const filterContact = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
      );

        return filterContact;
    };

    return (
    <>
        <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact } />

        <h2>Contacts</h2>
        <Filter handleFilter={handleFilter} handleContacts={handleContacts} />
        <ContactList contacts={handleContacts()} handleDelete={handleDelete } />
        </div>

    </>
    );
  }
