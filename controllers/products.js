const getAllProductsStatic = async (req, res) => {
    console.log('Getting all products');
    res.status(200).json({msg: 'Product testing route'})
}

const getAllProducts = async (req, res) => {
    console.log('Getting all products');
    res.status(200).json({msg: 'Product route'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}