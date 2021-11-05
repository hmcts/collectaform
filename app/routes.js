const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code after basicinfo to determine next page
router.post('/3COP-NOH', function (req, res) {
  // Make a variable and give it the value from 'submitting' question page
  const varoption = req.session.data.availableforms

  // Check which option the user has selected on the 'submitting' page
  if (varoption === 'cop-noh') 
  {
    // Send user to COP-NOH page
    res.redirect('/3COP-NOH')
  } 
  else {
      if (varoption === 'cop-co')
      {
      // send user to COP-NOHCO page
      res.redirect('/4COP-NOHCO')
      }
      else {
      // Send user to supp-docs page
      res.redirect('/5supp-docs')
    }
  }
})

module.exports = router
