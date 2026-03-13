import { Worker } from "bullmq";
import { redis } from "./lib/redis";
const worker = new Worker("migration-queue", async (job) => {
    console.log({ job });
}, {
    connection: redis
});
console.log("Migration worker is working");
//# sourceMappingURL=worker.js.map