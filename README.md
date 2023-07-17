# Random Text Generator

This code generates random text and interacts with a web server to send and retrieve text data. It utilizes JavaScript and the DOM (Document Object Model) to manipulate HTML elements dynamically.

## Prerequisites

Make sure you have the following:

- A web browser that supports JavaScript.
- A web server running locally on `http://127.0.0.1:3008`.

## Code Description

### Variables and Configuration

- `divsText`: Selects all elements with the class name "text" from the HTML document.
- `getRandomNumber`: A function that generates a random number within a specified range.
- `config`: An object containing configuration settings for generating text, including minimum and maximum values for paragraphs, words, and letters.

### `generateText` Function

This function generates random text based on the provided number of paragraphs.

1. Initialize an empty `text` variable.
2. Iterate over the number of paragraphs specified.
3. For each paragraph:
   - Generate a random number of words within the configured range.
   - Append the paragraph number and a capital letter to the `text` variable.
   - Iterate over the number of words:
     - Generate a random number of letters within the configured range.
     - Append randomly generated lowercase letters to the `text` variable.
     - Add a space character between words, except for the last word in the paragraph.
   - Add a period character at the end of the paragraph.
   - Add a line break character.
4. Send the generated text to the server using the Fetch API with a POST request to `http://127.0.0.1:3008/home/sendText`.
5. Log the response data to the console.
6. Return the generated text.

### Generating and Displaying Random Text

1. Convert the `divsText` NodeList to an array and iterate over each element.
2. For each element:
   - Create an `<h2>` element and set its innerHTML to indicate the text is random and its corresponding index.
   - Append the `<h2>` element to the current `divText` element.
   - Generate random text using the `generateText` function, specifying the number of paragraphs within the configured range.
   - Format the generated text by replacing newline characters with `<br>` tags.
   - Create a `<p>` element and set its innerHTML to the formatted text.
   - Append the `<p>` element to the current `divText` element.

### Retrieving Random Text from the Database

1. Send a GET request to `http://127.0.0.1:3008/home/listTexts` using the Fetch API.
2. Convert the response to JSON.
3. Find the HTML element with the class name "article-top".
4. Create an `<h2>` element and set its innerHTML to indicate that the text is random and from the database.
5. Append the `<h2>` element to the "article-top" element.
6. Generate a random index within the range of the received text array.
7. Retrieve the text at the random index.
8. Format the retrieved text by replacing newline characters with `<br>` tags.
9. Create a `<p>` element and set its innerHTML to the formatted text.
10. Append the `<p>` element to the "article-top" element.

## Usage

To use this code:

1. Ensure you have a web server running locally on `http://127.0.0.1:3008`.
2. Include the JavaScript code in your HTML file.
3. The code will select elements with the class name "text" and generate random text for each element, displaying it in the corresponding HTML elements.
4. The code will also retrieve random text from the server's database and display it in the "article-top" element.

Please note that you may need to modify the code to suit your specific server and HTML structure.

----

# Gerador de Texto Aleatório

Este código gera texto aleatório e interage com um servidor web para enviar e obter dados de texto. Ele utiliza JavaScript e o DOM (Document Object Model) para manipular elementos HTML dinamicamente.

## Pré-requisitos

Certifique-se de ter o seguinte:

- Um navegador da web que suporte JavaScript.
- Um servidor web em execução localmente em `http://127.0.0.1:3008`.

## Descrição do Código

### Variáveis e Configuração

- `divsText`: Seleciona todos os elementos com a classe "text" do documento HTML.
- `getRandomNumber`: Uma função que gera um número aleatório dentro de uma faixa específica.
- `config`: Um objeto contendo as configurações para gerar texto, incluindo valores mínimos e máximos para parágrafos, palavras e letras.

### Função `generateText`

Esta função gera texto aleatório com base no número de parágrafos fornecido.

1. Inicializa uma variável vazia `text`.
2. Itera sobre o número de parágrafos especificado.
3. Para cada parágrafo:
   - Gera um número aleatório de palavras dentro da faixa configurada.
   - Adiciona o número do parágrafo e uma letra maiúscula à variável `text`.
   - Itera sobre o número de palavras:
     - Gera um número aleatório de letras dentro da faixa configurada.
     - Adiciona letras minúsculas geradas aleatoriamente à variável `text`.
     - Adiciona um espaço entre as palavras, exceto para a última palavra do parágrafo.
   - Adiciona um ponto ao final do parágrafo.
   - Adiciona uma quebra de linha.
4. Envia o texto gerado para o servidor usando a API Fetch com uma requisição POST para `http://127.0.0.1:3008/home/sendText`.
5. Registra os dados de resposta no console.
6. Retorna o texto gerado.

### Geração e Exibição de Texto Aleatório

1. Converte a lista NodeList `divsText` em um array e itera sobre cada elemento.
2. Para cada elemento:
   - Cria um elemento `<h2>` e define seu conteúdo interno para indicar que o texto é aleatório e seu índice correspondente.
   - Anexa o elemento `<h2>` ao elemento `divText` atual.
   - Gera texto aleatório usando a função `generateText`, especificando o número de parágrafos dentro da faixa configurada.
   - Formata o texto gerado substituindo caracteres de quebra de linha por tags `<br>`.
   - Cria um elemento `<p>` e define seu conteúdo interno para o texto formatado.
   - Anexa o elemento `<p>` ao elemento `divText` atual.

### Obtendo Texto Aleatório do Banco de Dados

1. Envia uma requisição GET para `http://127.0.0.1:3008/home/listTexts` usando a API Fetch.
2. Converte a resposta para JSON.
3. Encontra o elemento HTML com a classe "article-top".
4. Cria um elemento `<h2>` e define seu conteúdo interno para indicar que o texto é aleatório e do banco de dados.
5. Anexa o elemento `<h2>` ao elemento "article-top".
6. Gera um índice aleatório dentro da faixa do array de texto recebido.
7. Obtém o texto no índice aleatório.
8. Formata o texto obtido substituindo caracteres de quebra de linha por tags `<br>`.
9. Cria um elemento `<p>` e define seu conteúdo interno para o texto formatado.
10. Anexa o elemento `<p>` ao elemento "article-top".

## Uso

Para usar este código:

1. Certifique-se de ter um servidor web em execução localmente em `http://127.0.0.1:3008`.
2. Inclua o código JavaScript no seu arquivo HTML.
3. O código irá selecionar elementos com a classe "text" e gerar texto aleatório para cada elemento, exibindo-o nos elementos HTML correspondentes.
4. O código também irá recuperar texto aleatório do banco de dados do servidor e exibi-lo no elemento "article-top".

Por favor, note que você pode precisar modificar o código para adequá-lo ao seu servidor específico e à estrutura HTML.