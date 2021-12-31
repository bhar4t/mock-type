interface Priority {
    reason: string
    lastSeen: string
    name: string
    link: string
}

type PriorityState = {
    priorities: Priority[]
    headers: string[]
    keys: string[]
}

type PriorityAction = {
    type: string
    payload: Priority[]
}

type DispatchPriority = (args: PriorityAction) => PriorityAction