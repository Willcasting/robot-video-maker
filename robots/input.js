const readline = require("readline-sync");
const state = require("./state.js");

function robot() {
  const content = {
    maximumSentences: 7,
  };

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  content.lang = askAndReturnLanguage();
  state.save(content);

  function askAndReturnSearchTerm() {
    return readline.question("Type a Wikpedia serarch term: ");
  }

  function askAndReturnPrefix() {
    const prefixes = [
      "Who is",
      "What is",
      "The history of",
      "Quem é",
      "O que é",
      "A historia do",
    ];
    const selectdPrefixIndex = readline.keyInSelect(
      prefixes,
      "Choose one option: "
    );
    const selectedPrefixText = prefixes[selectdPrefixIndex];

    return selectedPrefixText;
  }

  function askAndReturnLanguage() {
    const language = ["pt", "en"];
    const selectedLangIndex = readline.keyInSelect(
      language,
      "choice language: "
    );
    const selectedLangText = language[selectedLangIndex];

    return selectedLangText;
  }
}

module.exports = robot;
