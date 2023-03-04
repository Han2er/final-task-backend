import mongoose from "mongoose";
import { PORT } from "./constants";

import * as serverService from "./services/server.service";

(async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://${han2er}:${hOMOmoIw0jt9mcms}@${pms-cluster.n4lwfql}.mongodb.net/managerApp"
      "mongodb+srv://han2er:hOMOmoIw0jt9mcms@pms-cluster.n4lwfql.mongodb.net/?retrywrites=true&w=majority"
    );
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
