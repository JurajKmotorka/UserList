export interface User {
    uuid: string,
    first_name: string,
    last_name: string,
    email: string,
    avatar: {
        url: string,
        title: string,
    }
}