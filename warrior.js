class Warrior {
    constructor(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life;
    }

    attack(opponent) {
        opponent.life -= this.power;
        console.log(`${this.name} attaque ${opponent.name} et lui inflige ${this.power} points de dégâts.`);
    }

    isAlive() {
        return this.life > 0;
    }
}

class WarriorAxe extends Warrior {
    constructor(name, power) {
        super(name, power);
    }

    attack(opponent) {
        // Vérifie si l'opposant est une instance de WarriorSword
        if (opponent instanceof WarriorSword) {
            this.power *= 2; // Double le pouvoir d'attaque si l'opposant a une épée
        }
        super.attack(opponent); // Appel de la méthode attack de la classe parente
    }
}

class WarriorSword extends Warrior {
    constructor(name, power) {
        super(name, power);
    }

    attack(opponent) {
        // Vérifie si l'opposant est une instance de WarriorSpear
        if (opponent instanceof WarriorSpear) {
            this.power *= 2; // Double le pouvoir d'attaque si l'opposant a une lance
        }
        super.attack(opponent); // Appel de la méthode attack de la classe parente
    }
}

class WarriorSpear extends Warrior {
    constructor(name, power) {
        super(name, power);
    }

    attack(opponent) {
        // Vérifie si l'opposant est une instance de WarriorAxe
        if (opponent instanceof WarriorAxe) {
            this.power *= 2; // Double le pouvoir d'attaque si l'opposant a une hache
        }
        super.attack(opponent); // Appel de la méthode attack de la classe parente
    }
}


