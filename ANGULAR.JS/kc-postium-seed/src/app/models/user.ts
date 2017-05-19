export class User {
    
    private constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public avatar: string,
        public password: string
    ) { }

    static fromJson(json: any): User {
        return new User(
            json.id,
            json.name,
            json.username,
            json.email,
            json.avatar,
            json.password
        );
    }

    static defaultUser(): User {
        return new User(
            1,
            "KeepCoder",
            "keepcoder",
            "keepcoder@postium.com",
            "assets/images/keepcoder.jpg",
            "1234"
        )
    }
}
