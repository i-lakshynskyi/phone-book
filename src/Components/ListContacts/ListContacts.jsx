import React from 'react';

import './list-contacts.scss';
import remove from '../../assets/icons/close.svg'

function ListContacts({listContacts, onActiveItem, removeContact,activeItem}) {

    return (
        <ul className="list">
            {listContacts.map(contact =>
                <li
                    key={contact.id}
                    className={`list__contact ${activeItem && (contact.id === activeItem.id) ? "list__contact-active" : "" } `}
                    onClick={(e) => {
                        onActiveItem(contact.id);
                    }}>
                    <span >
                        {`${contact.name} ${contact.surname}`}
                        <img onClick={() => removeContact(contact.id)} src={remove} alt="remove"/>
                </span>
                </li>
            )}
        </ul>
    );
}

export default ListContacts;