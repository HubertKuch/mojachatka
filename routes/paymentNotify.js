const router = require('express').Router();

router.get("/success", async (req, res) => {
  console.log("Payment success", req.body, req.params);
});

router.get('/return', async (req, res) => {
  console.log("Payment return", req.body, req.params);
});

module.exports = router;

