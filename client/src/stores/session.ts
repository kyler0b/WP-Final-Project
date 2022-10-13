import { reactive } from "vue";

const session = reactive( {
    user: null as User | null,
});

export function login(firstName: string, lastName: string, admin: boolean) {
    session.user = {
        firstName,
        lastName,
        admin,
    };
}
export function logout() {
    session.user = null;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public admin?: boolean;
}

export default session;