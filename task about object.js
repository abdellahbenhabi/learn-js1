const authSystem = {
    users: [],

    register(username, password) {
        const existingUser = this.users.find(user => user.username === username);
        if (existingUser) {
            console.log("Username already taken");
            return;
        }

        this.users.push({ username, password });
        console.log(`User ${username} registered successfully`);
    },

    login(username, password) {
        const user = this.users.find(user => user.username === username);
        if (!user) {
            console.log(" User not found");
            return;
        }

        if (user.password === password) {
            console.log("Login successful");
        } else {
            console.log("Invalid credentials");
        }
    },

    deleteUser(username) {
        const index = this.users.findIndex(user => user.username === username);
        if (index === -1) {
            console.log("User not found");
            return;
        }

        this.users.splice(index, 1);
        console.log(`User ${username} deleted successfully`);
    }
};
