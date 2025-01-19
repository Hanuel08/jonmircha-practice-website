


import { createServer } from "node:http";
import { galleryCardsList } from "../utils/galleryCardsList.mjs";



const methods = Object.create(null);

methods.GET = async () => {
  return {
    body: JSON.stringify(galleryCardsList),
    status: 200,
    type: "text/plain",
  };
}

const notAllowed = (request) => {
  return {
    status: 405,
    body: `Method ${request.method} not allowed`,
  }
}


createServer((request, response) => {
  let handle = methods[request.method] || notAllowed;

  handle(request)
    .catch(error => {
      console.info('error request', error.status);
      if (error.status != null) return error;
      return { body: String(error), status: 500 };
    })
    .then(({ body, status = 200, type = "text/plain" }) => {
      response.writeHead(status, {
        "Content-Type": type,
        "Access-Control-Allow-Origin": "*",
        //"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      });

      console.info("status of request", status);
  
      if (body && body.pipe) body.pipe(response);
      else response.end(body);
    })




}).listen(0, async function () {
  console.log(`http://localhost:${this.address().port}`);
});





