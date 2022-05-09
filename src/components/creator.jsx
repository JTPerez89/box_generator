import React from 'react';

const Creator = (props) => {
    return (
        <div>
            {
            props.newBox.map((newBox, i)=> {
                return(
                    <div key={i} style={{background: newBox.color, width: newBox.width, height: newBox.height}}></div>
                )
            }
            )
            }
        </div>
    )
}

export default Creator