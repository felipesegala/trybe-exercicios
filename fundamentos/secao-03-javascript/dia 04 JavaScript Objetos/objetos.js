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


// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
  
// }

// for(let index in info) {
//   console.log(index, info[index]);
// }

// let info1 = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
// }

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Pato Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas'
// }

// let names = info1.personagem + ' e ' + info2.personagem;
// let origin = info1.origem + ' e ' + info2.origem;
// let note = info1.nota + ' e ' + info2.nota;
// console.log(names);
// console.log(origin);
// console.log(note);


// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// console.log('O Livro Favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.');

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// })

// console.log(leitor);

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
  
//   leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   })
// // log com template string percorreu o objeto e achou os livros favoritos
//   console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`);




