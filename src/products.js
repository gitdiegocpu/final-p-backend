import {db} from './connectDb.js'



export function getAllProducts(req, res) {
       db.collection('products').find({}).toArray()
       .then(products => { 
        res.send(products)
       })
       .catch(err => { res.status(500)
       .send({succes: false, message: err})
       })
}



export function addProduct(req, res) {
    const newProduct = req.body
    db.collection('products').insertOne(newProduct)
    .then(() => {res.status(201)
    .send({message: "Product Added", success: true})
})
    .catch(err => { res.status(500)
    .send({ success: false, message: err})
})
}
      