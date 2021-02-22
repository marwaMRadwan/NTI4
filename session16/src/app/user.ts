export interface User {
    name:string
    email:string
    password:string
    phone:string
    age:number
    image?:string
    addresses:{
        addr_type:string,
        details:string
    },
    user_type:string
    status?:boolean
    tokens?:[
        {token:string}
    ]
}
