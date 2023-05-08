// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda-feira',
//     3: 'terça-feira',
//     4: 'quarta-feira',
//     5: 'quinta-feira',
//     6: 'sexta-feira',
//     7: 'sábado',
//   };
  
//   diasDaSemana.1; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4


// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     agr: 34,
//     medals: { golden: 2, silver: 3 },
// }

// player['besInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

// console.log('A jogadora', player.name, player.lastName, 'tem', player.agr, 'anos de idade');

// console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes', player['besInTheWorld']);

// console.log('A jogadora possui 2 medalhas de ouro e 3 medalhas de prata', player.medals);

// console.table(player);

// let band = {
//     name: 'Blind Guardian',
//     formedIn: 1986,
//     lastAlbum: 'Beyond the Red Mirror',
//   };
  
//   let info = {
//     genre: 'Power Metal',
//     lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
//   };

//   Object.assign(band, info);
//   console.log(band);

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda,',info.personagem);

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  
// }

// info['recorrente'] = 'sim';
// console.log(info);

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  
// }

// for(let index in info) {
//   console.log(index);
// }