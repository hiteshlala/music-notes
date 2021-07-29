const http = require( 'http' );
const fs = require( 'fs' );

const port = 5000;

const server = http.createServer(( req, res ) => {
  // console.log( req );
  console.log( req.method, req.url );
  
  if ( req.method === 'OPTIONS' ) {
    res.statusCode = 200;
    res.setHeader( 'Access-Control-Allow-Methods', 'POST, HEAD, PATCH, DELETE, GET, PUT, DELETE' );
    res.setHeader( 'Access-Control-Allow-Origin', '*');
    res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type, Location');
    res.end();
  }
  
  else if ( req.method === 'GET' ) {
    res.statusCode = 200;
    // res.setHeader( 'Content-Type', 'application/json');
    // const data = {
    //   message: 'success'
    // };
    // res.end( JSON.stringify( data ) );

    res.setHeader( 'Content-Type', 'text/html');
    fs.createReadStream('ookpik-waltz.html').pipe(res);
  }
  
  else if ( req.method === 'POST' ) {
    // const fname = `data/data-${Date.now()}.json`;
    // const out = fs.createWriteStream( fname );
    
    // req.pipe( out )
    // .on( 'finish', () => {
    //   out.close();
    //   out.destroy();
    //   res.statusCode = 200;
    //   res.status = 200;
    //   res.setHeader( 'Content-Type', 'application/json');
    //   const data = {
    //     message: 'saved'
    //   };
    //   res.end( JSON.stringify( data ) );
    // });
  }
  
});

server.on( 'error', error => {
  console.log( 'Server Error' );
  console.log( 'message:', error.message );
  console.log( 'code:', error.code );
  console.log( 'stack:', error.stack );
});

server.listen( port, () => {
  console.log( `server listening on port ${port}`);
});
