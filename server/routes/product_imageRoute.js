import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
const Router = express.Router();

import { ProductImage } from '../model/product_imageModel.js';
import product_imageController from '../controllers/product_imageController.js';



const storage = multer.diskStorage({
    destination: function (req, url, cb) {
      const uploadPath = path.join('./uploads/' + req.body.productID);
      if (!fs.existsSync(uploadPath)){
        fs.mkdirSync(uploadPath);
      }
      cb(null, './uploads/' + req.body.productID);
    },
    filename: function (req, url, cb) {
      cb(null, Date.now() +  '_' + url.originalname );
    }
  });
  
  const upload = multer({ storage: storage }).single('url');
  
Router.get('/', product_imageController.getAllProductImage);

Router.post('/upload', (req, res) => {      
      upload(req, res, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            req.body.url = req.file.path;
            console.log(req.body);
            const productImg = new ProductImage(req.body);
            productImg.save();
            res.status(200).send('File uploaded successfully.');
        }
      });
    });

export const API_ProductImage = Router;