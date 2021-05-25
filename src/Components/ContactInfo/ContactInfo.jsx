import React from 'react';
import AddPhoto from "../AddPhoto/AddPhoto";
import "./contact-info.scss";
import edit from "../../assets/icons/edit.svg";

function ContactInfo({contInfo,onEdit}) {
    return (
        <div className="information">
            <img
                onClick={onEdit}
                className="information__edit" src={edit} alt="edit"/>
            <div className="information__photo-container">
                {!contInfo.photo ?
                            <AddPhoto/>
                             :
                            <div className="photo">
                                 <img src={contInfo.photo} alt="camera"/>
                            </div>
                }
            </div>
            <span>{`name: ${contInfo.name} ${contInfo.surname}`}</span>
            <span>{`tel: ${contInfo.tel}`}</span>
            <span>{`email: ${contInfo.email}`}</span>
        </div>
    );
}

export default ContactInfo;