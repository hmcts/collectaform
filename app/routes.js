const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code after basicinfo to determine next page
router.post('/basicinfo', function (req, res) {
    // Make a variable and give it the value from 'conflict' question page
    const varconflict = req.session.data.availableforms
  
    // Check whether the user has selected Y to having a conflict
    if (varconflict === 'cop-noh') {
      // Send user to COP-NOH page
      res.redirect('/3COP-NOH')
    } else {
        if(varconflict === 'cop-co') {
            //send user to COP-NOHCO page
            res.redirect('/4COP-NOHCO')
        } else {
      // Send user to supp-docs page
      res.redirect('/5supp-docs')
    }}
  })

module.exports = router
