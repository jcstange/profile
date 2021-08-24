type IncrementAction = {
    type: string,
    number: number
}

type DecrementAction = {
    type: string,
    number2: number
}

type IndexActions = IncrementAction | DecrementAction

type IncrementState = {
    type: string,
    number: number
}

type DispatchType = (args: IndexActions) => IndexActions

type Job = {
    name: string,
    time: string,
    description: string,
    platform: string
}