import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { mdlAuthResponse } from "model/mdlAuthResponse";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class Guard implements CanActivate {


    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
        const token = mdlAuthResponse.token
        if(token === null) {
            this.router.navigate(['login'])
            return false
        }

        return true
    }

}