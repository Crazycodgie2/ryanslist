const express = require("express")
const router = express.Router()
const conn = require("../db")

router.get("/categories", (req, res, next) => {
  const sql = `SELECT * FROM categories`

  conn.query(sql, (err, results, fields) => {
    const cats = results
      .filter(c => c.parent_id == null)
      .map(p => ({
        ...p,
        sub: results.filter(c => c.parent_id == p.id)
      }))

    res.json(cats)
  })
})

router.get("/category/:slug", (req, res, next) => {
  const slug = req.params.slug

  const sql = "SELECT * FROM "
})

module.exports = router
