import React from "react";
import TextareaComp from "../assets/Textarea";
import { useAuth } from "../../context/Auth.Context";

const MarktingForm: React.FC = () => {
    const { handler, dataString } = useAuth()
    return (
        <form
            onSubmit={handler("submit")}
            className="flex flex-col justify-center items-center"
        >
            <TextareaComp />
            <button type="submit">Send</button>
            {dataString.error && <h1 className="text-red-400 font-bold">{dataString.error}</h1>}
            {dataString.strategy && <div>{dataString.strategy}</div>}
        </form>
    )
}
export default MarktingForm