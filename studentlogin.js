app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.user = user;
        res.redirect('/student-dashboard'); // Redirect to dashboard after login
    } else {
        res.send('Invalid credentials. <a href="studentlogin.html">Try again</a>');
    }
});
