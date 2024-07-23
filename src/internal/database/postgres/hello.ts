import pg from 'pg'
import { Hello } from '../../entities/example/v1/hello';
import { logger } from '../../../cmd';

export const getHello = async (db: pg.Client): Promise<Hello> => {
  try {
    const res = await db.query(`SELECT firstname, lastname, email FROM example`);

    if (res.rows.length === 0) {
      logger.error("database.postgres.dbClient.getHello: not found");
      return {
        firstName: "",
        lastName: "",
        email: ""
      };
    } else {
      return {
        firstName: res.rows[0].firstname,
        lastName: res.rows[0].lastname,
        email: res.rows[0].email,
      }
    }
  } catch (err) {
    logger.error("database.postgres.dbClient.getHello: failed to get hello").error(err);

    return {
      firstName: "",
      lastName: "",
      email: ''
    };
  }
};