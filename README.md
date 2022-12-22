# PROXY ROTATIVO PARA WEBSCRAPING

![GitHub repo size](https://img.shields.io/github/repo-size/Dixavado/central?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Dixavado/central?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Dixavado/central?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/Dixavado/central?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Dixavado/central?style=for-the-badge)

<img src="https://pps.whatsapp.net/v/t61.24694-24/316557920_1153595125274157_1819013421079086936_n.jpg?ccb=11-4&oh=01_AdS1mePUAdoE_OOakL8OjOuU4ADDcvKwmrzGCWQevmDo9A&oe=63A98BA8" alt="exemplo imagem">


### Ajustes e melhorias

Esse projeto serve como base para o uso de proxy rotativa em webscraping
Com a necessidade de se consumir um ip de proxy diferente a cada requisiçao, criei esse script para me auxiliar na obtençao de uma lista de proxy, a randomizaçao dessa lista, e a possibilidade e importar esse script de forma rapida e simples em sua aplicaçao Puppeteer.

- [x] Consome os dados do site https://www.sslproxies.org

### Como utilizar

# - Faça o download do script e coloque na pasta de seu Projeto
- Sinta-se a vontade para modifica-lo ao seu gosto

```
const proxye = require('../renner/proxy');

//API DE PROXY
    const ProxyAPI = await proxye.proxy();
    var [email,senha] = line.split("|");
    var getProxy = fs.readFileSync("proxy.json", "utf8")
    const ip = JSON.parse(getProxy);
    const ip1 = ip.ip
    console.log(`💉 Proxy => ${ip1}`)
```


## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/316557920_1153595125274157_1819013421079086936_n.jpg?ccb=11-4&oh=01_AdS1mePUAdoE_OOakL8OjOuU4ADDcvKwmrzGCWQevmDo9A&oe=63A98BA8" width="100px;" alt="Dixavado"/><br>
        <sub>
          <b>Dii Xavado</b>
        </sub>
      </a>
  </tr>
</table>

