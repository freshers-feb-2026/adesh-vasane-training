import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
schema: "prisma/schema.prisma",
datasource : {
    url : "postgresql://neondb_owner:npg_g98cPYxWEzwX@ep-dawn-credit-a4z2zdm6-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
}
});
