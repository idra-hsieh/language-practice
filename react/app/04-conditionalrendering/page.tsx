let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}

return (
    <div>
        {content}
    </div>
)


    // more compact code
    <div>
{
    isLoggedIn ? (
        <AdminPanel />
    ) : (
        LoginForm />
    )
}
</div >

