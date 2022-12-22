const request = require("request");
const cheerio = require("cheerio");
utf8 = require("utf8"),
fs = require("fs")

exports.proxy = () => {
let ip_addresses = [];
let port_numbers = [];

        //ACESSA A URL E RETORNA A LISTA DE PROXY FREE
        request("https://www.sslproxies.org", function(error, response, html) {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            //PEGA O IP NA PAGINA
            $("td:nth-child(1)").each(function(index, value) {
            ip_addresses[index] = $(this).text();
            });
            //PEGA A PORTA NA PAGINA
            $("td:nth-child(2)").each(function(index, value) {
            port_numbers[index] = $(this).text();
            });
        } else {
            console.log("Erro ao carregar a lista de proxy");
        }

        ip_addresses.join(", ");
        port_numbers.join(", ");

        //MOSTRAR LISTA DE PROXY
        //console.log("IP Addresses:", ip_addresses);
        //console.log("Port Numbers:", port_numbers);
        
        //FUNÇAO PRA PEGAR 1 IP E PORTA ALEATORIOS DA PAGINA( FUNÇAO ROTATIVA )
        let random_number = Math.floor(Math.random() * 100);
        //console.log(ip_addresses[random_number]);
        //console.log(port_numbers[random_number]);
        let proxy = `💉 Proxy => ${ip_addresses[random_number]}:${port_numbers[random_number]} 💉`;
        //console.log(proxy);

        //SALVA UM ARQUIVO NO FORMATO JSON COM O PROXY
        //PRONTO PARA SER CONSUMIDO PELO NOSSO SCRAPER
        fs.writeFile('proxy.json', `{"ip":"${ip_addresses[random_number]}:${port_numbers[random_number]}"}`, function (err){});
        });
}