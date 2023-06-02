/**
 * RTS peer server
 * @date 20.05.2023
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @author Duishenaliev Erdar <erdan.duos@gmail.com>
 */

// config variables
const peerport = process.env.PORT || 3332;
const host = process.env.HOST || "localhost"
const { PeerServer } = require("peer");

// запуск PeerJs сервера
const peerServer = PeerServer(
    {
        host: host,
        port: peerport,
        path: "/peerjs"
    }, ()=>{
        console.log(`Peer server is running on http://${host}:${peerport}`);
    })