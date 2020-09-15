import { MsalAuthProvider, LoginType } from 'react-aad-msal';


// Msal Configurations
const config = {
  auth: {
    authority: '', // Add Sign up / sign in user flow here
    clientId: '', // Add Client (Application) ID from Azure portal
    validateAuthority: false
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

// Authentication Parameters
const authenticationParameters = {
  scopes: [
    ''
  ]
}

// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)