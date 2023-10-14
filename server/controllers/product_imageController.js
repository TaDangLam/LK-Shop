
import { StatusCodes } from 'http-status-codes';

import { ProductImage } from '../model/product_imageModel.js';

const productImageController = {
    
    getAllProductImage: async(req, res) => {
        try{
            const productImage = await ProductImage.find();
            res.status(StatusCodes.OK).json(productImage);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },
    // Import product image
    importProductImage: async(req, res) =>{
        try {
            const {productID, url} = req.body;
            const productImage = await ProductImage.create({productID, url});
            res.status(StatusCodes.CREATED).json(productImage);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    }
} 

export default productImageController;