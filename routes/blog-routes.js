import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getById,
  getByUserId,
  updateBlog,
} from "../controllers/blog-controller.js";
import { protect } from "../middleware/authmiddleware.js";
const blogRoute = express.Router();

blogRoute.get("/", getAllBlogs);
blogRoute.post("/add",protect, addBlog);
blogRoute.put("/update/:id",protect, updateBlog);
blogRoute.get("/:id", getById);
blogRoute.delete("/:id",protect, deleteBlog);
blogRoute.get("/user/:id", getByUserId);
 
export default blogRoute;
