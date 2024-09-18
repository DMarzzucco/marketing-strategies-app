import React, { ChangeEvent } from "react";
export interface StringsParams {
    prompt: string;
    strategy: string;
    error: string;
}

export interface ContextProp {
    handler: (op: "submit" | "input") => (e: React.FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>) => void;
    dataString: StringsParams
}
export interface ProviderProps { children: JSX.Element }
