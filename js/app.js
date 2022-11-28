function gettingData(){
  const LINK_USER = "https://api.github.com/users/m3nininho";

  fetch(LINK_USER).then((response) => {
    return response.json();
  }).then((user) => {
    return puttingData(user);
  })
}
gettingData();

function puttingData(user){

  const profile = user;

  const outName = document.getElementById('outName');
  const imgProfile = document.getElementById('imgProfile');
  const outFollowers = document.getElementById('outFollowers');
  const outFollowing = document.getElementById('outFollowing');
  const outRepository = document.getElementById('outRepository');

  outName.innerText = profile.login;
  imgProfile.setAttribute('src', profile.avatar_url);
  outFollowers.innerText = `${profile.followers}`;
  outFollowing.innerText = `${profile.following}`;
  outRepository.innerText = `${profile.public_repos}`;

}

function generateFund(){
const colors = ['red', 'black', 'white', 'yellow', 'aqua', 'green', 'purple', 'pink', 'blue', 'brown'];
const outBack = document.getElementById('outBack');
const random = Math.floor(Math.random() * colors.length);
outBack.style.background = colors[random]

}

const btnBackground = document.getElementById('btnBackground');
btnBackground.addEventListener('click', generateFund)