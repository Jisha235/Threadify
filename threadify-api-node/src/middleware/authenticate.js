const jwtProvider = require("../config/jwtProvider")
const userService = require("../services/user_service")

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({ error: "Authentication header is missing." });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).send({ error: "Token not found." });
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        if (!userId) {
            return res.status(401).send({ error: "Invalid token." });
        }

        const user = await userService.findUserById(userId);
        if (!user) {
            return res.status(401).send({ error: "User not found." });
        }

        req.user = user; // User is successfully attached to the request
        next(); // Proceed to next middleware or route handler
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = authenticate;
