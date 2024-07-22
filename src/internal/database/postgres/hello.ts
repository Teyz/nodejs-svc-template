import pg from 'pg'

export const getHello = async (db: pg.Client): Promise<any> => {
  try {
    const res = await db.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message);
  } catch (err) {
    console.error(err);
  } finally {
    await db.end()
  }
};