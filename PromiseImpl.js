const GITHUB_URL = 'https://api.github.com/users/priyodas12';

const userInfo = fetch(GITHUB_URL);

console.log(userInfo);

userInfo.then((data) => console.log(data.body));
