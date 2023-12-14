const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importing data from data.json file
const data = require('../data.json');

// Main route to return all data
app.get('/', (req, res) => {
  res.json(data);
});

// Route to get basic team details
app.get('/team-details', (req, res) => {
  const { Team_Size, Unit_Type, Specialization } = data.Operational_Detachment_Alpha;
  res.json({ Team_Size, Unit_Type, Specialization });
});

// Route to get all members
app.get('/members', (req, res) => {
  res.json(data.Operational_Detachment_Alpha.Members);
});

// Route to get specific member details
app.get('/members/:memberName', (req, res) => {
  const memberName = req.params.memberName;
  const member = data.Operational_Detachment_Alpha.Members.find(m => m.Name.toLowerCase() === memberName.toLowerCase());
  if (member) {
    res.json(member);
  } else {
    res.status(404).send('Member not found');
  }
});

// Route to get members by paygrade
app.get('/members/paygrade/:paygrade', (req, res) => {
  const members = data.Operational_Detachment_Alpha.Members.filter(member => member.Paygrade === req.params.paygrade);
  if (members.length > 0) {
    res.json(members);
  } else {
    res.status(404).send('No members found with this paygrade');
  }
});

// Route to get members by MOS
app.get('/members/mos/:mos', (req, res) => {
  const mos = req.params.mos;
  const members = data.Operational_Detachment_Alpha.Members.filter(member => member.MOS.includes(mos));
  if (members.length > 0) {
    res.json(members);
  } else {
    res.status(404).send('No members found with this MOS');
  }
});

// Route to get members by time in Special Forces
app.get('/members/time/:years', (req, res) => {
  const years = req.params.years;
  const members = data.Operational_Detachment_Alpha.Members.filter(member => member.Time_in_Special_Forces === years);
  if (members.length > 0) {
    res.json(members);
  } else {
    res.status(404).send('No members found with this time in Special Forces');
  }
});

// Route to get gear details of a specific member
app.get('/members/:memberName/gear', (req, res) => {
  const memberName = req.params.memberName;
  const member = data.Operational_Detachment_Alpha.Members.find(m => m.Name.toLowerCase() === memberName.toLowerCase());
  if (member) {
    res.json(member.Gear);
  } else {
    res.status(404).send('Member not found');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
