//part 1
// question 1
// console.log(__filename);
// console.log(__dirname);
// question 2
// const path=require("node:path");
// console.log(path.basename( "/user/files/report.pdf" ))
//question 3
// const path=require("node:path");
// console.log(path.posix.format( { dir: "/folder", name: "app", ext: ".js"} ));
//question 4
// const path=require("node:path");
// console.log(path.extname( "/docs/readme.md"));
//question 5
// const path=require("node:path");
// const result=path.parse(" /home/app/main.js ");
// console.log({name:result.name,ext:result.ext});
//question 6
// const path=require("node:path");
// console.log(path.isAbsolute("/home/user/file.txt"))
//question 7
// const path=require("node:path");
// console.log(path.join( "src", "components", "App.js" ));
//question 8
// const path=require("node:path");
// console.log(path.resolve("./index.js"));
//question 9
// const path=require("node:path");
// console.log(path.join( "/folder1","folder2/file.txt"));
//question 10
// const path=require("node:path");
// const fs=require("node:fs/promises");
// const pathllink=path.resolve("./file.txt");
// const result= async()=>{
//     try {
//         await  fs.rm(pathllink);
//         console.log("the file.txt is deleted");
                
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// result();
//question 11
// const path=require("node:path");
// const fs=require("node:fs");
// const fold=path.resolve("./folder 1");
// try {
//     fs.mkdirSync(fold);
//     console.log("success");
        
// } catch (error) {
//     console.log(error);
    
// }
//question 12
// const {EventEmitter}=require("node:events");
// const event=new EventEmitter();
// event.on("start",()=>{
//    console.log("Welcome event triggered!");
// })
// event.emit("start");
//question 13
// const {EventEmitter}=require("node:events");
// const event=new EventEmitter();
// event.on("login",(user)=>{
//    console.log(`User logged in: ${user}`);
// })
// event.emit("login","Ahmed");
//question 14
// const path=require("node:path");
// const fs=require("node:fs");
// const pathlink=path.resolve("./notes.txt");
// fs.readFileSync(pathlink,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);                
//     }
//     console.log(data);
    
// })
//question 15
// const path=require("node:path");
// const fs=require("node:fs/promises");
// const pathlink=path.resolve("./async.txt");
// const result= async()=>{
//     try {
//         await  fs.writeFile(pathlink,"Async save");
                
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// result();
//question 16
// const fs=require("node:fs");
// console.log(fs.existsSync("./notes.txt"));
//question 17
// const os = require("node:os");  
//     console.log( os.platform());    
//     console.log(os.arch());    
//question 18
// const path=require("node:path");
// const fs=require("node:fs");
// const pathlink=path.resolve("./big.txt" );
// const stream=fs.createReadStream(pathlink,{encoding:"utf-8"});
// stream.on("data",(chunk)=>{
//     console.log(chunk);    
// })
//question 19
// const path=require("node:path");
// const fs=require("node:fs");
// const pathlink=path.resolve( "./source.txt");
// const pathlink2=path.resolve( "./dest.txt" );
// const streamread=fs.createReadStream(pathlink,{encoding:"utf-8"});
// const streamwrite=fs.createWriteStream(pathlink2,{encoding:"utf-8"})
// streamread.on("data",(chunk)=>{
//     streamwrite.write(chunk);
// })
//question 20
// const path=require("node:path");
// const fs=require("node:fs");
// const pathlink=path.resolve( "./data.txt");
// const pathlink2=path.resolve( "./data.txt.gz" );
// const streamread=fs.createReadStream(pathlink,{encoding:"utf-8"});
// streamread.pipe(pathlink2);
//part 2
//question 1
// const path=require("node:path")
// const fs=require("node:fs/promises");
// const http=require("node:http");
// const { json } = require("node:stream/consumers");
// const server=http.createServer((req,res)=>{
//        const{url,method}=req;
//        if(url==="/user"&&method=="POST"){
//         try {
//         let bodyy="";
//         req.on("data",(chunk)=>{
//             bodyy+=chunk;            
//         })
//         req.on("end",async()=>{
//             const body=JSON.parse(bodyy);
//             const pathlink=path.resolve("./users.json");
//             let users=await fs.readFile(pathlink,{encoding:"utf-8"})
//             const{email}=body;
//             users=JSON.parse(users);
//             const result=users.findIndex((value)=>{
//                 return value.email==email;
//             })   
//             if(result!=-1){
//                res.writeHead(409,{"content-type":"application/json"})
//                res.end("message:email already exists");
//                return;
//             }   
//             users.push(body);
//             fs.writeFile(pathlink,JSON.stringify(users));
//             res.writeHead(201,{"content-type":"application/json"});
//             res.end("user added successfuly")  ;   
//         })

