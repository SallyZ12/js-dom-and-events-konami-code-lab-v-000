const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e){

    const key = parseInt(e.which || e.detail || e.location);

      // console.log('w', e.which, 'd', e.detail, "l", e.location);
    if (code[index] === key)

      {index ++;

      if (index === code.length) {
      alert("You Got It!");

      index = 0;
  }

} else {
  index = 0;
}
});

};
