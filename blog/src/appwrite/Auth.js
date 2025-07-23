import Config from "../config/Config";
import { Client, Account, ID } from "appwrite"
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(Config.appwriteurl)
            .setProject(Config.appwriteprojectid)
        this.account = new Account(this.client)
    }
    // create acc
    async createaccount({ email, password, name }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
            // return user;
            if (user) {
                return this.login({ email, password }) // if yes go to login
            }
            else { return user }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createSession(email, password);

        } catch (error) {
            throw error;
        }
    }

async currentuser() {
    try {
        return await this.account.get();
    } catch (error) {
        if (error.code === 401) {
            console.warn("No active session found (user not logged in).");
        } else {
            console.error("Appwrite currentuser error:", error);
        }
        return null;
    }
}
 async logout() {
    try {
        await this.account.deleteSessions();
    } catch (error) {
        if (error.code === 401) {
            console.warn("Logout attempted while not logged in.");
        } else {
            console.error("Appwrite service :: logout :: error", error);
        }
    }
}

}
const authService = new AuthService()
export default authService