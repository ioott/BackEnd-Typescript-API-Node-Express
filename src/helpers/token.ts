import jwt from 'jsonwebtoken';
import { User } from '../../interfaces';

const JWT_SECRET = 'minhasenhasupersecreta';

const createToken = (user: User): string => {
  const token = jwt.sign(user, JWT_SECRET, { algorithm: 'HS256', expiresIn: '10d' });
  return token;
};

export default createToken;
