const alimentos = [
  { name: 'Laranja', category: 'Fruta'},
  { name: 'Banana', category: 'Fruta'},
  { name: 'Maça', category: 'Fruta'},
  { name: 'Abóbora', category: 'Legume'},
  { name: 'Abobrinha', category: 'Legume'},
  { name: 'Espinafre', category: 'Legume'}
];

const alimentosUnicos = new Map();

alimentos.forEach((alimento) => {
  if (!alimentosUnicos.has(alimento.category)) {
    alimentosUnicos.set(alimento.category, alimento);
  }
})

console.log([...alimentosUnicos.values()]);