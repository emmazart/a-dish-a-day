const { Schema, model } = require('mongoose');


//ALL FIELD NAMES WILL BE SINGULAR
//<filename(lowercase)>Schema
const tagSchema = new Schema(
    {
        tag: { //TO BE SEPERATED BY COMMA
            type: Array,
            required: true,
            unique: true,
        }

    });

const Tag = model('Tag', tagSchema);
module.exports('Tag');