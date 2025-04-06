"use client";
import React, { FC } from "react";

interface IProps {
  text: string;
}

export const ClientCom: FC<IProps> = ({ text }) => {
  return <div className="italic text-2xl text-center">Check {text}</div>;
};
