export type RegistrationBody = {
    email: string;
    password: string;
};

export type RegistrationResponse = {};

export type LoginBody = {
    email: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
};

export type CheckEmailBody = {
    email: string;
};

export type CheckEmailResponse = {
    email: string;
    message: string;
};

export type ConfirmEmailBody = {
    email: string;
    code: string;
};

export type ConfirmEmailResponse = {
    email: string;
    message: string;
};

export type ChangePasswordBody = {
    password: string;
    confirmPassword: string;
};

export type ChangePasswordResponse = {
    message: string;
};
