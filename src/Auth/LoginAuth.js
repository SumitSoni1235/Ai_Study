// const db= require('../db/db');

function loginAuth(req, res) {
    const { email, password } = req.body;
    const query = 'SELECT * FROM AiSLogin WHERE email = $1 AND pass = $2';
    db.execute(query, [email, password], async (err, results) => {
        if (err) {
            console.error('Error occurred while fetching user data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            const query = 'insert into AiSLogin (email, pass) values ($1, $2)';
           await db.query(query, [email, password], (err, results) => {
                if (err) {
                    console.error('Error occurred while inserting user data:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }
              return res.json({ message: 'User registered successfully', user: { email }, results });
            });
        }
        if (results.length > 0) {
       return res.json({ message: 'Login successful', user: results[0] });
        }
    });
}

module.exports = { loginAuth };