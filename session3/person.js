// person =>fname, lname, age =>get full name, get year of birth
// student => all person , sub= [{subName, grade} ] - add  sub, show all subjects
// teacher => person , sal - get net salary (salary-10%)
class User{
    constructor(userName){
        this.userName = userName
    }
    getUserName(){
        return this.userName
    }
}
class Post extends User{
    constructor(userName, post, likes=0, comments=0, commentsDetails =[]){
        super(userName)
        this.post =post
        this.likes = likes
        this.comments = comments
        this.commentsDetails= commentsDetails
    }
    getPost(){
        console.log(`
        UserName: ${this.userName}
        post: ${this.post}
        likes: ${this.likes}
        comments: ${this.comments}
        commentsDetails: ${this.commentsDetails}
        `)
    }
    addLikes(){
        this.likes++
    }
    removeLikes(){
        this.likes--
    }
    addComments(commentBody){
        this.commentsDetails.push(commentBody)
        this.comments++
    }
    deleteComments(index){
        this.comments--
        this.commentsDetails.splice(index,1)
    }
}



let p = new Post('marwa', 'test post')
p.getPost()
console.log(p.getUserName())