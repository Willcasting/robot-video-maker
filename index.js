const readline = require('readline-sync')


/*função criada para solicitar o usuário: 
O termo de pesquisa
O Prefixo para o titulo
*/
function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    //faz uma pergunta para o usuário
    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikpedia serarch term: ')
    }
    //Pede para selecionar uma opção
    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectdPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectdPrefixIndex]

        return selectedPrefixText

    }

    console.log(content)
}

start()