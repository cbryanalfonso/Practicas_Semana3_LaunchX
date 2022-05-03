class User{
    constructor(id, username, name, bio, dateCreated , lasUpdated ){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date()
        this.lasUpdated = new Date()
        //this.dateCreated = dateCreated,
        //this.lasUpdated = lasUpdated;
    }

    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }
    
    get getLastUpdated(){
        return this.lasUpdated
    }

    set setUsername(newUsername){
        this.username = newUsername
    }

    set setBio(newBio){
        this.bio = newBio
    }
}

module.exports=User