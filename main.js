//const = variáveis que não podem ser mudadas; let = variáveis que são mutáveis; obrigado colocar em todas as váriaveis
const userSocialMedia = {
  github: 'thaisfsc',
  instagram: 'thaicello',
  facebook: 'silvinhafagundescosta',
  twitter: 'thaispecial1'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Thais F. Costa' = mesma coisa que a frase abaixo//
  //userName.textContent = "Thais  F. Costa"//
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${userSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
