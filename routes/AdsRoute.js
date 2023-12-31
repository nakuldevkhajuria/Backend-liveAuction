const express = require("express");
const { isAuthorized } = require("../middlewares/isAuthorized");
const { addAd, retrieveAds ,findAd,deleteAd, updateAd } = require("../controllers/CreateAds");
const { check } = require("express-validator");

const router = express.Router();

router.post('/',
isAuthorized,
[
  check('productName', 'Invalid productName').trim().not().isEmpty(),
  check('basePrice', 'Invalid basePrice').trim().isNumeric(),
  check('duration', 'Invalid duration').trim().isNumeric(),
],
addAd)


// @route   GET /ad?user=<userId>&option=<active>
// @desc    Retrieve list of all ads. Optional query param of user.
// @access  protected
router.get('/?', isAuthorized, retrieveAds);

// // @route   GET api/ads/:id
// // @desc   find one ad
// // @access  protected
router.get('/:id', isAuthorized,findAd);


// // @route   GET api/ads/:id
// // @desc   update one ad
// // @access  protected
router.put("/:id", isAuthorized,updateAd);


// // @route   GET api/ads/:id
// // @desc   delete one ad
// // @access  protected
router.delete("/:id", isAuthorized,deleteAd);


module.exports = router