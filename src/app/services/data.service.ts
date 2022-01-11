// Interfaz para el modelado de datos recibidos:
import { PEPInterface } from './../interfaces/data.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class DataService {
    // Enlace de la API de la cual obtenemos los datos
    private apiURL: string = 'http://hp-api.herokuapp.com/api/characters';
    constructor(private http: HttpClient) { }

    // Obtiene los personajes de la casa especificada a través del elemento HTML 'select'
    getPersonajesDeCasa(casa: string): any {
        return this.http.get<PEPInterface[]>(`${this.apiURL}/house/${casa}`);
    }

    // Obtiene todos y solamente los estudiantes.
    getEstudiantes(): Observable<PEPInterface[]> {
        return this.http.get<PEPInterface[]>(`${this.apiURL}/students`);
    }

    // Obtiene todos y solamente los profesores.
    getProfesores(): Observable<PEPInterface[]> {
        return this.http.get<PEPInterface[]>(`${this.apiURL}/staff`);
    }
}