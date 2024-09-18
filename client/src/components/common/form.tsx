import React from "react";
import TextareaComp, { ErrorMessage, StrategyForm } from "../assets/Textarea";
import { useAuth } from "../../context/Auth.Context";

const MarktingForm: React.FC = () => {
    const { handler} = useAuth()
    return (
        <form
            onSubmit={handler("submit")}
            className="flex flex-col justify-center items-center"
        >
            <TextareaComp />
            <ErrorMessage/>
            <StrategyForm/>
        </form>
    )
}
export default MarktingForm