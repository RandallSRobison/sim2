module.exports = {
  getAllHouses: async (req, res) => {
    const db = req.app.get("db");
    const allHouses = await db.get_houses();
    return res.status(200).send(allHouses);
  },

  addHouse: async (req, res) => {
    const { name, address, city, state, zipcode } = req.body;
    const db = req.app.get("db");
    const newHouse = await db.add_house([name, address, city, state, zipcode]);
    return res.status(200).send(newHouse);
  }
};
