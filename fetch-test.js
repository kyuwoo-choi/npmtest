fetch('https://github.com/kyuwoo-choi/npmtest/wiki', {mode: 'cors'})
    .then(res => console.log(res.text()))
    .catch(error => console.log(error));

