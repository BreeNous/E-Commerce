const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const allcategories = await Category.findAll({
  // be sure to include its associated Products
      include: [Product]
    })
    res.status(200).json(allcategories) 
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoriesById = await Category.findOne({
  // be sure to include its associated Products
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.status(200).json(categoriesById) 
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory) 
 
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
  // be sure to include its associated Products
      where: {
        id: req.params.id
      },
    })
    res.status(200).json(updateCategory) 
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
  // be sure to include its associated Products
      where: {
        id: req.params.id
      },
    })
    res.status(200).json(deleteCategory) 
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

module.exports = router;
