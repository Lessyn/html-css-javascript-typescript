import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({
    providedIn: 'root'
})

export class AlertService{

    alertSubject: Subject<Alert>;

    sucess(message: string){
        this._alert(AlertType.SUCESS, message); 
    }

    warning(message: string){
        this._alert(AlertType.WARNING, message);
    }

    danger(message: string){
        this._alert(AlertType.DANGER, message);
    }

    info(message: string){
        this._alert(AlertType.INFO, message);
    }

    private _alert(alertType: AlertType, message: string){

        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert(){
        return this.alertSubject.asObservable(); 
    }
}