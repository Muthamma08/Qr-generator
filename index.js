import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text:',
    },
  ])
  .then((answers) => {
    const enteredText = answers.text;
    console.log('Entered text:', enteredText);
    var qr_svg = qr.image(enteredText, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile('URL.txt', enteredText, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      //couldnt be rendered
    } else {
      // Something else went wrong
    }
  });
