module.exports = (listOne, listTwo) => {
  const filterName = (list) => list.map(({ name }) => name);

  const nameListOne = filterName(listOne);
  const nameListTwo = filterName(listTwo);

  const namesNotIncludesListTwo = nameListOne
    .filter((name) => !nameListTwo.includes(name));
  
  return namesNotIncludesListTwo;
};

// função criada após leitura e entendimento da explicação do Sr. Natan, em resposta ao post 'Comparar 2 arrays e salvar a diferença entre eles no banco de dados?'
// link do post: https://pt.stackoverflow.com/questions/235101/comparar-2-arrays-e-salvar-a-diferen%c3%a7a-entre-eles-no-banco-de-dados