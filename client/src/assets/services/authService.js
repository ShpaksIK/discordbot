
import $api from "../http"

export default class AuthService {
    static async login(refreshToken) {
        return $api.post('/login', refreshToken)

    }
}

