const User = require("../app/models/user")

describe("Unit Test for User Class ",()=>{
    test('Create an User Object ', () => { 
        const user = new User(1,'cbryanalfonso','Alfonso','Bio','dateCreated','lastUpdated')

       
        expect(user.getUsername).toBe('cbryanalfonso')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined() 
        expect(user.getLastUpdated).not.toBeUndefined()

       /*  expect(user.id).toBe(1)
        expect(user.username).toBe('cbryanalfonso')
        expect(user.name).toBe('Alfonso')
       // expect(user.dateCreated).toBe('dateCreated')
       // expect(user.lasUpdated).toBe('lastUpdated') */
      
     })
})
//= new Date()