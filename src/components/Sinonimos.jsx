import React from "react";

import "./styles.css";

const Sinonimos = props => {
    const {sinonimo} = props;

    return (
        <div className="Sinonimos">
            - {sinonimo}
        </div>
    )
}

export default Sinonimos;