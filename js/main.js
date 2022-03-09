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


//PARTENZA!!!


/* 
Spiegazione funzione: 

- Creo una funzione che PER OGNI oggetto nell'arrey madre (iconsObjArr)
  mi crea un div a cui attribuisco la classe box (presente su css)

- Al div appena creato inserisco grazie al'innerHTML tutti i relativi valori,
  specificati ad ogni ciclo grazie all'argomento (objArg)

- Aggiungo sopra a tutto un innerHTML= "" per pulire la pagina (Utilizzato in seguito).
*/

const container = document.getElementById('icons-container');

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
- Chiaramente la funzione non si esegue perchè non ho specificato quali variabili
  essa deve influenzare.

- Perciò chiamo la funzione e come argomenti passo le 2 variabili:
  .iconsObjArr: in relazione all'argomento precedente 'allIconsArr'
  .container:   in relazione all'argomento precedente 'iconBoxes'
*/

insertIcon (iconsObjArr, container)






//Ora che ho stampato in pagina tutto, procedo alla logica del FILTRO.

//Seleziono il SELECT già presente nel DOM
const selector = document.getElementById('icons-type-selector');


//Creo un eventListener con funzione "change". Il change agisce perchè ho usato
//un selector all'interno dell'HTML.

//La funzione espressa qua sotto la userò solo sta volta quindi lascio tutto vuoto.
selector.addEventListener('change', function() {

	//Creo una costante che agisce sul valore ATTUALMENTE selezionato --> QUESTO (this)
	const selected = this.value 

	//Se la casella selezionata NON è "ALL" allora:
	if (selected != 'all') {

		//mi crei una classe che filtra l'arrey principale
		//NB: .filter agisce filtrando e depositando gli elementi filtrati in un'arrey creato da lui
		const iconsFiltered = iconsObjArr.filter((argument) => {

			//Se il tipo selezionato è uguale al valore di QUESTA variabile allora...
			if (argument.type == selected) {
				return true
			}
		});

		//Aziona la funzione creata prima su queste 2 variabili:
		//-iconsFiltered: il nuovo arrey delle icone filtrate
		//-container: lo stesso di prima
		insertIcon(iconsFiltered, container)
	} else {

		//ALTRIMENTI:
		//-iconsObjArr: l'arrey con tutte le icone
		//-container: lo stesso di prima
		insertIcon(iconsObjArr, container)
	}
});