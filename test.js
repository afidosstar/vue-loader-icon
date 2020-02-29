

 function getAttr(name, html) {
    const checker = new RegExp(`${name}=(?:([^"' ]+)|(?:['])([^']*)|(?:["])([^"]*))`,'g');
    const match = html.match(checker);
    console.log(match.filter(x=>x).pop());
 }

 getAttr('ok',"<div ok=fiacre >fiacre</div>");