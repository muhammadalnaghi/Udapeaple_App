import { Observable, Subject } from 'rxjs';
export declare class ObservableBus<T> extends Observable<T> {
    protected subject$: Subject<T>;
    constructor();
}
