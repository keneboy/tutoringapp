const Bootcamp = require("../model/bootcamp_model");
const validateBootcamp = require("../utils/validate");
//get a single payload from the database
exports.getBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
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
exports.createBootcamp = async (req, res) => {
  try {
    const { error } = validateBootcamp(req.body);
    if (error) {
      return res.status(404).send(error.details[0].message);
    }
    let bootcamp = await new Bootcamp(req.body);
    bootcamp = await bootcamp.save();
    res.json({ message: "successful", data: bootcamp });
  } catch (err) {
    res.status(400).send({ message: "unsuccessful", Error: err.message });
  }
};
