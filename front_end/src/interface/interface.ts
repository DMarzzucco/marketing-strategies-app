import React, { ChangeEvent } from "react";

export interface ContextProp {
    user?: string;
    handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    handler: (op: "submit" | "input") => (e: React.FormEvent<HTMLFormElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface ProviderProps { children: JSX.Element }
