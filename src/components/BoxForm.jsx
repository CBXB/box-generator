import React, { useState } from 'react';

const BoxForm = (props) => {
    const [box, setBox] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(box);
    };

    return(
        <div class="row justify-content-center">
        <form onSubmit= {handleSubmit}>
            <div>
                <label htmlFor="box">Color </label> 
                <input onChange={ (e) => setBox(e.target.value) } type="text" />
                <input type="submit" value="Add" />
            </div>
        </form>

        </div>
    );

};

export default BoxForm;