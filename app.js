(function () {
	"use strict";

/** Stock
 * La var inventaire est un tableau qui stock des produits. 
 * Inventaire variable is an array which stock products.
 */

  	var inventaire = [];

/** @function Produit
 * @constructor 
 * @property
 * @param
 * Produit est un constructeur qui définit les propriétés de chaque produit qui seront ajoutés au stock. 
 * "Produit" function is a constructor which defined propreties of each stock products. 
 */ 	

    function Produit(nom, reference, prix, description) {
		this.nom = nom;
		this.reference = reference;
		this.prix = prix;
		this.description = description;
	};
  	

/** @function ajouterProduit
 * @property
 * ajouterProduit est une fonction qui permet d'ajouter des produits dans notre stock. 
 * ajouterProduit add products in the stock.
 * Ces produits possèdent comme propriétés un nom, un prix, une description ainsi qu'une référence.
 * These products have a name, a price, a description and a reference.
 * La référence d'un produit est générée aléatoirement. 
 * Product reference is generated randomly.
 * Si le formulaire est correctement rempli les éléments sont ajoutés dans le tableau d'inventaire comprenant des cellules dans des colonnes et des lignes.
 * If the form is correctly completed the informations will be add in the inventory array which have a cell in column and row.
 */

    var ajouterProduit = function() {
    	var ajouter = document.getElementById("ajout");
        ajouter.addEventListener("click", function(){
    	var nom = document.getElementById("nom").value;
	    var prix = document.getElementById("prix").value;
	    var description = document.getElementById("descri").value;
	    var reference = (0|Math.random()*9e6).toString(36);
		if ((!nom || !prix || !description) || isNaN(prix)) {
			alert("Formulaire mal rempli :(");
		}
		else{
		inventaire.push(new Produit(nom, description, prix, reference));
		var tbody = document.getElementById("tbody");
		var ligne = tbody.insertRow();
		var colonne1 = ligne.insertCell(0);
		colonne1.innerHTML = nom;
		var colonne2 = ligne.insertCell(1);
		colonne2.innerHTML = reference;
		var colonne3 = ligne.insertCell(2);
		colonne3.innerHTML = prix;
		var colonne4 = ligne.insertCell(3);
		colonne4.innerHTML = description;
		var colonne5 = ligne.insertCell(4);
		colonne5.innerHTML = "❌";

		console.log(inventaire);
		listenSuppr();
		return inventaire;

	};

	});

  };

/** @function supprimerProd
 * nous permet de supprimer un produit. 
 * supprimerProd remove product.
*/     

    function supprimerProd() {
	    this.parentNode.remove();
	};

/** @function listenSuppr
 * est une fonction qui active la fonction supprimerProd au click et cela en boucle pour chaque dernières cellules. 
 * listenSuppr active supprimerProd onclik in a loop for each last cell.
 */

	function listenSuppr() {
	    lastTd = document.querySelectorAll('#tbody td:last-child');
	    lastTd.forEach(function (td) {
	        td.addEventListener("click", supprimerProd)
	    });
	};



/** @function start
 * exécute nos fonctions. 
 * start function execute the functions.
 */

    var start = function () {

	    ajouterProduit();

    };


/** @event window 
 * déclanche notre fonction start par le biais d'un évènement au chargement de notre page. 
 * window active start function by an event when the document is loaded.
 */
	window.addEventListener("DOMContentLoaded", start);


}());