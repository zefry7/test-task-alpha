import React from "react";
import "./style.scss";

interface TypeProps {
    children: React.ReactNode;
}

function LayerWrapper({ children }: TypeProps) {

    return <div className="layer-wrapper">
        <div className="layer-wrapper__content">
            {children}
        </div>
    </div>
}

export default LayerWrapper;
