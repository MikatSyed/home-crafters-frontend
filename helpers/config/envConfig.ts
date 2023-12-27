export const getBaseUrl = (): any => {
    const environment = process.env.NODE_ENV;

    switch (environment) {
        case 'development':
            return 'http://localhost:6060/api/v1'; // Replace with your development API URL
        case 'production':
            return process.env.NEXT_PUBLIC_API_BASE_URL;// Replace with your production API URL
        default:
            return ' http://localhost:6060/api/v1'; // Replace with a default API URL
    }
};