import { MongoClient } from "mongodb";

const DB_NAME = "meal-tracker-fsa";

export const db = {
    _dbCLient: null,
    connect: async function(url) {
        const client = await MongoClient.connect(url, {
            maxPoolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this._dbCLient = client;
    },
    getConnection: function() {
        if (!this._dbCLient){
            console.log("You need to call the connect function first");
            process.exit(1);
        }
        
        return this._dbCLient.db(DB_NAME);
    }
}