Vue.config.devtools = true
const url = "https://github.com/EdmundDong/mudae-trading/blob/master/harem.json"
const columns = ['Select', 'Character', 'Value', 'Image']

async function main() {
    
    const data_raw = $.getJSON(url, function() {
        console.log("Pulled JSON data");
    })
    console.log(data_raw)
    // const rawData = await pullData()

    // // Overall
    // const students = await formation(rawData, type = 'Overall')
    // console.log('Overall', students)
    // const light = await formation(rawData, type = 'Overall', defEnemy='light')
    // console.log('Overall Light', light)
    // const heavy = await formation(rawData, type = 'Overall', defEnemy='heavy')
    // console.log('Overall Heavy', heavy)
    // const special = await formation(rawData, type = 'Overall', defEnemy='special')
    // console.log('Overall Special', special)

    // // PVP
    // const pvp = await formation(rawData, type = 'PVP', )
    // console.log('PVP', pvp)

    // // Raid
    // const raidHeavy = await formation(rawData, type='Raid', defEnemy='heavy', environment='default')
    // console.log('Raid Heavy', raidHeavy)
    // const raidLight = await formation(rawData, type='Raid', defEnemy='light', environment='default')
    // console.log('Raid Light', raidLight)
    // const raidSpecial = await formation(rawData, type='Raid', defEnemy='special', environment='default')
    // console.log('Raid Special', raidSpecial)

    // new Vue({
    //     el: '#ba-tables',
    //     data: {
    //         tables: [
    //             { classes: 'ba-table overall', headers: columnsOverall, rows: students[0], tags: students[0].map(student => student['ATK Type']) },
    //             { classes: 'ba-table overall light', headers: columnsOverall, rows: light[0], tags: light[0].map(student => student['ATK Type']) },
    //             { classes: 'ba-table overall heavy', headers: columnsOverall, rows: heavy[0], tags: heavy[0].map(student => student['ATK Type']) },
    //             { classes: 'ba-table overall special', headers: columnsOverall, rows: special[0], tags: special[0].map(student => student['ATK Type']) },
    //             { classes: 'ba-table pvp', headers: columnsPvp, rows: pvp[0], tags: pvp[0].map(student => student['ATK Type']) },
    //             { classes: 'ba-table raid light', headers: columnsRaid, rows: raidLight[0], tags: raidLight[0].map(student => student['ATK Type']) },
    //             { classes: 'ba-table raid heavy', headers: columnsRaid, rows: raidHeavy[0], tags: raidHeavy[0].map(student => student['ATK Type']) },
    //             { classes: 'ba-table raid special', headers: columnsRaid, rows: raidSpecial[0], tags: raidSpecial[0].map(student => student['ATK Type']) }
    //         ]
    //     }
    // })

    // new Vue({
    //     el: '#ba-teams',
    //     data: {
    //         tables: [
    //             { classes: 'ba-team overall', headers: columnsOverall, rows: students[1], tags: students[1].map(student => student['ATK Type']) },
    //             { classes: 'ba-team overall light', headers: columnsOverall, rows: light[1], tags: light[1].map(student => student['ATK Type']) },
    //             { classes: 'ba-team overall heavy', headers: columnsOverall, rows: heavy[1], tags: heavy[1].map(student => student['ATK Type']) },
    //             { classes: 'ba-team overall special', headers: columnsOverall, rows: special[1], tags: special[1].map(student => student['ATK Type']) },
    //             { classes: 'ba-team pvp', headers: columnsPvp, rows: pvp[1], tags: pvp[1].map(student => student['ATK Type']) },
    //             { classes: 'ba-team raid light', headers: columnsRaid, rows: raidLight[1], tags: raidLight[1].map(student => student['ATK Type']) },
    //             { classes: 'ba-team raid heavy', headers: columnsRaid, rows: raidHeavy[1], tags: raidHeavy[1].map(student => student['ATK Type']) },
    //             { classes: 'ba-team raid special', headers: columnsRaid, rows: raidSpecial[1], tags: raidSpecial[1].map(student => student['ATK Type']) }
    //         ]
    //     }
    // })
}

main()