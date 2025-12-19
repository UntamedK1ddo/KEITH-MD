/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VV25KiSBD9l3rVmOYuGtERKwiCgK2I1415KKGAkmtXFSpO+O8b6PT0POxO9PJUZGWcPJl5MusHKCtMkYNaMPoBaoLPkKHuyNoagRHQmjhGBPRBBBkEIyBMoaFsyzaYhxQqAbIDdAjGeqDMrMF746pJJtu21g7XG+kV3Pugbo45Dv8AqMvqzVl6XL48JWcssLTGxvGqpETle5v0YKjlLPXnhnpLw1dw7xAhJrhMjDpFBSIwd1C7gJh8jX7oINgL/bMyW/GpROhFEPn1IqlPcxL7WeHYV2dmmEt8Ltdfo2+myr6N5URSCVm3GUf8mk1dCmUqWMNwKkGBn030+VrnpCd9ipMSRXaESoZZ+/W6L04pb/Z41JNeyrdA6gWeZSvecv4SFD3Zmsv2OyuG5uHN3H+NuD3wtIwnsrMrc9F26+uNqIUu0Plg5Q6bo5gWxiz1nQRest+JL8iHVrL/U/dsbGecxaeGPVEvg/ne8eXFuCDnYxNTA04uUrrz0JRbVeUX6TeK0QsKMtgfsvcijUWzDkLOkgbtrYXFJtPXNdkY+mQhptwnfcga8ieWDj/N3AGl6ktPFcoMcvFBooLmQrPB292Ki44OO/RmQ4/5qyi5WEErX301mOrnHY1P13JW2Zq5WW2Nc1m4kburfHehj18fGWWotSMw4u99QFCCKSOQ4arsbIKo9AGMzisUEsQe5QWbCmuu3Wi79+ZE1jcSCsxq9/Y8SDZNeai0jXKxCV/OVq73CvqgJlWIKEWRhSmrSOshSmGCKBj9/b0PSnRlz8Z14US+D2JMKFuXTZ1XMPro6sclDMOqKdmqLUO9OyACRtynGTGGy4R2dWxKSMIUn5GeQkbBKIY5Rb8yRARFYMRIg35NrV5FXeGFwBg45moH+qB4NARHnVWWeF7i+SHHyyNJ/Yt+u3SwsK6/lYiBPsifboqgcjInDrmhwslK59ld3H8x7AAjxCDOabdg5g1TPToxZsEx96rpVLOTsZ6MwWdGH9J4lv6gWnBu3gZ1zO/f6+F53/LTSxAszIMvL/VxuNl5x2nhC/tl9fovIGAEbi1vG8YJDp03febr/lbm97bt6cpMfZtPcg1LZXPxDFVQxQ3XOhtjK6r6Uenloa825zVvvhzX/l4SB7vJTlws7Jf9uNSWr120CJ1xiH4P5t30eru+mgPfTfzFyfDI4i3aZ70i5jhJO7U8Y9ddO8TWMqlEc5JoJD+4rYonU307n7vBzCZ+kq2xl/LR2zJtNpMomyRP0T6GJv+5rPBDTl2vut8Yo8fsl7BAX+ndk3gnMe7e/w3j5zb5j4nUtrEmnPywp+yGW+c9Pgoe86nB3a7bNVqPE8vc3KbXOosKwwH3+/c+qHPI4ooUYARgGZEKR6APSNV0mrXLuPrTUzTmbG2Z6F3mOaRs/DkHAS4QZbCowYgfKAov8aIkPr0WpKotSFMwArwjpZbUibod1/WKQfYxVmD8+KYSuP8DYRsgAnIHAAA=
> *Made on Earth by man 🗿*';
const dev = process.env.OWNER_NUMBER || '254746098485';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
