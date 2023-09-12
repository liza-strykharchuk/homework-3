import { Component } from 'react';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { nanoid } from 'nanoid'
 
 export class App extends Component {
  state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: ''
}
//    Твоє завдання
//    1. реалізувати створення контактів handleAddContact
//    2. реалізувати їх видалення handleDelete
//    3. реалізувати їх фільтрацію
//        handleFilter - міняєш значення filter в state
//        handleContacts - використовуєш значення filter для фільтрації
//    4. реалізувати створення і запису контактів у локальне сховище
//        componentDidMount - при першому рендері має діставати з localStorage дані і міняти state
//        componentDidUpdate - при кожній зміні contacts в state маєш додавати ці зміни в localStorage
// //    

// Так а тепер пояснення рзомітки

//    Перед роботою запусти запусти домашку в терміналі
// В тебе є вся розмітка
// Вона доволі проста
// Є поле name куди ти маєш вписувати ім'я контакта
// І є поле number куди вписується номер контакта
// Кнопочка яка вносить дані

// Далі блок contacts і filter

// Це списочок всіх контактів

// Тут поле куди йти вводиш назву або номер контакта і воно по списку тобі його шукає і рендерить заодно


componentDidMount = () => {
   
}
componentDidUpdate = (prevProps, prevState) => {
 
}
   
handleAddContact = ({ name, number }) => {
	
	};

handleDelete = idx => {
	
	};

handleFilter = (value) => {
 
   };
   
handleContacts = () => {


    return this.state.contacts
	};

  render() {
    return (
      <>
        <div>
  <h1>Phonebook</h1>
          <ContactForm onSubmit={ this.handleAddContact } />

  <h2>Contacts</h2>
          <Filter handleFilter={this.handleFilter} handleContacts={this.handleContacts} />
          <ContactList contacts={this.handleContacts()} handleDelete={ this.handleDelete } />
        </div>
        
      </>
          
    );
  }
}
