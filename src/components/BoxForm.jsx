import React, { useState } from 'react';

const BoxForm = (props) => {
    const [box, setBox] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = {color: box}
        props.addNewBox(newBox);
        setBox("");
    };

    return(
        <form onSubmit= {handleSubmit}>
            <div className="form-group">
                <label>Color</label> 
                <input 
                type="text" 
                onChange={ (e) => setBox(e.target.value) } 
                />
            </div>
                <input type="submit" value="Add" className="btn btn-outline-info" />
        </form>

    );

};

export default BoxForm;