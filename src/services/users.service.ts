import userModel from '../models/users.model';
import { User } from '../../interfaces';
import createToken from '../helpers/token';

const UserService = {
  async create(user: User) {
    await userModel.create(user);
    const token = createToken(user);
    return { token };
  },

};

export default UserService;
