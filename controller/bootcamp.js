const Bootcamp = require("../model/bootcamp_model");
const validateBootcamp = require("../utils/validate");
//get a single payload from the database
exports.getBootcamp = async (req, res) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  //destruturing the bootcamp
  const { email, name, country } = bootcamp;

  if (!bootcamp)
    return res
      .status(400)
      .send(`this ID ${req.params.id} is not found on Database`);
  res.json({ message: "successful", data: { email, name, country } });
};
//get all payload from the database
exports.getBootcamps = async (req, res) => {
  let conditions = {};
  if (req.query.country) {
    conditions.country = req.query.country;
  }
  if (req.query.name) {
    conditions.name = req.query.name;
  }
  const bootcamps = await Bootcamp.find(conditions);
  if (bootcamps.length === 0)
    return res.status(400).json({ message: "unsuccessful" });
  res.json({ message: "successful", data: bootcamps });
};
//delete a single data
exports.deleteBootcamp = async (req, res) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp)
    return res.status(404).send(`the given id ${req.params.id}  not found `);
  res.json({ message: "successful", data: `data deleted successfully` });
};

//update data using the query first approach
exports.updateBootcamp = async (req, res) => {
  //query first approach

  const { error } = validateBootcamp(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }
  let bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp)
    return res.status(404).send(`the given id ${req.params.id}  not found`);
  bootcamp.set(req.body);
  bootcamp = await bootcamp.save();
  res.json({ message: "successfully updated", data: bootcamp });
};
//create a singe data using the post method
exports.createBootcamp = async (req, res) => {
  //check if the request meet the defined parameters set with the joi validation
  const { error } = validateBootcamp(req.body);
  //at this point it will throw the error to client if the field is incorrect
  if (error) {
    return res.status(404).send(error.details[0].message);
  }
  //destructure the req.body
  const { email } = req.body;
  //check if email already exist on database
  let bootcamp = await Bootcamp.findOne({ email });
  if (bootcamp) res.status(401).send(`email alreay exist`);

  //create the data and save on database...
  bootcamp = await Bootcamp.create(req.body);
  bootcamp = await bootcamp.save();
  res.json({ message: "successful", data: bootcamp });
};
