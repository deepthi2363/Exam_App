import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Auth header received:", authHeader);

  // Ensure header exists and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // ✅ correctly extract token
  console.log("Token extracted:", token);

  console.log("Verifying with JWT_SECRET:", process.env.JWT_SECRET);


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    console.log("User ID from token:", req.userId);
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};
