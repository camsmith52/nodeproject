

 function addController(username,description) {
  return { username, description };
}

function editController(id, username, description) {
    return { username, description };
}

function patchController(id, username, newDescription){
    return { username, newDescription };
}

function deleteController(id) {
    return null
}



module.exports = {
  addController,
  deleteController,
  editController,
  patchController,
};