// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    var bandMember = `${musicians[i]} plays ${instruments[i]}`
    beatles.push(bandMember)
  }
  return beatles
}