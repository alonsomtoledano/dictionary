import React from "react";

import "./styles.css";

const Definitions = props => {
    const {definition} = props;

    return (
        <div className="Definitions">
            - {definition}
        </div>
    )
}

export default Definitions;