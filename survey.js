const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 
// 1-Devani loves listening to 2-Ludovico Einaudi while 3-coding,
// devouring 4-Yak Momos for 5-brunch, prefers 6-Tennis over any other sport,
// and is amazing at 7-dropping mad puns at inopportune times.
//arraay of questions and map over elements and for each of them 

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  let name = answer1
    rl.question('What\'s an activity you like doing?', (answer2) => {
      let activity = answer2
        rl.question('What do you listen to while doing that?', (answer3) => {
          let listen = answer3
          rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
            mealtime = answer4
            rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
              let food = answer5
              rl.question('Which sport is your absolute favourite?', (answer6) => {
                let sport = answer6
                rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
                  let sentence = ""
                  sentence += `${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${mealtime} prefers ${sport} over any other sport, and is amazing at ${answer7}.`
                  console.log(sentence)
                  rl.close()
              
                });
              });
            });
          });
        });
     
    });
});



