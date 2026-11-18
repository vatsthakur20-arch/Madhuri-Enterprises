const Contact = require('../models/Contact');

// @POST /api/contact
const submitContact = async (req, res, next) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone are required' });
    }

    const contact = await Contact.create({ name, phone, message });

    res.status(201).json({
      success: true,
      message: 'Message received! We will contact you shortly.',
      data: { _id: contact._id, name: contact.name },
    });
  } catch (err) {
    next(err);
  }
};

// @GET /api/contact  (admin)
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    next(err);
  }
};

module.exports = { submitContact, getAllContacts };
