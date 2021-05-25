import React from 'react';
import add from "../../assets/icons/add.svg";
import ListContacts from "../ListContacts/ListContacts";
import Search from "../Search/Search";

function Sidebar({toggleFormVisible,listContacts,onActiveItem,removeContact,searchInputValue,onSearchInput,activeItem}) {
    return (
        <div className="contacts__sidebar">
            <div className="contacts__sidebar-add" onClick={toggleFormVisible}>
                <img src={add} alt="+"/>
                <span>Add contact</span>
            </div>
            <div className="contacts__sidebar-list">
                {listContacts &&
                <ListContacts
                    listContacts={listContacts}
                    onActiveItem={onActiveItem}
                    removeContact={removeContact}
                    activeItem={activeItem}
                />
                }
            </div>
            <Search
                searchInputValue={searchInputValue}
                onSearchInput={onSearchInput}
            />
        </div>
    );
}

export default Sidebar;