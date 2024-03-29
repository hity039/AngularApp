export class User{
    constructor(
        public email : string,
        // public id : string,
        public _token : string,
        public _expiresIn : Date
    ) {}
    
    get token(){
        if(!this._expiresIn || new Date() > this._expiresIn){
            return null
        }
        return this._token
    }
}