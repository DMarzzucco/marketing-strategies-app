import React from "react";
import { useAuth } from "../../context/Auth.Context";

const TextareaComp: React.FC = () => {
    const { handler, dataString } = useAuth()
    return (
        <textarea value={dataString.prompt} name="" id="" onChange={handler("input")} placeholder="Enter you prompt" />
    )
}
export default TextareaComp;