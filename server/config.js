exports.config = {
    auth:{
      facebook: {
          appID: process.env.ZM_FB_APP_ID,
          appSecret: process.env.ZM_FB_SECRET
      },
    },
    url: "https://zeldammo.herokuapp.com/",
    database:{
        DB_HOST:process.env.ZM_DB_HOST,
        DB_PASS:process.env.ZM_DB_PASS,
        DB_DIALECT:process.env.ZDB_DIALECT
    }
};
