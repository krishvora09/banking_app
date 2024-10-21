import React, { useCallback } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOptions } from "react-plaid-link";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const onSuccess = useCallback(async()=>{

    },[user])

  const config: PlaidLinkOptions = {

  };

  return (
    <>
      {variant === "primary" ? (
        <Button className="plaidlink-primary">Connect Bank</Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
