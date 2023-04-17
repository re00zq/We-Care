const path = require('path');

const sharp = require('sharp');

module.exports = (height, width, destination, fileName, quality = 90) => {
  return (req, res, next) => {
    if (!req.file) next();
    req.file.filename = `${fileName}-${req.user._id}-${Date.now()}.jpeg`;
    sharp(req.file.buffer)
      .resize(height, width)
      .toFormat('jpeg')
      .jpeg({ quality })
      .toFile(
        path.join(
          __dirname,
          '..',
          'public',
          'img',
          destination,
          req.file.filename
        )
      );
    next();
  };
};
