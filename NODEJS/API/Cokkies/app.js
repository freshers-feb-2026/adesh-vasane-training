//for storing and creating the cookie.

exports.postLogin=(req,res,next)=>
{
    res.setHeader('Set-Cookie','loggedIn=true');
    res.redirect('/');
}