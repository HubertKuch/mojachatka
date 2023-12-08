const { getOffers } = require('../services/manageOffers')

class OffersController {
  static async getOffers() {
    const { page, boosted } = req.query

    const thePage = page || 1

    try {
      const offers = await getOffers(thePage, process.env.LIMIT_PER_PAGE, boosted)

      if (offers === "Server Error") {
        res.status(500).json({ message: "Internal Server Error" })
        return
      }


      res.status(200).json({ message: "Successfull", offers })


    } catch (err) {
      console.error(err)
      res.status(500).json({ message: "Internal Server Error" })
      return
    }

  }
}

module.exports = OffersController;

