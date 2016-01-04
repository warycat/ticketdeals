import { Router } from 'express';
const router = new Router();

var items = [
  {
    id:1
  , title:'UNIVERSAL STUDIOS HOLLYWOOD'
  , thumb:'ush.jpg'
  , photo:'main-vip2.jpg'
  , items:[
    {
      amount:85
    , name:'1-Day Ticket'
    }
  , {
      amount:299
    , name:'VIP Experience'
    }
  , {
      amount:149
    , name:'Front of Line Ticket'
    }
  , {
      amount:299
    , name:'Gold Annual Pass'
    }
  , {
      amount:139
    , name:'Annual Pass'
    }
  , {
      amount:25
    , name:'Preferred Parking'
    }
  , {
      amount:18
    , name:'General Parking'
    }
    ]
  }
, {
    id:2
  , title:'DISNEYLAND'
  , thumb:'dl.jpg'
  , photo:'disneyland.jpg'
  , items:[
    {
      amount:99
    , name:'1-Day Ticket'
    }
  , {
      amount:185
    , name:'2-Day Ticket'
    }
  , {
      amount:235
    , name:'3-Day Ticket'
    }
  , {
      amount:260
    , name:'4-Day Ticket'
    }
  , {
      amount:275
    , name:'5-Day Ticket'
    }
    ]
  }
, {
    id:3
  , title:'BLUE MAN GROUP'
  , thumb:'bmg.jpg'
  , photo:'bluemangroup.jpg'
  , items:[
      {
        amount:98
      , name:'January 7:00 PM'
      }
    , {
        amount:98
      , name:'January 9:30 PM'
      }
    ]
  }
, {
    id:4
  , title:'CRISS ANGLE BELIEVE'
  , thumb:'cab.jpg'
  , photo:'show_believe.jpg'
  , items:[
      {
        amount:73
      , name:'January 7:00PM'
      }
    , {
        amount:73
      , name:'January 9:30PM'
      }

    ]
  }
, {
    id:5
  , title:'JERSEY BOYS'
  , thumb:'jb.jpg'
  , photo:'jerseyboys.jpg'
  , items:[
      {
        amount:60
      , name:'January 7:00PM'
      }
    ]
  }
, {
    id:6
  , title:'KÀ BY CIRQUE DU SOLEIL'
  , thumb:'ka.jpg'
  , photo:'kashow.jpg'
  , items:[
      {
        amount:77
      , name:'January 7:00PM'
      }
    , {
        amount:77
      , name:'January 9:30PM'
      }
    ]
  }
, {
    id:7
  , title:'MICHAEL JACKSON ONE'
  , thumb:'mjo.jpg'
  , photo:'michaeljacksonone.jpg'
  , items:[
      {
        amount:83
      , name:'January 7:00PM'
      }
    , {
        amount:83
      , name:'January 9:30PM'
      }
    ]
  }
, {
    id:8
  , title:'MYSTÈRE BY CIRQUE DU SOLEIL'
  , thumb:'mystere.jpg'
  , photo:'mystereshow.jpg'
  , items:[
      {
        amount:103
      , name:'January 7:00PM'
      }
    , {
        amount:103
      , name:'January 9:30PM'
      }
    ]
  }
, {
    id:9
  , title:'O BY CIRQUE DU SOLEIL'
  , thumb:'o.jpg'
  , photo:'oshow.jpg'
  , items:[
      {
        amount:123
      , name:'January 7:00PM'
      }
    , {
        amount:123
      , name:'January 9:30PM'
      }
    ]
  }
, {
    id:10
  , title:'SAN DIEGO ZOO'
  , thumb:'sdz.jpg'
  , photo:'sandiegozoo.jpg'
  , items:[
    {
      amount:50
    , name:'1-Day Pass'
    }
  , {
      amount:56
    , name:'2-Day Pass Plus'
    }
  , {
      amount:90
    , name:'2-visit Pass'
    }
  , {
      amount:165
    , name:'3-For-1 Pass'
    }
    ]
  }
, {
    id:11
  , title:'LE RÊVE - THE DREAM'
  , thumb:'reve.jpg'
  , photo:'thedream.jpg'
  , items:[
      {
        amount:114
      , name:'January 7:00PM'
      }
    , {
        amount:114
      , name:'January 9:30PM'
      }
    ]
  }
, {
    id:12
  , title:'SAFARI PARK'
  , thumb:'sp.jpg'
  , photo:'safaripark.jpg'
  , items:[
    {
      amount:50
    , name:'1-Day Pass'
    }
  , {
      amount:90
    , name:'2-visit Pass'
    }
  , {
      amount:165
    , name:'3-For-1 Pass'
    }
    ]
  }
, {
    id:13
  , title:'SEA WORLD'
  , thumb:'sw.jpg'
  , photo:'seaworld.jpg'
  , items:[
    {
      amount:89
    , name:'Single-Day Ticket'
    }
  , {
      amount:83
    , name:'Fun Card'
    }
    ]
  }
, {
    id:14
  , title:'USS MIDWAY'
  , thumb:'um.jpg'
  , photo:'ussmidway.jpg'
  , items:[
    {
      amount:20
    , name:'Adults Pass'
    }
  , {
      amount:17
    , name:'Seniors Pass'
    }
  , {
      amount:15
    , name:'Students Pass'
    }
  , {
      amount:10
    , name:'Youth Pass'
    }
    ]

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
