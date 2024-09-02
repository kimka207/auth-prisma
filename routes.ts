const authRoutes = ["/auth/login", "/auth/register"];

// do not require authenitication
const publicRoutes = ["/"];

// this is api route
const apiAccessRoute = "/api/auth/";

//this is the main redirect after loggin
const DEFAULT_LOGIN_REDIRECT = "/dashboard";

export { DEFAULT_LOGIN_REDIRECT, authRoutes, apiAccessRoute, publicRoutes };
