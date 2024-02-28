const yargs = require("yargs");
const handlers = require("./handlers");
//the addition command
yargs.command({
  command: "add",
  describe: "add a new user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
    fname: {
      describe: "user first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "user last name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "user age",
      demandOption: true,
      type: "number",
    },
    city: {
      describe: "user city",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    handlers.addUser(argv.id, argv.fname, argv.lname, argv.age, argv.city);
  },
});
//the deletion command
yargs.command({
    command:"delete",
    descript:"delete a user",
    builder:{
        id:{
            describe:"user id",
            demandOption:true,
            type:"string"
        }
    },
    handler:(args) => {
        handlers.deleteUser(args.id);
    }
})
// read user data 
yargs.command({
    command:"read",
    describe:"display the user data by adding the id of the user",
    builder:{
        id:{
            describe:"user id",
            demandOption:true,
            type:"string"
        }
    },
    handler:(args) => {
        handlers.readUser(args.id);
    }
})
//list all users
yargs.command({
    command:"list",
    describe:"list all users",
    handler:() => {
        handlers.listUsers();
    }     
})
yargs.parse()