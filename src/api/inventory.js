import { Router } from 'express';
const router = new Router();

var items = [
  {
    id:1
  , title:'UNIVERSAL STUDIOS HOLLYWOOD'
  , thumb:'ush.jpg'
  , photo:'main-vip2.jpg'
  }
, {
    id:2
  , title:'DISNEYLAND'
  , thumb:'dl.jpg'
  }
, {
    id:3
  , title:'BLUE MAN GROUP'
  , thumb:'bmg.jpg'
  }
, {
    id:4
  , title:'CRISS ANGLE BELIEVE'
  , thumb:'cab.jpg'
  }
, {
    id:5
  , title:'JERSEY BOYS'
  , thumb:'jb.jpg'
  }
, {
    id:6
  , title:'KÀ BY CIRQUE DU SOLEIL'
  , thumb:'ka.jpg'
  }
, {
    id:7
  , title:'MICHAEL JACKSON ONE'
  , thumb:'mjo.jpg'
  }
, {
    id:8
  , title:'MYSTÈRE BY CIRQUE DU SOLEIL'
  , thumb:'mystere.jpg'
  }
, {
    id:9
  , title:'O BY CIRQUE DU SOLEIL'
  , thumb:'o.jpg'
  }
, {
    id:11
  , title:'SAN DIEGO ZOO'
  , thumb:'sdz.jpg'
  }
, {
    id:10
  , title:'LE RÊVE - THE DREAM'
  , thumb:'reve.jpg'
  }
, {
    id:11
  , title:'SAFARI PARK'
  , thumb:'sp.jpg'
  }
, {
    id:12
  , title:'SEA WORLD'
  , thumb:'sw.jpg'
  }
, {
    id:13
  , title:'USS MIDWAY'
  , thumb:'um.jpg'
  }
];

router.get('/', async (req, res, next) => {
  try {
  	res.json(items);
    // const path = req.query.path;

    // if (!path || path === 'undefined') {
    //   res.status(400).send({ error: `The 'path' query parameter cannot be empty.` });
    //   return;
    // }

    // let fileName = join(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
    // if (!(await fileExists(fileName))) {
    //   fileName = join(CONTENT_DIR, path + '/index.jade');
    // }

    // if (!(await fileExists(fileName))) {
    //   res.status(404).send({ error: `The page '${path}' is not found.` });
    // } else {
    //   const source = await readFile(fileName, { encoding: 'utf8' });
    //   const content = parseJade(path, source);
    //   res.status(200).send(content);
    // }
  } catch (err) {
    next(err);
  }
});

export default router;
