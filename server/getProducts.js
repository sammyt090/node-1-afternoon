const products = require('../products.json');

module.exports = {
getProducts : (req, res) =>{
    const {price} =req.query
   if(price){
       const money = products.filter(e => e.price >= +price);
       if(!money){
       return res.status(404).send("Choose different price range.")
    }
      else{ return  res.status(200).send(money)}
   }
   
   res.status(200).send(products)
   },



getId: (req, res)=>{
    const{id}=req.params
    const product = products.find(element=> element.id === +id)

    if(product){
        res.status(200).send(product)
    } else{
        res.status(404).send("Item not in list")
    }
}


}
// module.exports = getProducts, getId;
   

