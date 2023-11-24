var listaFilmes = [
  "https://media.fstatic.com/xQhfG6pi04Nqh8kPRZR9asPu_Ss=/322x478/smart/filters:format(webp)/media/movies/covers/2016/10/14707796_1839098062990830_7546256341359436970_o.jpg",
  "https://i.pinimg.com/originals/79/91/df/7991df666a7e0ec2a985922a2bc574a8.jpg",
  "https://4.bp.blogspot.com/-sjuSX-_Ln2U/U1NRTTT4PwI/AAAAAAAAAS0/psbNz2Le6cM/s1600/Sem+T%C3%ADtulo-1.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/33/96/20185531.jpg",
  "https://br.web.img2.acsta.net/pictures/23/06/30/20/36/1745850.jpg",
  "https://casapark.com.br/wp-content/uploads/2023/09/Os-Mercenarios-4-691x1000-1.jpg",
  "https://images.justwatch.com/poster/308834896/s718/sound-of-freedom.jpg",
  "https://br.web.img2.acsta.net/pictures/210/259/21025942_20130809010733221.jpg",
"https://img.elo7.com.br/product/zoom/265019D/big-poster-filme-animais-fantasticos-e-onde-habitam-l7-90x60-harry-potter.jpg",
"https://media.fstatic.com/3X48hEhLkAGleJdPNfY7qf3eISY=/322x478/smart/filters:format(webp)/media/movies/covers/2012/06/05450dcbf079867b601bfc1f8ce92a30.jpg",
"https://a-static.mlcdn.com.br/450x450/poster-cartaz-velozes-e-furiosos-10-b-pop-arte-poster/poparteskins2/16031070328/18ec45598918734da0aaa05ecbcb763b.jpeg",
"https://www.cafecomfilme.com.br/media/k2/items/cache/d61d44254608dd06ccdd2ff02982d14d_XL.jpg",
"https://media.fstatic.com/DpGIJVvJvKs3qk__DnHGeNFWHMA=/322x478/smart/filters:format(webp)/media/movies/covers/2013/03/7c6d04317a06c6cea984d49646fb4d9c_1.jpg",
"https://media.fstatic.com/vEx8ChNwRQdlKUGN8qD9CUBNdzU=/322x478/smart/filters:format(webp)/media/movies/covers/2013/03/ad34db20752b121d75fedcc164ba43db.jpg"
];

var galeria = document.getElementById("galeria");

for (var i = 0; i < listaFilmes.length; i++) {
  var imagem = document.createElement("img");
  imagem.src = listaFilmes[i];
  imagem.alt = "Filme " + (i + 1);
  imagem.classList.add("capaFilme"); // Adiciona a classe "capaFilme" às imagens
  galeria.appendChild(imagem);
}

var imagens = document.querySelectorAll('.capaFilme');

imagens.forEach(imagem => {
  imagem.addEventListener('mouseover', () => {
    imagem.classList.add('destacar'); // Adiciona a classe 'destacar' ao passar o mouse
  });

  imagem.addEventListener('mouseout', () => {
    imagem.classList.remove('destacar'); // Remove a classe 'destacar' ao tirar o mouse
  });
});
