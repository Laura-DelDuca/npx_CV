#!/usr/bin/env node
const chalk = require ('chalk');
const boxen = require ('boxen');

const frame1 = {
    borderColor: 'green',
    borderStyle: 'round',
    margin: {
        top: 0,
        bottom: 0,
        left: 4,
        right: 4
    },
    padding: 1
};
const frame2 = {
    borderColor: 'red',
    borderStyle: 'round',
    margin: {
        top: 0,
        bottom: 0,
        left: 4,
        right: 4
    },
    padding: 1
};
const frame3 = {
    borderColor: 'blue',
    borderStyle: 'round',
    margin: {
        top: 0,
        bottom: 0,
        left: 4,
        right: 4
    },
    padding: 1
};
const frame4 = {
    borderColor: 'yellow',
    borderStyle: 'round',
    margin: {
        top: 0,
        bottom: 0,
        left: 4,
        right: 4
    },
    padding: 1
};

const figlet1 = require ('figlet');
console.log(chalk.white( figlet1.textSync('Laura Del Duca:', {
    font: 'Standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
})));

const figlet2 = require ('figlet');
console.log(chalk.white( figlet2.textSync('Web dev junior', {
    font: 'Standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
})));

const formation = '\n' +
    chalk.green.underline.bold('FORMATION ET DIPLOMES') + '\n' + '\n' +
    '2018 - 2019' + '   BeCode Liège' + chalk.green('    Web development') + '\n' +
    '2016 - 2017' + '       ULG' + chalk.green('         Agrégation') + '\n' +
    '2012 - 2015' + '       ULG' + chalk.green('         Master langues modernes') + '\n' +
    '2009 - 2012' + '       ULG' + chalk.green('         Bachelier langues modernes') + '\n' +
    '2002 - 2008' + '  Abbaye de Flône' + chalk.green('  Secondaires supérieures')  + '\n'

const job = '\n' +
    chalk.red.underline.bold('EXPERIENCES PROFESSIONNELLES') + '\n' + '\n' +
    '2015 - 2016' + chalk.red('  Enseignement esp.-angl.') + '  Abbaye de Flône  \n                                      Collège St Servais \n                                      Liège Atlas' + '\n' +
    '2017 - 2018' + chalk.red('  Enseignement angl.') + '  Ecole d\'hotellerie \n                                 Ecole d\'horticulture' + '\n'

const languages = '\n' +
    chalk.blue.underline.bold('LANGUES') + '\n' + '\n' +
    chalk.blue('Français') + '  Langue maternelle' + '\n' +
    chalk.blue('Anglais') + '   Courant' + '\n' +
    chalk.blue('Espagnol') + '  Courant' + '\n' +
    chalk.blue('Hébreu') + '    Bonne Bonnaissance'

const hobbies = '\n' +
    chalk.yellow.underline.bold('CENTRES D\'INTERET') + '\n' + '\n' +
    chalk.yellow('Jeux vidéo - Lecture - Musique - Jiu Jitsu')

console.log (boxen(formation, frame1));
console.log (boxen (job, frame2));
console.log (boxen(languages, frame3));
console.log (boxen(hobbies, frame4));
console.log (hobbies);
