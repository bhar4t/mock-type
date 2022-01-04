
const initialState: ActivityState = {
    activities: [
        { 
            date: '1:14 PM',
            name: 'Abdul Abdul',
            indicator: 'var(--lighterror)',
            type: 'Virtual', tier: 'T1',
            link: 'https://example.com'
        },
        { 
            date: '3:28',
            name: 'Abdul Abdul',
            indicator: 'var(--lighterror)',
            type: 'Face to face', tier: 'T2',
            link: 'https://example.com'
        },
        { 
            date: '3:29',
            name: 'Terni Abimbola',
            indicator: 'var(--lightsuccess)',
            type: 'Face to face', tier: 'T3',
            link: 'https://example.com'
        },
        { 
            date: '3:29',
            name: 'Rasha Abdul Fahim',
            indicator: 'var(--lightsuccess)',
            type: 'Face to face', tier: 'T1',
            link: 'https://example.com'
        },
    ],
    headers: [
        "Date",
        "Name",
        "",
        "Type",
        "Medical Tier",
        "Link"
    ],
    keys: [
        "date",
        "name",
        "indicator",
        "type",
        "tier",
        "link",
    ]
}

const activityReducer = (state: ActivityState = initialState, action: ActivityAction) => {
    switch(action.type) {
        default: return state
    }
}

export default activityReducer