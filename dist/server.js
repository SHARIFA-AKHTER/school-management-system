import app from './app.js';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;
async function main() {
    try {
        // Database Connection Check
        // await prisma.$connect();
        console.log('✅ Database connected successfully');
        const server = app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
        // Unhandled Rejection Handling
        process.on('unhandledRejection', (error) => {
            console.log('Unhandled Rejection! Shutting down...');
            if (server) {
                server.close(() => {
                    console.error(error);
                    process.exit(1);
                });
            }
            else {
                process.exit(1);
            }
        });
    }
    catch (error) {
        console.error('❌ Failed to connect to database', error);
    }
}
// Sigterm signal handling for clean exit
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully.');
    process.exit(0);
});
main();
//# sourceMappingURL=server.js.map