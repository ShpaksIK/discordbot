class UserDTO {
    getUserDto (user, _refreshToken) {

        const userDto = {
            discordId: user.id,
            username: user.username,
            email: user.email,
            icon: user.avatar,
            refreshToken: _refreshToken,
        }
        return userDto
    }
    clientUserDto (user) {
        console.log(user)
        const newUser = {
            username: user.username,
            avatar: user.icon
        }
        return newUser
    }
}

module.exports = new UserDTO()