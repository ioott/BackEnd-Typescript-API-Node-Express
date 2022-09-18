import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../../interfaces';

const UserModel = {
  async create(user: User): Promise<void> {
    const { username, classe, level, password } = user;
    await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  },
};

export default UserModel;
