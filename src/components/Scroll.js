import React from "react";

const Scroll = (props) => {
	/*prettier-ignore*/
	return (
        <div style={{ overflowY: "scroll", height: "800px", border: "solid black 1px" }}>
            {props.children}
        </div>
    );
};

export default Scroll;
