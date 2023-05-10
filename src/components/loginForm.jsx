let content;
if(isLoggedIn){
    content=<AdminPanel></AdminPanel>;
}else{
    content =<LoginForm></LoginForm>;
}
return(
    <div>
        {content}
    </div>
);