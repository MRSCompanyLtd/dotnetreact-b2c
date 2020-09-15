# .NET + React SPA with Azure AD B2C Authentication

## Prerequisites

First and foremost, [follow this guide to set up your
Azure AD tenant and register your application.](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)

You also need Node JS and .NET Core 3.1 installed.

## Template Setup

1. Change parameters in appsettings.json to reflect your environment.
2. Change parameters in ClientApp/src/auth/authProvider.js to reflect your environment.
3. Run `dotnet run` and wait while it builds. You will be able to navigate to https://localhost:5001.