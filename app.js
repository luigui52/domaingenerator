let pronoun = ['el','nuestro'];
let adj = ['grandioso', 'grande' ];
let noun = ['corredor','pizote'];
let extensions =['com','us','io','net'];
let domains=[];
let links=''
for (let i=0;i<pronoun.length;i++) {
    links=pronoun[i]+noun[i]+'.com';
    domains.push(links);
}
for(let p=0;p<pronoun.length;p++){
    console.log(domains);
    for(let a=0;a<adj.length;a++){
        console.log(domains);
        for(let n=0;n<noun.length;n++){
            console.log(domains);
            for(let e=0;e<extensions.length;e++){
                console.log(domains);
                links=pronoun[p]+adj[a]+noun[n]+'.'+extensions[e];
                domains.push(links);
            }
        }
    }
}


