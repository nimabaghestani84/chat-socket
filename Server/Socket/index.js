import { Server } from "socket.io";
import {createServer}from 'http';
import express from "express";
import { Socket } from "dgram";

const app=express()
const server=createServer(app)
const io =new server(server,{
    cors:'*',
});

const onlineUser={}

export const getSocketId=(receiveId)=>{
    let socketIdArray=[]
    for (const userId of receiveId) {
        socketIdArray.push(onlineUser[userId])
    }
    return socketIdArray
}

io.on('connection',(socket)=>{
    const userId=socket.handshake.query.userId
    if (userId != 'undefined') {
        onlineUser[userId]
        io.emit('getOnlineUser',Object.keys(onlineUser))
    }
})

export {io,server,app}