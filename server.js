const express = require('express');
const app = express();

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


app.get('/', (req, res) => {
  res.send('Hello There!');
});

app.get('/careers', (req, res) => {
    res.render('careers.ejs')
})

app.get('/severance', (req, res) => {
    res.render('severance.ejs')
})

const pastLumonCEOs = [
    {
        name: "Kier Eagan",
        time: "1865 - 1939",
        notes: "Founder of Lumon Industries. Started with topical salves, led for 74 years until his death."
    },
    {
        name: "Ambrose Eagan",
        time: "1939 - 1941",
        notes: "Kier's son. Shortest tenure at 2 years, possibly unpopular within the family."
    },
    {
        name: "Myrtle Eagan",
        time: "1941 - 1959",
        notes: "Kier's daughter, first female CEO. Known for ambition; namesake of Myrtle Eagan School for Girls."
    },
    {
        name: "Baird Eagan",
        time: "1959 - 1976",
        notes: "Likely Myrtle's son. Associated with Baird's Lumon housing development."
    },
    {
        name: "Gerhardt Eagan",
        time: "1976 - 1987",
        notes: "Led until around the 1987 stock market crash."
    },
    {
        name: "Pip Eagan",
        time: "1987 - 1999",
        notes: "Led until around Y2K (2000)."
    },
    {
        name: "Leonora Eagan",
        time: "1999 - 2003",
        notes: "Led through early 2000s, including 9/11 and the dot-com crash."
    },
    {
        name: "Jame Eagan",
        time: "2003 - Present",
        notes: "Current CEO as of the show's timeline. Introduced severance technology."
    }
  ];

  app.get('/about', (req, res) => {
    res.render('about.ejs', {
    pastLumonCEOs: pastLumonCEOs
    })
})
  const staff = [
    {
      FirstName: 'Mark',
      LastName: 'Scout',
      Moniker: 'Mark S.',
      Outie: 'Sad Mark',
      Position: 'Macrodata Refinement Employee',
      image: '/mark.webp'
    },   
    {
      FirstName: 'Irving',
      LastName: 'Bailiff',
      Moniker: 'Irving B.',
      Outie: 'Irving Bailiff',
      Position: 'Macrodata Refinement Employee',
      image: '/irving.webp'
    },   
    {
      FirstName: 'Dylan',
      LastName: 'George',
      Moniker: 'Dylan G.',
      Outie: 'Dylan George',
      Position: 'Macrodata Refinement Employee',
      image: '/dylan.jpg'
    },   
    {
      FirstName: 'Helly',
      LastName: 'Eagan',
      Moniker: 'Helly E.',
      Outie: 'Helena Eagan',
      Position: 'Macrodata Refinement Employee',
      image: '/helly.jpg'
    },   
    {
      FirstName: 'Burt',
      LastName: 'Goodman',
      Moniker: 'Burt G.',
      Outie: 'Burt Goodman',
      Position: 'Team lead for Optics & Design',
      image: '/burt.jpg'
    },   
    {
      FirstName: 'Harmony',
      LastName: 'Cobel',
      Moniker: 'Harmony C.',
      Outie: 'N/A',
      Position: 'Executive',
      image: '/harmony.jpg'
    },   
    {
      FirstName: 'Seth',
      LastName: 'Milchick',
      Moniker: 'Seth M.',
      Outie: 'N/A',
      Position: 'Oversees the severed floor of Lumon Industries',
      image: '/seth.webp',
    }
  ]

    app.get('/staff', (req, res) => {
        res.render('staff.ejs', {
        staff: staff
    })
})

    app.get('/staff/:name', (req, res) => {
        const name = req.params.name
        const employee = staff.find(element => element.FirstName === name)
        res.render('employee.ejs', {
            name: name,
            employee: employee
        })
    })

    app.get('/intranet', (req, res) => {
        res.render('intranet.ejs', {
        })
    })

    app.get('/intranet/OrderBusinessCards', (req, res) => {
        res.render('businesscards.ejs', {
        })
    })

    app.get('/Careers', (req,res) => {
        res.render('careers.ejs', {    
        })
    })

app.listen(3000);
