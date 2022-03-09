const iconsObjArr=
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

console.log(iconsObjArr)

/*

Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": 
utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono 
ai vari tipi di icone (animal, vegetable, user). 
Quando l'utente seleziona un tipo dalla select, 
visualizzare solamente le icone corrispondenti. 

*/

const container = document.getElementById('icons-container');


/* 
Spiegazione funzione: 
- Creo una funzione che PER OGNI oggetto nell'arrey madre (iconsObjArr)
  mi crea un div a cui attribuisco la classe box (presente su css)
- Al div appena creato inserisco grazie al'innerHTML tutti i relativi valori,
  specificati ad ogni ciclo grazie all'argomento (objArg)
- Aggiungo sopra a tutto un innerHTML= "" per pulire la pagina.
*/

function insertIcon (allIconsArr, iconBoxes) {

	iconBoxes.innerHTML= ""; //Pulire la pagina

	allIconsArr.forEach((objArg) => {
		const iconBox= document.createElement('div')
		iconBox.classList.add('box')

		iconBox.innerHTML=
		`
		<i class="${objArg.family} ${objArg.prefix}${objArg.name}" style="color: ${objArg.color}"></i>
      	<span>${objArg.name}</span>
		`

		iconBoxes.append(iconBox)
	});
}

/* 
Spiegazione AZIONE funzione: 
- Chiaramente la funzione non si esegue perchè non ho specificato a che variabili
  essa deve eseguirsi.
- Perciò chiamo la funzione e come argomenti passo le 2 variabili:
  .iconsObjArr: in relazione all'argomento precedente 'allIconsArr'
  .container:   in relazione all'argomento precedente 'iconBoxes'
*/
insertIcon (iconsObjArr, container)


const selector = document.getElementById('icons-type-selector');

