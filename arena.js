
// Création de deux instances de la classe Warrior
const joan = new Warrior('Joan', 10, 100);
const leon = new Warrior('Leon', 15, 80);

// Test de la méthode attack
joan.attack(leon); 

// Test de la méthode isAlive
console.log(`${joan.name} est vivant : ${joan.isAlive()}`); // true
console.log(`${leon.name} est vivant : ${leon.isAlive()}`); // true

// Leon attaque Joan jusqu'à ce que Joan ne soit mort
while (joan.isAlive()) {
    leon.attack(joan);
}
console.log(`${joan.name} est vivant : ${joan.isAlive()}`); // false 

// Création des instances de guerriers
const WarriorA = new WarriorAxe('WarriorA', 5);
const WarriorS = new WarriorSpear('WarriorS', 5);
const WarriorSs = new WarriorSword('WariorSs', 5);

// Combats
WarriorA.attack(WarriorSs); // WarriorA (hache) attaque WariorSs (épée)
WarriorSs.attack(WarriorA); // WariorSs (épée) attaque WarriorA (hache)
WarriorS.attack(WarriorS); // WarriorS (lance) attaque lui-même


// Fonction pour faire combattre deux guerriers
function battle(warrior1, warrior2) {
    while (warrior1.isAlive() && warrior2.isAlive()) {
        warrior1.attack(warrior2);
        warrior2.attack(warrior1);
    }

    if (!warrior1.isAlive() && !warrior2.isAlive()) {
        console.log("It's a draw");
    } else if (!warrior1.isAlive()) {
        console.log(`${warrior2.name} wins`);
    } else {
        console.log(`${warrior1.name} wins`);
    }
}

// Créer deux instances de sous-classes Warrior
const warrior1 = new WarriorAxe('Warrior1', 10);
const warrior2 = new WarriorSword('Warrior2', 10);

// Faire combattre les deux guerriers
battle(warrior1, warrior2);



