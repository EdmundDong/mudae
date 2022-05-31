Vue.config.devtools = true
const url = "https://edmunddong.github.io/mudae-trading/harem.json"
const columns = ['Character', 'Series', 'Value', 'Image']

async function main() {
    
    // get json data from repo
    $.getJSON(url, function(output) {
        const data = output
        console.log("Pulled JSON data")
        console.log(data)

        // sort by value
        data.sort((a, b) => parseInt(b['Value']) - parseInt(a['Value']));

        // generate vue
        new Vue({
            el: '#table',
            data: {
                title: "MUDAE", classes: 'table-test', headers: columns, rows: data
            }
        })
    })
}

main()