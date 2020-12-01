# Debounce

O debounce consiste, resumidamente, em uma espera de execução entre eventos. Suponhamos que dado um `input` do (HTML)[], precisemos usar o seu conteúdo para fazer uma consulta a uma API.

Fazer o acesso a API a cada alteração do campo é algo funcional, mas impacta em uma grande utilização de recursos, de maneira... desnecessária. Esta é uma situação em que a espera de um periodo de tempo entre os eventos de digitação pode ajudar.

Esquema:

<div align="center">

![Esquema de funcionamento do debounce](./.github/images/debounce-schema.png)

</div>

Nos arquivos deste repositório será possível encontrar este exemplo:

![Exemplo do uso de debounce](./.github/images/preview.png)