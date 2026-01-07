# Notions TypeScript

## 🎯 Thème : Système de Gestion d'Étudiants

Nous allons construire progressivement un système de gestion d'étudiants en découvrant chaque concept TypeScript.

---
## 🧩 Partie 0 : Compilation, Runtime et Abstraction

### 🎓 Concepts clés
- **Compilation :** TypeScript lit le code `.ts`, vérifie les types, supprime les types et génère du JavaScript (`tsc`).  
- **Runtime :** Moment et environnement où le code JS s’exécute réellement (navigateur, Node.js).  
- **Abstraction :** Masquer la complexité interne pour utiliser facilement une fonctionnalité (ex: `console.log`, ou types TS).  

### 💻 Exemple
```ts
let age: number = 30;
console.log(age); // Runtime affiche 30
age = "thirty"; // ❌ TypeScript détecte l'erreur avant runtime
```
## 📝 Partie 1 : Types Primitifs
### 🎓 Concept

TypeScript ajoute des types à JavaScript pour détecter les erreurs avant l'exécution.
Types principaux : string, number, boolean.

### 💻 Exercice
```ts
let name: string = "Alice";
let age: number = 20;
let isEnrolled: boolean = true;

// Type inference
let firstName = "Bob"; // string
```

### 💡 À retenir :

let variable: type = value

TypeScript détecte les erreurs avant l’exécution

L’inférence devine souvent le type, mais être explicite est préférable
## 📊 Partie 2 : Arrays (Tableaux)
### 🎓 Concept

Un array contient des valeurs du même type. TypeScript vérifie que chaque élément est correct.

### 💻 Exercice
```ts
let grades: number[] = [15, 18, 12];
grades.push(20); // ✅ OK
// grades.push("excellent"); // ❌ Erreur

let results: (number | string)[] = [15, "ABS", 18, "DISP"];
```
## 🎯 Partie 3 : Tuples
### 🎓 Concept

Un tuple est un tableau avec un nombre fixe d’éléments, chacun avec un type précis.

### 💻 Exercice
```ts
let student: [string, number] = ["Alice", 15.5];
let fullStudent: [string, number, number[]] = ["Bob", 20, [15, 18, 12]];
``` 
## 🔧 Partie 4 : Fonctions Typées
### 🎓 Concept

Spécifier le type des paramètres et du retour d’une fonction.

### 💻 Exercice
```ts
function calculateAverage(grades: number[]): number {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function displayResult(name: string, average: number): void {
    console.log(`${name}: ${average}/20`);
}

const isPassed = (average: number): boolean => average >= 10;
```
## Partie 5 : Paramètres Optionnels
### 🎓 Concept

Paramètre optionnel (?) ou valeur par défaut (=).

### 💻 Exercice
```ts
function displayStudent(name: string, mention?: string): void {
    console.log(mention ? `${name} - Mention: ${mention}` : `${name} - Pas de mention`);
}

function calculateAverageWithBonus(grades: number[], bonus: number = 0): number {
    return grades.reduce((a, b) => a + b, 0) / grades.length + bonus;
}
```
## 🏗️ Partie 6 : Interfaces
### 🎓 Concept

Définissent la structure d’un objet, réutilisable et lisible.

### 💻 Exercice
```ts
interface Student {
    name: string;
    age: number;
    grades: number[];
    mention?: string;
}

function calculateAverage(student: Student): number {
    return student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}
```
## 🔒 Partie 7 : Readonly
### 🎓 Concept

Empêche la modification d’une propriété après création.

### 💻 Exercice
```ts
interface Student {
    readonly id: number;
    readonly name: string;
    grades: number[];
}

const alice: Student = { id: 1, name: "Alice", grades: [15, 18] };
alice.grades.push(16); // ✅ OK
// alice.id = 2; // ❌ Erreur
```
## 🏢 Partie 8 : Modificateurs d'accès et static
### 🎓 Concept

**public** : accessible partout (par défaut)

**private** : accessible uniquement dans la classe

**protected** : accessible dans la classe et les sous-classes

**static** : appartient à la classe elle-même, pas à l’instance

