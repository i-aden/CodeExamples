<template>
  <h1>Memorable Quotes</h1>
  <p>{{ showQuote() }}</p>
  <h1>There are {{ numLetters }} letters in the alphabet.</h1>
  <p>Visit the Atlassian website for <a v-bind:href="gitTutorialLink">git tutorials</a>.</p>

  <p v-html="htmlFromSomeDatabase"></p>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const numLetters = 26;

    const gitTutorialLink = "https://www.atlassian.com/git/tutorials";

    function showQuote() {
      const randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        return "To be or not to be, that is the question!";
      }
      else {
        return "Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it. --Geothe" ;
      }
    }

    const htmlFromSomeDatabase = "<h1>This should be interpreted as HTML</h1>";
    
    return { numLetters, gitTutorialLink, showQuote, htmlFromSomeDatabase };
  }
}
</script>

<style>
p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid burlywood;
  background-color: #4f5ac0;
  color: white;
  padding: 0.5rem;
}
h1 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #c0694f;
  margin: 0 0 1rem 0;
}
</style>
