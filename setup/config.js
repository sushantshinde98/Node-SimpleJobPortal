const myconfig={
    mongoURL:`mongodb+srv://${process.env.mDB_USER}:${process.env.mDB_PASS}@jobportalcluster.yn5dh.mongodb.net/${process.env.mDB_NAME}?retryWrites=true&w=majority`,
    nodePort:3000,
}

module.exports=myconfig;