import 'dotenv/config';
import { Queue } from 'bullmq';
import { redis } from '../lib/redis';

console.log({ QueueName: process.env.MIGRATION_QUEUE_NAME });

export const migrationQueue = new Queue(process.env.MIGRATION_QUEUE_NAME!, {
  connection: redis,
});
