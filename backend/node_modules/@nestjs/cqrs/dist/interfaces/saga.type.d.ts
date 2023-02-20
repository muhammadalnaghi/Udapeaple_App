import { Observable } from 'rxjs';
import { ICommand } from './commands/command.interface';
import { IEvent } from './events/event.interface';
export declare type ISaga = (events$: Observable<IEvent>) => Observable<ICommand>;
