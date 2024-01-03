export type RouteType = string | Routes;

export enum Routes {
  login = "/auth/login",
  register = "/auth/register",
  authReset = "/auth/reset",
  newPassword = "/auth/new-password",
  newVerification = "/auth/new-verification",
  dashboard = "/dashboard",
  settings = "/settings",
  authError = "/auth/error",
  home = "/",
}

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: RouteType[] = [Routes.home, Routes.newVerification];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: RouteType[] = [
  Routes.login,
  Routes.register,
  Routes.authError,
  Routes.authReset,
  Routes.newPassword,
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: RouteType = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: RouteType = Routes.dashboard;
