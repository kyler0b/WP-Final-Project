import { reactive } from "vue";

const session = reactive( {
    user: null as User | null,
});

export function login(firstName: string, lastName: string, password: string, admin: boolean) {
    session.user = {
        firstName,
        lastName,
        password,
        admin,
    };
}
export function logout() {
    session.user = null;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public password?: string;
    public admin?: boolean;
}

export default session;