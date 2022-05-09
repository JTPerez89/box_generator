import React, { useState } from 'react';

const Form = (props) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.handleNewBox({color: color, height: parseInt(height), width: parseInt(width)});
        setColor("");
        setWidth("");
        setHeight("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Box Color:</label>
                <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Color" />
                <label>Box Height:</label>
                <input type="text" value={height} name="height" onChange={(e) => setHeight(e.target.value)} placeholder="Enter Height" />
                <label>Box Width:</label>
                <input type="text" value={width} name="width" onChange={(e) => setWidth(e.target.value)} placeholder="Enter Width" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;