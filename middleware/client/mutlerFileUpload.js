const multer = require('multer');
require('dotenv').config();

// initialization
const storage = multer.diskStorage(
    {
        destination : process.env.clientProfileImageStoragePath,
        filename : (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * Date.now());
            const ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
            cb(null, uniqueSuffix + file.originalname.replaceAll(' ', '-'));
        }
    }
)


const clientProfileuploads = multer({storage});

module.exports = clientProfileuploads;