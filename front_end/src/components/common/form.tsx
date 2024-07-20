import React from "react";
import TextareaComp from "../assets/Textarea";
import { useAuth } from "../../context/Auth.Context";

const MarktingForm: React.FC = () => {
    const { handleSubmit } = useAuth()
    return (
        <form onSubmit={handleSubmit}>
            <TextareaComp />
            <button type="submit">Send</button>
        </form>
    )
}
export default MarktingForm