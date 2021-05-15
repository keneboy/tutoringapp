const Bootcamp = require("../model/bootcamp_model");
const validateBootcamp = require("../utils/validate");
//get a single payload from the database
exports.getBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    //destruturing the bootcamp
    const { email, name, country } = bootcamp;

    if (!bootcamp)
      return res
        .status(400)
        .send(`this ID ${req.params.id} is not found on Database`);
    res.json({ message: "successful", data: { email, name, country } });
  } catch (err) {
    res.send(`Error:${err.message}`);
  }
};
//get all payload from the database
exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.json({ message: "successful", data: bootcamps });
  } catch (err) {
    res.send(`Error:${err.message}`);
  }
};
//delete a single data
exports.deleteBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp)
      return res.status(404).send(`id not found with given ${req.params.id}`);
    res.json({ message: "successful", data: `data deleted successfully` });
  } catch (err) {
    res.status(400).send({ message: "unsuccessful", Error: err.message });
  }
};

//update data using the query first approach
exports.updateBootcamp = async (req, res) => {
  //query first approach
  try {
    const { error } = validateBootcamp(req.body);
    if (error) {
      return res.status(404).send(error.details[0].message);
    }
    let bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp)
      return res.status(404).send(`id not found with given ${req.params.id}`);
    bootcamp.set(req.body);
    bootcamp = await bootcamp.save();
    res.json({ message: "successfully updated", data: bootcamp });
  } catch (err) {
    res.status(400).send({ message: "unsuccessful", Error: err.message });
  }
};
//create a singe data using the post method
exports.createBootcamp = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).send({ message: "unsuccessful", Error: err.message });
  }
};
