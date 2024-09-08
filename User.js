const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 20,
    max: 80,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.vale} is not even  `,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 10,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  hobbies: [String],
  address: addressSchema,
});

const userNewSchema = new mongoose.Schema({

});

userNewSchema.methods.sayHi = function(){
     console.log(`Hi! my name is ${this.name}`);     
}

userNewSchema.statics.findByName = function(name) {
    return this.where({name : new RegExp(name, "i")});
}

userNewSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, 'i')});
}

userNewSchema.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}>`;
});

userNewSchema.pre("save", function(next){
    this.updatedAt = Date.now();
    next();
});
userNewSchema.post("save", function(doc, next){
    doc.sayHi();
    next();
})
module.exports = mongoose.model("User", userNewSchema);
