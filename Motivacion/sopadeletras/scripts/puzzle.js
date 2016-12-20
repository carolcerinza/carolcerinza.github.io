  var words = ['Motivacion', 'Intrinseca', 'Extrinseca', 'Necesidades', 'Estima', 'Fisiologicas', 'Amor', 'Seguridad', 'Autorealizacion', 'Maslow', 'Recompensa', 'Castigo'];

  var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');

  $('#solve').click( function() {
    wordfindgame.solve(gamePuzzle, words);
  });

  var puzzle = wordfind.newPuzzle(
    words, 
    {height: 10, width:10, fillBlanks: false}
  );
  wordfind.print(puzzle);