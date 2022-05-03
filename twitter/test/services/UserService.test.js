const UserService = require("../../app/services/UserService")

describe("Test for UserService",()=>{
    test('1. Create a new User using the UserService ', () => { 
        const user =  UserService.create(1, "cbryalfonso", "Alfonso")

       expect(user.username).toBe("cbryalfonso")
       expect(user.name).toBe("Alfonso")
       expect(user.id).toBe(1)
       expect(user.bio).not.toBeUndefined()
      
     }) 

      test('2. Get all user data in a list', () => { 
         const user = UserService.create(1, "cbryanalfonso", 'alfonso')
         const userInfoInList = UserService.getInfo(user)
         expect(userInfoInList[0]).toBe(1)
         expect(userInfoInList[1]).toBe("cbryanalfonso")
         expect(userInfoInList[2]).toBe("alfonso")
         expect(userInfoInList[3]).toBe("Sin bio")
      }) 

      test('3. Update username', () => { 
          const user = UserService.create(1,'cbryanalfonso','alfonso')
          UserService.updateUserUsername(user,'alfonso')
          expect(user.username).toBe("alfonso")
       }) 

       test('4. Given a list of users give me the list of usernames', () => { 
           const user1 = UserService.create(1,'cbryanalfonso1','alfonso')
           const user2 = UserService.create(1,'cbryanalfonso2','alfonso')
           const user3 = UserService.create(1,'cbryanalfonso3','alfonso')

           const usernames = UserService.getAllUsernames([user1,user2,user3])
           expect(usernames).toContain("cbryanalfonso1")
           expect(usernames).toContain("cbryanalfonso2")
           expect(usernames).toContain("cbryanalfonso3")
           
        })
})
//= new Date()