export class UserModel {
    constructor(
        public name: string,
        public email: string,
        public role: string,
        public child: [],
        public team: [],
        public photo: string,
        public userId: string,
    ) {

    }

}

// for the user model all types of user have the same constructors however, 

// Guardian user-- child [] are there children (have admin role) 
// Careteam user-- child [] are the children they work with 
// for organization of the child []-- [{childID: childname}, ...] 
// Needs to be a service for child-- one function CONNECT_TO_CHILD to create child (Guardian can) and to add to web 

// Guardian user-- team [] are the therapist they have connected with 
// Careteam user-- team [] are the therapist they work with 
// [UserID,..]
