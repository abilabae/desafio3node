const {pool}= require('./conexion')

const getPost= async()=>{
    const {rows}= await pool.query('SELECT * FROM posts')
    console.log(rows)
    return rows
}

const agregarPost=async(titulo,img,descripcion,likes)=>{
    const consulta='INSERT INTO posts values(default, $1, $2, $3, $4)'
    const values=[titulo,img,descripcion,likes]
    const result= await pool.query(consulta,values)
    console.log('Post agregado correctamente')
    return result
}


module.exports={
    getPost,
    agregarPost
}