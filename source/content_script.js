var sandwichReplacements = ['sammies', 'sandoozles', 'Adam Sandlers'];
var sandwichReplacementsSingular = ['sammies', 'sandoozles', 'Adam Sandlers'];
var numSandwiches = sandwichReplacements.length;

findAndReplace(/\bdesserts\b/ig, 'zerts', document);
findAndReplace(/\bentrees\b/ig, 'tray-trays', document);
findAndReplace(/\bsandwich\b/ig, sandwichReplacementsSingular[Math.floor(Math.random()*numSandwiches)], document);
findAndReplace(/\bsandwiches\b/ig, sandwichReplacements[Math.floor(Math.random()*numSandwiches)], document);
findAndReplace(/\bair conditioners\b/ig, 'cool blasterz', document);
findAndReplace(/\bnoodles\b/ig, 'long-ass rice', document);
findAndReplace(/\bcakes\b/ig, 'big ol\' cookies', document);
findAndReplace(/\bchicken parm\b/ig, 'chicky chicky parm parm', document);
findAndReplace(/\bforks\b/ig, 'food rakes', document);

function findAndReplace(a, b, el) {
  if (!el) el = document.body;
  var nodes = el.childNodes;
  for (var n = 0; n < nodes.length; n++) {
    if (nodes[n].nodeType == Node.TEXT_NODE) {
      nodes[n].textContent = nodes[n].textContent.replace(a, b);
    } else {
      findAndReplace(a, b, nodes[n]);
    }
  }
}