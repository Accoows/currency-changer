# Sujet : dvd

## Consigne pour la réalisation de l'exercice

> ## Instruction
> 
> Lors de cet exercice vous devrez recréer l'écran de veille d'un lecteur DVD.
> 
> C'est à dire qu'il devra se déplacer sur l'écran et aller dans la direction opposée lorsque qu'il en rencontre le bord.
> 
> Dès qu'il heurtera un bord il devra changer de couleur.
> 
> La page `html` sera fournie.
> 
> <br>
> 
> ## STEP 1
> 
> Vous devrez faire bouger l'élément suivant:
> ```html
> <div id="Objdvd"></div>
> ```
> 
> Pour cela vous utiliserez :
> ```js
> requestAnimationFrame()
> ```
> 
> __Use:__
> ```js
>     function Exemple(){
>         //
>         //
>         //
>         requestAnimationFrame(Exemple)
>     }
> 
>     requestAnimationFrame(Exemple)
> ```
> 
> <br>
> 
> ## STEP 2
> 
> Récupérer la taille de l'écran :
> ```js
> window.innerHeight;
> window.innerWidth;
> ```
> 
> Lorsque l'objet recontre un bord haut/bas:
> * incrémenter ou décrémenter la position ``y``.
> 
> Lorsque l'objet rencontre un bord gauche ou droite:
> 
> * incrémenter ou décrémenter la position ``x``.
> 
> 
> <br>
> 
> **Libre à vous de rajouter des effets ou options supplémentaires si vous avez ralisé le reste.**
> 
> <br>
> 
> ## ⚠️Attention⚠️
> 
> 
> * Vous pouvez modifier l'html, attention à bien respecter les consignes
> * La taille de l'objet est de 300x300px
> * Si la taille de la fenêtre est réduite le comportement de l'objet doit s'adpater.
> * Le fichier js principal sera nommé ``dvd.js``
> 
> 
> ## Files:
> 
> [index.html](./dvd.html)
> 
> 
> ## Exemple:
> ![exemple](https://i.imgur.com/ejk0zmg.gif)