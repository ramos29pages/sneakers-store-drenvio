module.exports = {
    db: {
      user: 'drenvio',
      password: 'moM5f3AodwLE5d0A',
      dbname: 'test',
      url: `mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`
    },
    port: process.env.PORT || 3000,
    jwt_key : 'drenvio'
  };
  