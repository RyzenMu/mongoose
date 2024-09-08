const mongoose = require('mongoose');

const User = require('./User');

main().catch(err => console.log(err.message));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

  // create

  // const user = await User.create({
  //   name:"Kovil",
  //   age:26,
  //   email:"kovilAAA@gmail.com",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  //   // bestFriend: mongoose.SchemaTypes.ObjectId,
  //   hobbies: ['cooking', 'spares', 'songs'],
  //   address: {
  //       street: "Kallar street",
  //       city: "kazahas",
  //   }
  // });
  // user.name = 'kovil kamal';
  // await user.save();

  //query
  // const user = await User.findById('66dd0eaa8ff5992194111220');
  // const user = await User.exists({name:"Balachandra"});
  // const user = await User.where("name").equals("Balachandra");
  // const user = await User
  // .where("name")
  // .equals("Balachandra")
  // .where("age")
  // .lt(45)
  // .limit(1)
  // .select("age")
  // .populate("bestFriend");
  //lt--lessthan
  // user[0].bestFriend = "66dcf97fdd389fe9f0bc6c2b";
  // await user[0].save;
  // const user = await User.deleteOne({name:"Balachandra"});
  // const user = await User.findOne({name:"Balachandra"});
  // const user = await User.findByName("Balachandra");
  // const user = await User.find().byName("Balachandra");
  // user.sayHi(); 
  const user = await User.findOne({name:"Balachandra"});
  console.log(user.namedEmail);  
  console.log(user);
  user.save();
  console.log(user);
  
    
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

// const user = new User({name:"Balachandra", age:30});
// user.save()
// .then(()=>{
//     console.log("user saved");    
// });