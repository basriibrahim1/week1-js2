const name = [
    "Abigail","Alexandra","Alison",
    "Amanda","Angela","Bella",
    "Carol","Caroline","Carolyn",
    "Deirdre","Diana","Elizabeth",
    "Ella","Faith","Olivia","Penelope"]

const searchName = (query, limitCall,callback) => {

    const statement = (data) => data.toLowerCase().includes(query.toLowerCase())

    const filterName = name.filter(statement)
    const limitedCall = filterName.slice(0, limitCall)
    return callback(limitedCall)
    
}

function displayName(result){
    console.log(result)
}


searchName('al', 3, displayName)