### 💻 Exercice
```ts
class Student {
    public name: string;        // accessible partout
    private id: number;         // accessible seulement ici
    protected age: number;      // accessible ici et dans les sous-classes
    static schoolName: string = "Lycee TypeScript"; // appartient à la classe

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public displayName(): void {
        console.log(this.name);
    }

    private displayId(): void {
        console.log(this.id);
    }
}

const alice = new Student(1, "Alice", 20);
alice.displayName(); // ✅ OK
// alice.displayId(); // ❌ Erreur : private
console.log(Student.schoolName); // ✅ OK static
```

### 💡 À retenir :

**public** = accessible partout

**private** = sécurisé dans la classe

**protected** = accessible dans classe + sous-classes

**static** = propriété/méthode liée à la classe, pas à l’instance
## 🎨 Partie 9 : Union Types
### 🎓 Concept

Permet à une variable d’accepter plusieurs types.

### 💻 Exercice
```ts
type Grade = number | "ABS" | "DISP";
function displayGrade(name: string, grade: Grade): void {
    console.log(`${name}: ${grade}`);
}
```
## 🏷️ Partie 10 : Type Aliases
### 🎓 Concept

Nommer un type complexe pour simplifier le code.

### 💻 Exercice
```ts
type Result = number | "ABS" | "DISP";
type Report = [string, Result];

const reports: Report[] = [
    ["Alice", 15],
    ["Bob", "ABS"]
];
```
## 🎯 Partie 11 : Literal Types
### 🎓 Concept

Limiter les valeurs exactes d’une variable.

### 💻 Exercice
```ts
type Mention = "Très bien" | "Bien" | "Assez bien" | "Passable";
let mention: Mention = "Bien"; // ✅ OK
```
## 🔥 Partie 12 : Génériques
### 🎓 Concept

Code réutilisable avec sécurité des types.

### 💻 Exercice
```ts
function getFirst<T>(array: T[]): T {
    return array[0];
}

const firstGrade = getFirst([15, 18, 12]); // number
const firstName = getFirst(["Alice", "Bob"]); // string

```
## 🎯 Projet final : Gestionnaire de Classe
```ts
type Mention = "Très bien" | "Bien" | "Assez bien" | "Passable" | "Insuffisant";

interface Student {
    readonly id: number;
    readonly name: string;
    age: number;
    grades: number[];
    dateEnrollment: Date;
}

interface Result {
    student: Student;
    average: number;
    mention: Mention;
}

class ClassManager {
    private students: Student[] = [];
    private nextId: number = 1;

    addStudent(name: string, age: number): Student {
        const student: Student = { id: this.nextId++, name, age, grades: [], dateEnrollment: new Date() };
        this.students.push(student);
        return student;
    }

    addGrade(id: number, grade: number): void {
        const student = this.students.find(s => s.id === id);
        if (student) student.grades.push(grade);
    }

    calculateAverage(student: Student): number {
        if (!student.grades.length) return 0;
        return student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
    }

    determineMention(average: number): Mention {
        if (average >= 16) return "Très bien";
        if (average >= 14) return "Bien";
        if (average >= 12) return "Assez bien";
        if (average >= 10) return "Passable";
        return "Insuffisant";
    }

    getResults(): Result[] {
        return this.students.map(s => ({
            student: s,
            average: this.calculateAverage(s),
            mention: this.determineMention(this.calculateAverage(s))
        }));
    }
}
```
### ⚠️ Erreurs courantes

undefined non assignable

Property does not exist

any implicite (mode strict)
## 📚 Points clés à retenir

**Types primitifs** : string, number, boolean

**Arrays et tuples** pour organiser les données

**Fonctions typées** pour sécurité et lisibilité

**Interfaces**, **readonly** et **modificateurs** pour structurer et sécuriser les objets

**Union types** et **literal types** pour valeurs multiples ou limitées

**Génériques** pour code réutilisable et sécurisé

**Compilation** = vérification + génération JS

**Runtime** = exécution réelle du JavaScript

**Abstraction** = utiliser sans connaître le fonctionnement interne