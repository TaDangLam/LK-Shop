import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

import { Blog } from "../model/blogModel.js";

const blogController = {
    //Get All Blog
    getAllBlog: async(req, res) => {
        try {
            const blogData = await Blog.find();
            res.status(StatusCodes.OK).json(blogData);
        } catch(err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    //Get Blog for id
    getIdBlog: async(req, res) => {
        const blogID = req.params.id;
        try {
           const BlogData = await Blog.findById(blogID);
           res.status(StatusCodes.OK).json(BlogData);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    //Create Blog
    addBlog: async(req, res) => {
        try {
            const { title, image, content } = req.body;
            const blogData = await Blog.create({ title, image, content });
            res.status(StatusCodes.CREATED).json(blogData);
        } catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    //Delete Blog
    deleteBlog: async(req, res) => {
        const blogID = req.params.id;
        try {
            await Blog.findByIdAndDelete(blogID);
            res.status(StatusCodes.OK).json('Blog was Deleted');
        } catch(err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    //update Blog
    updateBlog: async(req, res) => {
        const blogID = req.params.id;
        const { title, image, content } = req.body;
        try {
            const BlogData = await Blog.findByIdAndUpdate(blogID, { title, image, content });
            res.status(StatusCodes.OK).json(BlogData);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
}

export default blogController;
