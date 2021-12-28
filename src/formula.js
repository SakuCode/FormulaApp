/*
    This file contains the calender and points from the current F1 season
    Changes made here will be used in Schedule.js and Scoreboard.js files
*/

const formula = {
    name: 'formula 1 race calender',
    circuits: [
      {
        country: 'Bahrain',
        circuit: 'Bahrain International Circuit',
        date: 'Mar 26-28',
        status: 'finished',
        id: 1
      },
      {
        country: 'Italy',
        circuit: 'Imola',
        date: 'Apr 16-18',
        status: 'finished',
        id: 2
      },
      {
        country: 'Portugal',
        circuit: 'Autodromo do Algarve',
        date: 'Apr 30-May 2',
        status: 'finished',
        id: 3
      },
      {
        country: 'Spain',
        circuit: 'Circuit de Catalunya',
        date: 'May 7-9',
        status: 'finished',
        id: 4
      },
      {
        country: 'Monaco',
        circuit: 'Monaco',
        date: 'May 20-23',
        status: 'finished',
        id: 5
      },
      {
        country: 'Azerbaijan',
        circuit: 'Baku City Circuit',
        date: 'Jun 4-6',
        status: 'finished',
        id: 6
      },
      {
        country: 'France',
        circuit: 'Paul Ricard',
        date: 'Jun 18-20',
        status: 'finished',
        id: 7
      },
      {
        country: 'Austria',
        circuit: 'Red Bull Ring',
        date: 'Jun 25-27',
        status: 'finished',
        id: 8
      },
      {
        country: 'Austria',
        circuit: 'Red Bull Ring',
        date: 'Jul 2-4',
        status: 'finished',
        id: 9
      },
      {
        country: 'England',
        circuit: 'Silverstone',
        date: 'Jul 16-18',
        status: 'finished',
        id: 10
      },
      {
        country: 'Hungary',
        circuit: 'Hungaroring',
        date: 'Jul 30-Aug 1',
        status: 'finished',
        id: 11
      },
      {
        country: 'Belgium',
        circuit: 'Spa-Francorchamps',
        date: 'Aug 27-29',
        status: 'finished',
        id: 12
      },
      {
        country: 'Netherlands',
        circuit: 'Zandvoort',
        date: 'Sep 3-5',
        status: 'finished',
        id: 13
      },
      {
        country: 'Italia',
        circuit: 'Monza',
        date: 'Sep 10-12',
        status: 'finished',
        id: 14
      },
      {
        country: 'Russia',
        circuit: 'Sochi Autodrom',
        date: 'Sep 24-26',
        status: 'finished',
        id: 15
      },
      {
        country: 'Turkey',
        circuit: 'Istanbul Park',
        date: 'Oct 8-10',
        status: 'finished',
        id: 16
      },
      {
        country: 'United States',
        circuit: 'Circuit of the Americas',
        date: 'Oct 22-24',
        status: 'finished',
        id: 17
      },
      {
        country: 'Mexico',
        circuit: 'Autodromo Hermanos Rodriguez',
        date: 'Nov 5-7',
        status: 'finished',
        id: 18
      },
      {
        country: 'Brazil',
        circuit: 'Interlagos',
        date: 'Nov 12-14',
        status: 'finished',
        id: 19
      },
      {
        country: 'Qatar',
        circuit: 'Losail International Circuit',
        date: 'Nov 19-21',
        status: 'finished',
        id: 20
      },
      {
        country: 'Saudi Arabia',
        circuit: 'Jeddah Corniche Circuit',
        date: 'Dec 3-5',
        status: 'finished',
        id: 21
      },
      {
        country: 'Abu Dhabi',
        circuit: 'Yas Marina',
        date: 'Dec 10-12',
        status: 'finished',
        id: 22
      }
    ],

    leaderboard: [
        {
            id: 1,
            name: 'Mercedes',
            points: 613.5,
            driverone: [
                {
                    position: 2,
                    name: 'Lewis Hamilton',
                    nationality: 'GBR',
                    points: 387.5
                }
            ],
            drivertwo: [
                {
                    position: 3,
                    name: 'Valtteri Bottas',
                    nationality: 'FIN',
                    points: 226
                }
            ]
        },
        {
            id: 2,
            name: 'Red Bull Racing Honda',
            points: 585.5,
            driverone: [
                {
                    position: 1,
                    name: 'Max Verstappen',
                    nationality: 'NED',
                    points: 395.5
                }
            ],
            drivertwo: [
                {
                    position: 5,
                    name: 'Sergio Perez',
                    nationality: 'MEX',
                    points: 190
                }
            ]
        },
        {
            id: 4,
            name: 'Mclaren Mercedes',
            points: 275,
            driverone: [
                {
                    position: 8,
                    name: 'Daniel Ricciardo',
                    nationality: 'AUS',
                    points: 115
                }
            ],
            drivertwo: [
                {
                    position: 4,
                    name: 'Lando Norris',
                    nationality: 'GBR',
                    points: 160
                }
            ]
        },
        {
            id: 7,
            name: 'Aston Martin Mercedes',
            points: 77,
            driverone: [
                {
                    position: 12,
                    name: 'Sebastian Vettel',
                    nationality: 'GER',
                    points: 43
                }
            ],
            drivertwo: [
                {
                    position: 13,
                    name: 'Lance Stroll',
                    nationality: 'CAN',
                    points: 34
                }
            ]
        },
        {
            id: 5,
            name: 'Alpine Renault',
            points: 155,
            driverone: [
                {
                    position: 10,
                    name: 'Fernando Alonso',
                    nationality: 'ESP',
                    points: 81
                }
            ],
            drivertwo: [
                {
                    position: 11,
                    name: 'Esteban Ocon',
                    nationality: 'FRA',
                    points: 74
                }
            ]
        },
        {
            id: 3,
            name: 'Ferrari',
            points: 323.5,
            driverone: [
                {
                    position: 7,
                    name: 'Charles Leclerc',
                    nationality: 'MON',
                    points: 159
                }
            ],
            drivertwo: [
                {
                    position: 6,
                    name: 'Carlos Sainz',
                    nationality: 'ESP',
                    points: 164.5
                }
            ]
        },
        {
            id: 6,
            name: 'Alphatauri Honda',
            points: 142,
            driverone: [
                {
                    position: 9,
                    name: 'Pierre Gasly',
                    nationality: 'FRA',
                    points: 110
                }
            ],
            drivertwo: [
                {
                    position: 14,
                    name: 'Yuki Tsunoda',
                    nationality: 'JAP',
                    points: 32
                }
            ]
        },
        {
            id: 9,
            name: 'Alfa Romeo Racing Ferrari',
            points: 13,
            driverone: [
                {
                    position: 17,
                    name: 'Kimi Räikkönen',
                    nationality: 'FIN',
                    points: 10
                }
            ],
            drivertwo: [
                {
                    position: 18,
                    name: 'Antonio Giovinazzi',
                    nationality: 'ITA',
                    points: 3
                }
            ],
            driverthree: [
                {
                    position: 20,
                    name: 'Robert Kubica',
                    nationality: 'POL',
                    points: 0
                }
            ]
        },
        {
            id: 10,
            name: 'Haas Ferrari',
            points: 0,
            driverone: [
                {
                    position: 19,
                    name: 'Mick Schumacher',
                    nationality: 'GER',
                    points: 0
                }
            ],
            drivertwo: [
                {
                    position: 21,
                    name: 'Nikita Mazepin',
                    nationality: 'RUS',
                    points: 0
                }
            ]
        },
        {
            id: 8,
            name: 'Williams Mercedes',
            points: 23,
            driverone: [
                {
                    position: 15,
                    name: 'George Russell',
                    nationality: 'GBR',
                    points: 16
                }
            ],
            drivertwo: [
                {
                    position: 16,
                    name: 'Nicholas Latifi',
                    nationality: 'CAN',
                    points: 7
                }
            ]
        },
    ]
  }

  export default formula