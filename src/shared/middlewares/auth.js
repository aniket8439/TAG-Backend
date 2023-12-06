import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.headers["authorization"] ? req.headers["authorization"].split(' ')[1] : null;

  // Check if a token is present
  if (!token) {
    return res.status(401).json({ status: false, error: "Token is required", message: "A token is required for authentication" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded;
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ status: false, message: "Token is not valid", error: error });
  }

  // Continue to the next middleware or route handler
  next();
};

export default verifyToken;