import React, { FC } from "react";
import { myPromise } from "../action";
import { ClientCom } from "./clientCom";

interface IProps {}

const ServerComponent: FC<IProps> = async () => {
  const res = await myPromise();
  return <ClientCom text={res} />;
};

export default ServerComponent;
