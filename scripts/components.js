Vue.component('ba-table', {
    props: ['title', 'classes', 'headers', 'rows'],
    template: `
        <div :class='classes'>
            <h3>{{ title }}</h3>
            <table class='table'>
                <thead>
                    <tr>
                        <th scope='col'>Select</th>
                        <th scope='col' v-for='header in headers'>
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope='row' v-for='(row, index) in rows'>
                        <td scope='col'><input type='checkbox' :id='"select_" + row["Character"].replace(" ", "_")'></th>
                        <td scope='col' v-for='header in headers.slice(0, -1)'>
                            {{ row[header] }}
                        </td>
                        <td scope='col'>
                            <img :src='row["Image"]'>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})