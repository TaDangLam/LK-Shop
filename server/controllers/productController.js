import { StatusCodes } from 'http-status-codes';

import { Product } from '../model/productModel.js'

const productController = {
    // GET ALL Product
    getAllProduct: async(req, res) => {
        try{
            const product = await Product.find()
            res.status(StatusCodes.OK).json(product);
        }catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    //Create Product
    createProduct: async(req, res) => {
        try {
            const {} = req.body;
        }catch(err){

        }
    }
}

export default productController;
