
const initialState: PriorityState = {
    priorities: [
        { reason: 'Score decrease', lastSeen: '2020-11-17', name: 'Mathide Pauls', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2019-01-05', name: 'Sanand Esmail', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2018-07-17', name: 'Dimitrios Aposolo', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2018-03-12', name: 'Peter Arthur-Farraz', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2017-12-11', name: 'Tayyib Hayat', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2021-05-27', name: 'Patricia Henry', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2018-11-27', name: 'Henry Patricia', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2019-04-27', name: 'Chris Pratt', link: 'https://example.com' },
        { reason: 'Score decrease', lastSeen: '2020-05-01', name: 'Jing Yeo', link: 'https://example.com' }
    ],
    headers: [
        "Reason", "Last Seen", "Name", "Link"
    ],
    keys: [
        "reason",
        "lastSeen",
        "name",
        "link",
    ]
}

const priorityReducer = (state: PriorityState = initialState, action: PriorityAction) => {
    switch(action.type) {
        default:
            return state
    }
}

export default priorityReducer