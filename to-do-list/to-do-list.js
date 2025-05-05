window.addEventListener('DOMContentLoaded', function() {
    // On récupère les informations du bouton et du input
    const button = document.getElementById('newtask');
    const input = document.getElementById('taskvalue');
    
    button.addEventListener('click', function() {
        const text = input.value.trim(); // On enlève les espaces avant et après le texte
        if (text == '') return; // On ne crée pas de tâche si le champ est vide
        new Task(text); // On crée une nouvelle tâche   
        input.value = ''; // On vide le champ de saisie
    });

    class Task {
        constructor(text) {
            // On crée un élément div pour la tâche
            this.element = document.createElement('div');
            this.element.className = 'task';

            // On crée un élément input de type checkbox et un texte pour la tâche
            this.checkbox = document.createElement('input');
            this.checkbox.type = 'checkbox';

            // On crée un élément texte pour afficher la tâche
            this.text = document.createTextNode(text);

            // On ajoute la classe "task" à l'élément texte
            this.element.appendChild(this.checkbox);
            this.element.appendChild(this.text);

            // On ajoute la tâche à la liste des tâches
            document.getElementById('tasklist').appendChild(this.element);

            this.checkbox.addEventListener('change', () => {
                if (this.checkbox.checked) {
                    this.element.remove();
                }
            });
        }
    }
});