const MongoDbRepo = require("../repository/mongoDbRepository");

class JurorService { 
    constructor() { 
        this.JurorRepository = new MongoDbRepo("Jurors");
     }

     getAllJurors() {
         return this.JurorRepository.getAll();
     }

     updateJuror(_id, opt) {
         return this.JurorRepository.updateOne(_id, opt);
     }

     deleteJuror(_id) {
         return this.JurorRepository.deleteOne(_id);
     }

     createJuror(opt) { 
         return this.JurorRepository.create(opt);
      }
 }

 module.exports = JurorService;