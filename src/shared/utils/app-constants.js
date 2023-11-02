export const AppConstants = {
    SCHEMA: {
        USER_SCHEMA: 'users',
        PERMISSION_SCHEMA: 'permission',
    },
    STATUS_CODE: {
        SUCCESS: 200,
        SERVER_ERROR: 500,
        UNAUTHORIZED: 401,
        RESOURCE_NOT_FOUND: 404
    },
    ROUTES: {
        USER: {
            REGISTER: '/register',
        }
    }
}
export const STATUS_CODES = AppConstants.STATUS_CODE;
export const USER_ROUTES = AppConstants.ROUTES.USER;