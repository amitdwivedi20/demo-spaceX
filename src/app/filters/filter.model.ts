export class FilterModel {
    public launch_Year: number;
    public launch_Success: boolean;
    public land_Success: boolean;
    public limit = 100;
}


export class LaunchStatus {
    public displayText: string;
    public value: boolean;
}

export class LaunchYear {
    public displayText: string;
    public value: number;
}
