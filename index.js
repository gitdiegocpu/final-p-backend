import express from 'express'
import cors from 'cors'
import { getAllProducts, addProduct } from './src/products.js'

const PORT = 3005

const app = express()
app.use(express.json())
app.use(cors())

app.get("/products", getAllProducts)
app.post("/products", addProduct)


app.listen(PORT,() => {
    console.log(`Listening on http://localhost:${PORT}`)
})