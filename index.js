const cv = require('opencv4nodejs');
const makeHandMask = require('./utils/makeHandMask');
const getHandContour = require('./utils/getHandContour');
const getRoughHull = require('./utils/getRoughHull');

const img = cv.imread("./assets/hand.png");
const imgMask = makeHandMask(img);
const imgContour = getHandContour(imgMask);

console.log(imgContour);

// cv.imwrite('./assets/hand_mask.png', imgMask);
// cv.imwrite('./assets/hand_contour.png', imgContour);