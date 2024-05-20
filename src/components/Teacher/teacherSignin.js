import React, { useState } from 'react';

function LoginForm() {
    // Kullanıcı adı ve şifre verileri
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Giriş durumu
    const [loggedIn, setLoggedIn] = useState(false);

    // Kullanıcı bilgileri
    const users = [
        { id: 1, username: 'user1', password: 'password1' },
        { id: 2, username: 'user2', password: 'password2' },
        { id: 3, username: 'user3', password: 'password3' }
    ];

    // Form gönderildiğinde yapılacak işlemler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kullanıcı bilgilerini kontrol et
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Giriş başarılıysa loggedIn state'ini true yap
            setLoggedIn(true);
            alert('Login successful!');
        } else {
            // Giriş başarısızsa hata mesajı göster
            alert('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2 className="display-4 title">Login Form</h2>
            {loggedIn ? (
                <div>
                    <p>Welcome, {username}!</p>
                    <button className="btn btn-danger" onClick={() => setLoggedIn(false)}>Log out</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            )}
        </div>
    );
}

export default LoginForm;
