const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.send({
      status: 200,
      data: members,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
});

// get one members
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findOne({ 'Member ID': req.params.id });
    res.send({
      status: 200,
      data: member,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
});

module.exports = router;
