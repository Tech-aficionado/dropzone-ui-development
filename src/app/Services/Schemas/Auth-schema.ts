export interface NewUserSchema{
    USER_ID : string
    F_NAME : string
    PASSX : string
    EMAIL : string
}

export interface ExistingUserSchema{
    login_username : string
    login_password : string
}