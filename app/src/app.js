import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import categories from './data/categories.json' with { type: 'json'}
import products from './data/products.json' with { type: 'json'}
import views from './data/views.json' with { type: 'json'}

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.get('/api/views', (req, res) => {
  res.status(200).json(views)
})

app.get('/api/views/:viewRoute', (req, res) => {
  const { viewRoute } = req.params

  // We take the view with their respective pruducts and categories
  const view = views.find(view => view.route === viewRoute)
  const categoriesFiltered = categories.filter(c => c.view_id === view.id)
  const productsFiltered = products.filter(p => p.view_id === view.id)

  res.status(200).json({view, categories: categoriesFiltered, products: productsFiltered})
})

app.get('/api/views/:viewRoute/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  const productsFiltered = products.filter(p => p.category_id === +categoryId)

  res.status(200).json(productsFiltered)
})

app.listen(3000, () => {
  `Server listening on port: http://localhost:3000`
})