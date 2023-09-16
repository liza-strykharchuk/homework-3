import PropTypes from "prop-types";
import React from 'react';


// export class ContactList extends Component {

//     render() {

//         const { contacts, handleDelete } = this.props;
//       // console.log(this.handleDelete)
//     return (
//       <>
//          <ul>
//             {
//               contacts.map(({id, name, number}) => (
//                 <li key={id}>
//                   <span> {name}: {number}</span>
//                   <button onClick={() => handleDelete(id) }>Delete</button>
//                 </li>
//               ))}
//         </ul>
//       </>

//     );
//   }
// }

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
       <ul>
          {
            contacts.map(({id, name, number}) => (
              <li key={id}>
                <span> {name}: {number}</span>
                <button onClick={() => handleDelete(id) }>Delete</button>
              </li>
            ))}
      </ul>
    </>

  );
}


ContactList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.exact({
     number: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  })),
};
