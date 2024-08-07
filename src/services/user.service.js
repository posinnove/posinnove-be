import User from "../database/models/user.model";

export class UserService {
  static async register(user) {
    return await User.create(user);
  }

  static async getUserById(id) {
    return await User.findOne({ where: { id: id },exclude:['password'] });
  }

  static async getUserByEmail(email) {
    return await User.findOne({ where: { email: email } });
  }

  static async getAllUsers() {
    return await User.findAll({ attributes: { exclude: ['password'] } });
  }
}