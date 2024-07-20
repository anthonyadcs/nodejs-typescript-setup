interface User{
  name: string,
  age: number
}

function saveUserDatabase(user: User){
  //salvar user no banco de dados
  console.log(user)
}

saveUserDatabase({
  name: "Pedro",
  age: 30
})