import React from 'react';
import camera from "../../assets/icons/camera.svg";

import './add-photo.scss'

function AddPhoto(props) {
    return (
        <div className="add-photo">
            <div className="add-photo__container">
                <img src={camera} alt=""/>
            </div>
        </div>
    );
}

export default AddPhoto;