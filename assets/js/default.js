const simulationLinks = document.getElementsByClassName('simulation-links')[0];
const children = simulationLinks.children;

for (let i = 0; i <= children.length; i++) {
    let anchor = children[i];
    let baseName = anchor.getElementsByTagName('h2')[0].innerHTML;
    let simHtml = baseName + '_en.html';
    let dirHtml = 'https://phet.colorado.edu/sims/html/' + baseName + '/latest/';
    anchor.href = dirHtml + simHtml;
    let image = anchor.getElementsByTagName('img')[0];
    image.src = 'figures/' + baseName + '-420.png';
}