//         } catch (error) {
//             res.writeHead(500,{"content-type":"text/plain"});
//             res.end("something wrong ,try again");
//         }
//        } 
// })
// let port=100
// server.listen(port,()=>{
//     console.log("server is started");    
// })
//question 2
// const path=require("node:path");
// const fs=require("node:fs/promises");
// const http=require("node:http");
// const server=http.createServer((req,res)=>{
//     const{url,method}=req;
//     if(url.includes("/user/")&&method=="PATCH"){
//         let body=""
//         req.on("data",(chunk)=>{
//          body+=chunk;
//         })
//         req.on("end",async()=>{
//         try {    
//             const boddy=JSON.parse(body);   
//             const pathlink=path.resolve("./users.json");
//             let users=await fs.readFile(pathlink,{encoding:"utf-8"});
//             users=JSON.parse(users); 
//             let indexx=0;           
//             const result=users.findIndex((value,index)=>{
//                 indexx=index;
//               return  value.id==url.split("/user/")[1];
//             })   
//             if(result==-1){
                // res.writeHead(409,{"content-type":"application/json"});
                // res.end("message: user id not found");
//                 return;
//             } 
//             const{name,email,age}=boddy;
//             if(name!=undefined){
//                 users[indexx].name=name;
//             }
//             if(email!=undefined){
//                 users[indexx].email=email;
//             }
//             if(age!=undefined){
//                 users[indexx].age=age;
//             }
//             fs.writeFile(pathlink,JSON.stringify(users));
            // res.writeHead(200,{"content-type":"application/json"});
            // res.end("user formation is updated successfully");
//         } catch (error) {
//              res.writeHead(500,{"content-type":"text/plain"});
//              res.end("something wrong ,try again");
//         }
//     }
//         )
//         }
//         }
//     )     
// let port=100
// server.listen(port,()=>{
//     console.log("server is started");    
// })
//question 3
// const path=require("node:path");
// const fs=require("node:fs/promises");
// const http=require("node:http");
// const { json } = require("node:stream/consumers");
// const server=http.createServer(async(req,res)=>{
//     const{url,method}=req;
//     if(url.includes("/user/")&&method=="DELETE"){
//         try {
//              const id=url.split("/user/")[1];
//              const pathlink=path.resolve("./users.json");
//              let users=await fs.readFile(pathlink,{encoding:"utf-8"});
//              users=JSON.parse(users);
//              let index_d=0;
//             const result= users.findIndex((value,index)=>{
//                 index_d=index;
//                 return value.id==id;
//              })
//              if(result==-1){
                // res.writeHead(409,{"content-type":"application/json"});
                // res.end("message: user id not found");
//                 return;
//              }
//              let id_num=Number(id);
//              users.splice(index_d,1);
//              fs.writeFile(pathlink,JSON.stringify(users));
            // res.writeHead(200,{"content-type":"application/json"});
            // res.end("user information is deleted successfully");
//         } catch (error) {
            // res.writeHead(500,{"content-type":"text/plain"});
            // res.end("something wrong ,try again");
//         }

//     }
// })
// let port=100;
// server.listen(port,()=>{
//     console.log("server is started");   
// })
//question 4
// const path=require("node:path");
// const fs=require("node:fs/promises");
// const http=require("node:http");
// const server=http.createServer(async(req,res)=>{
//     const{url,method}=req;
//     if(url==="/user"&&method=="GET"){
//       try {
//        const pathlink=path.resolve("./users.json");
//        let users=await fs.readFile(pathlink,{encoding:"utf-8"});   
//             res.writeHead(200,{"content-type":"application/json"});
//             res.end(users);
//       } catch (error) {
//             res.writeHead(500,{"content-type":"text/plain"});
//             res.end("something wrong ,try again");        
//       }
//     }
// })
// let port=100;
// server.listen(port,()=>{
//     console.log("server is started");    
// })
//question 5
// const path=require("node:path");
// const fs=require("node:fs/promises");
// const http=require("node:http");
// const server=http.createServer(async(req,res)=>{
//     const{url,method}=req;
//     if(url.includes("/user/")&&method=="GET"){
//       try {
//        const id=url.split("/user/")[1];
//        const pathlink=path.resolve("./users.json");
//        let users=await fs.readFile(pathlink,{encoding:"utf-8"});   
//        users=JSON.parse(users);
//        let index_w=0;
//        const result=users.findIndex((value,index)=>{
//         index_w=index;
//         return value.id==id;
//        })
//        if(result==-1){
//                 res.writeHead(409,{"content-type":"application/json"});
//                 res.end("message: user id not found");
//                 return;
//        }
//             res.writeHead(200,{"content-type":"application/json"});
//             let write=JSON.stringify(users[index_w])
//             res.end(write);
//       } catch (error) {
//             res.writeHead(500,{"content-type":"text/plain"});
//             res.end("something wrong ,try again");        
//       }
//     }
// })
// let port=100;
// server.listen(port,()=>{
//     console.log("server is started");    
// })
