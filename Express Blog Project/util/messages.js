const chalk = require('chalk');

error = msg => {
    console.log(chalk.inverse.red(msg));
};

success = msg => {
    console.log(chalk.inverse.greenBright(msg));
};

module.exports={
 error, success,
};

