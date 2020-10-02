// VARIABLE
const multer = require('multer');

// CONFIG MULTER STORAGE AND FILE TYPE
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/img')
    },
    filename : (req, file, cb) => {
        const date = new Date().toLocaleDateString();
        cb(null, date + "-" + Math.round(Math.random() * 10000) + "-" + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error("L'image n'est pas acceptée"), false)
    }
}

// CONFIG UPLOAD (FROM STORAGE AND FILEFILTER)
const upload = multer({
    storage : storage,
    limits  : {
        fileSize : 1024 * 1024 * 5
    },
    fileFilter : fileFilter
});

module.exports = upload;