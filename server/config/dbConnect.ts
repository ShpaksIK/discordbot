import mysql from 'mysql2'

export const db = mysql.createPool({
	connectionLimit: 10,
})
