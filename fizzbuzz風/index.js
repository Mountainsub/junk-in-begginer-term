const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   const endpoint = req.url;
   if( endpoint==='/start' ){
      fs.readFile('./index.html',(err, data)=>{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   if( endpoint==='/api' ){
      // ここに処理を記述してください。
    let i;
    var array  = new Array();
    for(i = 1; i <= 30; i++){
        if(i % 7 === 0 && i % 8 ===0 && i % 15 === 0){
            array[i-1]="fizzbuzzhogehuga";//配列は0番目から配置する
        }
        //8で割れるならば4でも割れる
        else if(i % 7 === 0 && i % 8 ===0 ){
            array[i-1]="fizzbuzzhoge";
        }
        else if(i % 8 === 0 && i % 15 ===0 ){
            array[i-1]="fizzhogehuga";
        }
        //8で割れなくとも4でも割れる場合がある。例:20
        else if((i % 4 === 0 && i % 7 === 0 && i % 15 ===0 ){
            array[i-1]="fizzbuzzhuga";
        }
        else if((i % 7 === 0 && i % 15 ===0 ){
            array[i-1]="hogehuga";
        }
        else if(i % 15 === 0){
            array[i-1]="huga";
        }
         //8で割れるならば4でも割れる
        else if(i % 8 === 0){
            array[i-1]="fizzhoge";
        }
        else if(i % 7 === 0){
            array[i-1]="buzz";
        }
        else if(i % 4 === 0){
           array[i-1]="fizz";
        }
        else{
           array[i-1]=i;
        }
    }
    return func;
   }
});
server.listen(8080); 
