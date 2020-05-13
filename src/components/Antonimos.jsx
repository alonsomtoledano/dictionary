import React from "react";

import "./styles.css";

const Antonimos = props => {
    const {antonimo} = props;

    return (
        <div className="Antonimos">
            - {antonimo}
        </div>
    )
}

export default Antonimos;