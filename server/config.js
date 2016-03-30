exports.config = {

    fb: {
        appID: process.env.ZM_FB_APP_ID,
        appSecret: process.env.ZM_FB_SECRET
    },
    url: "https://zeldammo.herokuapp.com/",
    db:{
        DB_HOST:process.env.ZDB_HOST,
        DB_PASS:process.env.ZDB_HOST,
        DB_DIALECT:process.env.ZDB_DIALECT
    }
};