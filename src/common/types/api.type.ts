export type ApiError = {
    data: {
        statusCode: number;
        error: string;
        message: string;
    };
};
