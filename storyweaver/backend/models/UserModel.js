const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Hash password before saving user
UserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 10, (err, hashedPassword) => {
    if (err) return next(err);
    user.password = hashedPassword;
    next();
  });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
