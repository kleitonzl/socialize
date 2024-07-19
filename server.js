import http from 'node:http'
const PORT = 3333

const usuarios = []

const server = http.createServer((request, response) => {
    const {method, url} = request

    if(url === '/usuario' && method === "POST"){
        let body = ''

        request.on('data', chunk => {
            body += chunk.toString()
        })
        request.on('end', () => {
            const novousuario = JSON.parse(body);
            usuarios.push(novousuario)

            response.writeHead(403, {'Content-Type':'application/json'})
            return response.end(JSON.stringify({message: 'Usuario não encontrado'}))
        })
    }else{
        response.writeHead(404, { 'content-Type': "aplication.json" })
        response.end(JSON.stringify({ message: "Pagina nao encontrada" }))
    }
   
})
server.listen(PORT, () => {
    console.log(`Servidor on PORT👍: ${PORT}`)
})