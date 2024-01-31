const multer = require('multer');

// initialization
const storage = multer.diskStorage(
    {
        destination : 'uploads/profile-images',
        filename : (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * Date.now());
            cb(null, uniqueSuffix + file.originalname);
        }
    }
)

const uploads = multer({storage});

module.exports = uploads;