const links = document.querySelectorAll('.linkItem'),
   content = document.querySelectorAll('.imgItem');

for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function (e){
      e.preventDefault();
      for (let k = 0; k < links.length; k++) {
          links[k].classList.remove('active')
          content[k].classList.remove('active')
      }
      this.classList.add('active');
      content[i].classList.add('active');
  });
}

const pollinks = document.querySelectorAll('.Pollink'),
   polcontent = document.querySelectorAll('.PolItem');

for (let i = 0; i < pollinks.length; i++) {
   pollinks[i].addEventListener('click', function (e){
      e.preventDefault();
      for (let k = 0; k < pollinks.length; k++) {
         pollinks[k].classList.remove('active')
          polcontent[k].classList.remove('active')
      }
      this.classList.add('active');
      polcontent[i].classList.add('active');
  });
}

const treeLinks = document.querySelectorAll('.treeLink'),
   treeContent = document.querySelectorAll('.treeItem');

for (let i = 0; i < treeLinks.length; i++) {
   treeLinks[i].addEventListener('click', function (e){
      e.preventDefault();
      for (let k = 0; k < treeLinks.length; k++) {
         treeLinks[k].classList.remove('active')
         treeContent[k].classList.remove('active')
      }
      this.classList.add('active');
      treeContent[i].classList.add('active');
  });
}