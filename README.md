# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
 Jillian Wong

  #### Je startniveau:
 Blauw/rood

  #### Je focus:
 Responsive 
 
</details>






## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
 https://crayolaexperiencemn.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina van Crayola Experience
  <img src="readme-images/homepagina.jpg" width="375px" alt="Screenshot van de homepagina van Crayola Experience">

  #### Screenshot(s) van de tweede pagina (small screen):
  Visiting pagina van Crayola Experience
  <img src= "readme-images/visiting_pagina.jpg" width="375px" alt="Screenshot van de visiting pagina van Crayola Experience">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>
  <img src= "readme-images/toegankelijkheidstest1.png" width="375px" alt="Toegankelijkheidstest ingevuld 1/5">
  <img src= "readme-images/toegankelijkheidstest2.png" width="375px" alt="Toegankelijkheidstest ingevuld 2/5">
  <img src= "readme-images/toegankelijkheidstest3.png" width="375px" alt="Toegankelijkheidstest ingevuld 3/5">
  <img src= "readme-images/toegankelijkheidstest4.png" width="375px" alt="Toegankelijkheidstest ingevuld 4/5">
  <img src= "readme-images/toegankelijkheidstest5.png" width="375px" alt="Toegankelijkheidstest ingevuld 5/5">

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - De website kon niet gevalideert worden in de W3C validator, hij geeft een error.
  - Ik heb opgemerkt dat er geen dark mode thema is, wat ik eigenlijk wel had verwacht van zo'n officiele/professionele website.
  - Er komen geen animations voor wat ik ook had verwacht bij zo'n website waarbij de thema kinderachtig is.
  - De website gebruikt veel divjes voor vormgeving.


</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de home pagina: 
  <img src="readme-images/homepagina_breakdown.jpg" width="375px" alt="breakdown van de home pagina">

  ### de visiting pagina: 
  <img src="readme-images/visiting_breakdown.jpg" width="375px" alt="breakdown van de visiting pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
 Ik heb voor de eerste voortgangsgesprek mijn HTML van beide pagina's af kunnen hebben. Ik heb tijdens het opmaken van deze code geen problemen gehad.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | Hoe kan ik de  | Wat gebeurt er als | Was afwezig  | Was afwezig      |
  | video van mijn | je je code af hebt |              |                  |
  | site           | en de website 
  | downloaden?    | veranderd?


  ### Verslag van meeting
  De uitkomsten van de meeting vastleggen

Ik had niet zo zeer fouten in mijn code, ik kreeg wel advies over hoe ik bepaalde stukjes kan coderen:
- Voor de FAQ kan ik het <details>-element gebruiken.
- De lijst met tickets en Crayola-icoontjes kan ik structureren als <article>-elementen.
- Voor de achtergrond kan ik het ::before-attribuut in CSS toepassen.
- Een media query kan ik gebruiken om het hamburgermenu te implementeren.
- De <nav> boven de <h1> is niet problematisch voor screenreaders.

Antwoorden op gestelde vragen:
- De video kan je halen uit de dev. tools> network> type> video zoeken> downloaden.
- Het is niet erg als de website verandered. Ik ga kijken naar de screenshots, dus  je kan de oude versie namaken. Als er animaties zijn kan je de Wayback machine gebruiken om de oude versie van de website te zien.


</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3       | student 4        |
  | ---            | ---                | ---             | ---              |
  | Mag je s css   | Is het een vereiste| Waarvoor        | Ze had geen      |
  | stylesheets    | om je menu werkend | gebruik je      | vragen, want der |
  | gebruiken ?    | te krijgen?        | padding en      | website was nog  |
  |                |                    | waarvoor margin | niet zover       |


  ### Verslag van meeting

  hier na afloop snel de uitkomsten van de meeting vastleggen

  Mijn niet algemene vragen:
  - Is mijn ⁠Footer nav in html nesting goed?
  - ⁠Zo ja hoe kan ik 2 rijtjes naast elkaar zetten en wnr het groter wordt dat ze allemaal naast    elkaar veranderen (responsive laten bewegen)
  - ⁠MAg de div als container voor de video gebruik worden - Ik heb dit geplaatst voor een container voor die button.

  Antwoorden op de gestelde vragen en feedback:
  - Je mag 2 stylesheets gebruiken, maar voor deze opdracht en mijn websit eis het niet zo zeer nodig.
  - Footer nav ul moet je tot sections maken ⁠en dan met flex wrap naast elkaar plaatsen en media query dgebruiken zodat het responsivve word.
  -  class is goed toegepast het mag. Je mag bij een section als je dezelfde ding wil laten doen vr beide pagina’s een class ook toevoegen.
  -  ⁠div van de video mag want het is puur vr styling.
  - h3 moet boven de img en dan met order -1 zetten zodat t img bove komt bij de main section.
  -  ⁠h1 moet altijd gaan over de gehele site dus de h1 kan crayola experience zijn en dan in css op visually-hidden zetten zodat het onzichtbaar wordt, maar voor de screenreader zal het nog opgelezen worden.
  - verder ziet je ReadMe goed uit en breakdown schetsen ook. De html en css structuur zien ook goed uit.
  - Alt tekstjes nog bijzetten bij imgs
  - Antwoord op student 2 der vraag: Ja het is een vereiste en je kan ook animaties toevoegen.
  - Antwoord op student 3 zijn vraag: Padding gebruiken voor binnen en margin voor buiten wit-ruimte.


</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
  - Ik ben nog niet zover, dus ik heb de alt teksten nog niet geplaatst wat de screenreader zou moeten lezen.
  - Ik heb opgemerkt dat de screen reader niet over de fotos heen gaat, hij skipt het.
  - Ik heb vevrolgens een alt tekst geplaatst bij een van de foto's en heb met de voice over weer probeert om erover te gaan, en nu skipt hij het niet, hij leest de alt tekst wel.
  - De linkjes en buttons hebben duidelijke namen waardoor je weet wat je moet doen wanneer je erop bent met de screen reader.
  - Ik heb goed gebruik gemaakt van de Headings, dus h1,h2,h3 (eentje is niet overgeslagen).

  Wat ik heb verbeterd:
  - - Mijn website valideert wel in W3C.
  - - Ik heb een dark-mode thema toegevoegd.
  - Ik heb probeert om zo min mogelijk diivjes te gebruiken, en wanneer ik ze toch heb gebruikt, heb ik ervoor gezorgd dat het puur voor styling is.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>