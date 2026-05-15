const socketIo = require('socket.io');

let io;

module.exports = {
    init: (httpServer) => {
        io = socketIo(httpServer, {
            cors: {
                origin: "*", // Configure this in production to match your frontend domain
                methods: ["GET", "POST"]
            }
        });

        io.on('connection', (socket) => {
            console.log(`Client connected: ${socket.id}`);

            // When a client joins, they can join a specific "troop room"
            socket.on('join_troop_room', (troopId) => {
                const roomName = `troop_${troopId}`;
                socket.join(roomName);
                console.log(`Socket ${socket.id} joined room ${roomName}`);
            });

            // Handle client disconnection
            socket.on('disconnect', () => {
                console.log(`Client disconnected: ${socket.id}`);
            });
        });

        return io;
    },
    
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        return io;
    },

    // Broadcast XP update to a specific troop room
    broadcastXpUpdate: (troopId, userId, newTotalXp, knotName) => {
        if (io) {
            io.to(`troop_${troopId}`).emit('xp_updated', {
                userId,
                newTotalXp,
                message: `earned XP for mastering the ${knotName}!`,
                timestamp: new Date().toISOString()
            });
        }
    }
};
