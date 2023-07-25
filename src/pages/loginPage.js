export default function LoginPage() {
    return(
        <div>
            <form className="login">
                <h1>LOG-IN</h1>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    );
}