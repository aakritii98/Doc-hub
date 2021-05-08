const mongoose = require('mongoose');
const router = require('../routes/pageRoutes');


const teacherRecordsSchema = mongoose.Schema({
    record_type: {
        type: String,
        required: true
    },
    research_title: {
        type: String
    },
    research_fundingAgency: {
        type: String
    },
    research_amount: {
        type: Number
    },
    conference_nature: {
        type: String
    },
    conference_title: {
        type: String
    },
    conference_place: {
        type: String
    },
    conference_date: {
        type: Date
    },
    conference_details: {
        type: String
    },

    symposia_nature: {
        type: String
    },
    symposia_title: {
        type: String
    },
    symposia_place: {
        type: String
    },
    symposia_date: {
        type: Date
    },
    symposia_details: {
        type: String
    },

    seminar_nature: {
        type: String
    },
    seminar_title: {
        type: String
    },
    seminar_place: {
        type: String
    },
    seminar_date: {
        type: Date
    },
    seminar_details: {
        type: String
    },


    workshop_nature: {
        type: String
    },
    workshop_title: {
        type: String
    },
    workshop_place: {
        type: String
    },
    workshop_date: {
        type: Date
    },
    workshop_details: {
        type: String
    },

    publication_nature: {
        type: String
    },
    publication_title: {
        type: String
    },
    publication_name: {
        type: String
    },
    publication_date: {
        type: Date
    },

    book_type: {
        type: String
    },
    book_title: {
        type: String
    },
    book_auther: {
        type: String
    },
    book_publisher: {
        type: Date
    },
    book_releaseDate: {
        type: Date
    },

    award_title: {
        type: String
    },
    award_date: {
        type: Date
    },  
    award_details:{
        type:String
    }

})

module.exports = teacherRecordsSchema;