module.exports = (saleData, registeredProductslist) => {
  const filterName = (list) => list.map(({ name }) => name);

  const saleDataNameList = filterName(saleData);
  const registeredProductsNameList = filterName(registeredProductslist);

  const productNameNotIncluded = saleDataNameList
    .filter((name) => !registeredProductsNameList.includes(name));
  
  return productNameNotIncluded;
};

// função criada após leitura e entendimento da explicação do Sr. Natan, em resposta ao post 'Comparar 2 arrays e salvar a diferença entre eles no banco de dados?'
// link do post: https://pt.stackoverflow.com/questions/235101/comparar-2-arrays-e-salvar-a-diferen%c3%a7a-entre-eles-no-banco-de-dados