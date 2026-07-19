export interface Task {
    id: string,
    name: string,
    time: string,
    status: status
}

export type status = "Completed" | "Incompleted"; 