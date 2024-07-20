import React from "react";
import { useAuth } from "../../context/Auth.Context";

const TextareaComp: React.FC = () => {
    const { handleInput } = useAuth()
    return (
        <textarea name="" id="" onChange={handleInput}></textarea>
    )
}
export default TextareaComp;