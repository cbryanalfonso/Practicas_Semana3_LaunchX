const User = require("../app/models/user")

describe("Unit Test for User Class ",()=>{
    test('add setters ', () => { 
        const user = new User(1,'cbryanalfonso','Alfonso','Bio')

       user.setUsername = "Gilmar"
       expect(user.username).toBe("Gilmar")

       user.setBio = "New bio"
       expect(user.bio).toBe("New bio")
      
     })
})
//= new Date()