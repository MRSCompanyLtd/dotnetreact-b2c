import React from "react";
import { Route } from 'react-router';
import { AzureAD } from "react-aad-msal";
import { authProvider } from "../auth/authProvider";

const ProtectedRoute = (props) => {
    return (
        <AzureAD provider={authProvider} forceLogin={true}>
        <Route path={props.path} exact component={props.component} />
        </AzureAD>
    )
}

export default ProtectedRoute;