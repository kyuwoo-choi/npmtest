fetch('https://github.com/kyuwoo-choi/npmtest/wiki')
    .then(res => console.log(res.text()))
    .catch(error => console.log(error));

