import React from "react";
import { useAuth } from "../../context/Auth.Context";

export const ErrorMessage: React.FC = () => {
    const { dataString } = useAuth()
    return (dataString.error &&
        <div className="flex justify-center items-center p-2 m-1 bg-red-400 text-slate-300 font-bold">
            <h1>{dataString.error}</h1>
        </div>
    )
}
export const StrategyForm: React.FC = () => {
    const { dataString } = useAuth()
    return (
        <div className="overflow-y-auto h-200 w-400 flex w- justify-center items-center">
            {dataString.strategy &&
                <div className="p-2 m2 font-bold flex flex-col justify-center items-center">
                    {dataString.strategy}
                </div>
            }
        </div>
    )
}
const TextareaComp: React.FC = () => {
    const { handler, dataString } = useAuth()
    return (
        <div className="flex flex-row justify-center items-center my-3 p-2 border border-slate-400 rounded-lg">
            <input
                value={dataString.prompt}
                onChange={handler("input")}
                placeholder="Enter you prompt"
                className="border border-slate-400 rounded-lg mr-1 flex justify-center items-center p-2 text-slate-300"
            />
            <button type="submit">Send</button>
        </div>
    )
}
export default TextareaComp;