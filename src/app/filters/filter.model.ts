export class FilterModel{
    public launch_year: number;
    public launch_success: boolean;
    public land_success:boolean;
    public limit:number = 100;
}


export class LaunchStatus{
    public displayText:string;
    public value: boolean;
}

export class LaunchYear{
    public displayText:string;
    public value: number;
}