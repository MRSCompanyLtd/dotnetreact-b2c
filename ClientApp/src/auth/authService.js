import { authProvider } from "./authProvider";

export const getAccessToken = async () => {
    const token = await authProvider.getAccessToken();
    return token
}