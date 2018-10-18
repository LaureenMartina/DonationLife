import { Allergen } from "../allergen/Allergen";
import { Vaccine } from "../Vaccines/Vaccine";
import { MedicalForm } from "../medicalForm/MedicalForm";

export class User{
    
    _id : String;
    firstname: String;
    lastname: String;
    email: String;
    password: String;
    age: number;
    gender: String;
    phone: String;
    address: String;
    bloodType: String;
    isAdmin: Boolean
    sexualOrientation: String
    allergens: Allergen[];
    vaccines: Vaccine[];
    medicalForm: MedicalForm;
    
}