export class FilterModel {
    public launchYear: number;
    public launchSuccess: boolean;
    public landSuccess: boolean;
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
